# Car Rental System

## Overview

The Car Rental System is a full-stack web application designed to streamline the process of renting cars. The project features a robust backend built with Node.js, TypeScript, Express, and MongoDB, and a modern frontend developed using Vite, React with TypeScript, Redux Toolkit for state management and API calls, Material-UI for UI components, and React Hook Form for form handling.

## Features

- **User Authentication**: Secure login and signup functionality.
- **Car Management**: Add, update, delete, and view available cars.
- **Booking System**: Rent cars with real-time updates and validations.
- **Responsive Design**: User-friendly interface optimized for various devices.
- **State Management**: Efficient state handling using Redux Toolkit.
- **Form Handling**: Seamless and validated form submissions with React Hook Form.

## Tech Stack

### Backend

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB**

### Frontend

- **Vite**
- **React (with TypeScript)**
- **Redux Toolkit**
- **Material-UI (MUI)**
- **React Hook Form**

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm or Yarn
- MongoDB

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Folder Structure

### Frontend

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   │   ├── slices/
│   │   └── store.ts
│   ├── utils/
│   ├── App.tsx
├── package.json
├── tsconfig.json
```

## Scripts

### Backend

- `npm run dev`: Start the development server.
- `npm run build`: Build the TypeScript code.
- `npm start`: Run the production server.

### Frontend

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.

## APIs

### Authentication

- **POST** `/api/auth/signup` - Register a new user.
- **POST** `/api/auth/login` - Authenticate a user.

### Cars

- **GET** `/api/cars` - Fetch all available cars.
- **POST** `/api/cars` - Add a new car (Admin only).
- **PUT** `/api/cars/:id` - Update car details (Admin only).
- **DELETE** `/api/cars/:id` - Delete a car (Admin only).

### Bookings

- **POST** `/api/bookings` - Create a new booking.
- **GET** `/api/bookings` - Fetch user bookings.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your message here'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
