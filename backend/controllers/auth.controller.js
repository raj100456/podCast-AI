import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';
import dotenv from 'dotenv';
dotenv.config();


const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };


export const signup = async (req, res) => {
    try {
      const { email, password, userName } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ email, password: hashedPassword, userName });
      await newUser.save();
  
      // Don't set a cookie or generate a token on signup
      res.status(201).json({ message: 'User created successfully', userId: newUser._id });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  };

  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user._id);

      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: 3600000 
      });
  
      res.status(200).json({ message: 'Logged in successfully', userId: user._id });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  };

  export const logout = (req, res) => {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });
    console.log("Logout successful");
    res.status(200).json({ message: 'Logged out successfully' });
  };
  
  export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.decodedUser.userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
  };