# PodCast Responsive Website

This project is a responsive web application built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication with JWT and follows best practices for code quality and architecture.

## Table of Contents

- [PodCast Responsive Website](#podcast-responsive-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
  - [Bonus Points](#bonus-points)
  - [License](#license)

## Features

- User registration and login with JWT-based authentication.
- Responsive design that adapts to various screen sizes.
- Modular and maintainable code structure.

## Technologies Used

- **Backend:**

  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT for authentication

- **Frontend:**
  - React
  - React Router for navigation

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/raj100456/podCastAI
   cd podCast
   ```

2. Navigate to the backend directory and install dependencies:

   ```
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:

   ```
   MONGODB_URI="add yours",
   JWT_SECRET="add yours",
   ```

4. Start the backend server:

   ```
   npm start
   ```

5. In a new terminal, navigate to the frontend directory and install dependencies:

   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the provided authentication features to register and log in.

## Bonus Points

- The project emphasizes code modularity, readability, and effective use of hooks.
- Data Structures and Algorithms (DSA) strategies were implemented to optimize the code, including:
  - Efficient state management using React hooks.
  - Proper error handling and validation in API calls.

## License

This project is licensed under the MIT License.
