# User Management Web Application

This is a full-stack web application for user registration, login, and management. The application is built using React for the frontend and Node.js with Express.js for the backend, connected to a MongoDB database. The application features responsive design, thanks to Bootstrap.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- User registration with fields: Name, Password, Email, Phone No, and Profession.
- Password encryption for security.
- User login with validation.
- Home page displaying a list of all registered users.
- Ability to update or delete users.
- Fully responsive design using Bootstrap.

## Technologies Used

- **Frontend**:

  - React.js
  - Bootstrap
  - React-Bootstrap

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (for MongoDB object modeling)
  - bcrypt.js (for password encryption)
  - cors (for handling Cross-Origin Resource Sharing)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible via a cloud service (e.g., MongoDB Atlas).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/user-management-app.git
    cd user-management-app
    ```
2.  **Backend setup**: - Navigate to the `backend` directory

    ```bash
    cd backend
    ```

    - Install the backend dependencies:

    ```bash
    npm install
    ```

    - Create a `.env` file in the `backend` directory with the following contents:

    ```bash
    MONGO_URI=mongodb://localhost:27017/user_managementPORT=5000
    ```

    - Replace the `MONGO_URI` with your MongoDB connection string if you're using MongoDB Atlas or a different setup.

3.  **Frontend setup**:
    - Navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
    - Install the frontend dependencies:
      ```bash
      npm install
      ```

### Running the Application

1. Start the backend server:
   - In the `backend` directory, run:
     ```bash
     npm start
     ```
2. Start the frontend development server:
   - In the frontend directory, run:
     ```bash
     npm start
     ```
3. Open your browser and navigate to http://localhost:3000 to see the application in action.

### Project Structure

```bash
   user-management-app/
│
├── backend/                # Backend code (Node.js + Express + MongoDB)
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── server.js           # Entry point for the backend server
│   └── .env                # Environment variables
│
├── frontend/               # Frontend code (React.js)
│   ├── public/             # Public assets
│   ├── src/                # React components and pages
│   │   ├── components/     # Reusable components (Navbar, Forms)
│   │   ├── pages/          # Application pages (Register, Login, Home)
│   │   ├── App.js          # Main App component with routing
│   │   └── index.js        # Entry point for React
│   └── package.json        # Frontend dependencies
│
└── README.md               # Project documentation
```

### API Endpoints

- POST /api/register: Registers a new user.
- POST /api/login: Authenticates a user and allows them to log in.
- GET /api/users: Retrieves a list of all registered users.
- PUT /api/update/:id: Updates a specific user's details.
- DELETE /api/delete/:id: Deletes a specific user.

### Screenshort

![alt text](<frontend/assets/Screenshot (1725).png>)
![alt text](<frontend/assets/Screenshot (1726).png>)
![alt text](<frontend/assets/Screenshot (1727).png>)
