import React, { createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { config } from '../config/config';
import { BACKENDURL } from '../config/BackendUrl';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/auth/verify`, config);
      setUser(response.data._id);

    } catch (error) {
      console.error('Error verifying user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${BACKENDURL}/api/auth/login`, { email, password }, config);
      setUser(response.data.userId);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error.response.data;
    }
  };

  const signup = async (email, password, userName) => {
    try {
      await axios.post(`${BACKENDURL}/api/auth/signup`, { email, password, userName }, config);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      throw error.response.data;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BACKENDURL}/api/auth/logout`, {}, config);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};