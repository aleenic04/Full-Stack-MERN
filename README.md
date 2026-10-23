# Full-Stack MERN User Management System

A full-stack user management application built using the MERN stack.

## Overview

This project provides a web interface for managing user records, with a React frontend, an Express and Node.js backend, and MongoDB for data storage.

## Features

- Display users
- Add users
- Edit user details
- Delete users

## Technology Stack

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Database |
| Express.js | Backend API |
| React.js | Frontend |
| Node.js | Backend runtime |
| Axios | HTTP requests |

## Project Structure

```text
Full-Stack-MERN/
├── client/          # React frontend
├── server/          # Express backend
├── postman/         # API testing resources
├── .postman/        # Postman configuration
└── .gitignore
```

## Local Setup

### Backend

```bash
cd server
npm install
```

Configure the required environment variables in `server/.env`, then start the backend using the script defined in `server/package.json`.

### Frontend

```bash
cd client
npm install
```

Configure `REACT_APP_API_URL` in `client/.env`, then run:

```bash
npm start
```

## Environment Variables

### Backend

- `MONGO_URL` — MongoDB connection string
- `CLIENT_URL` — frontend origin allowed by CORS
- `PORT` — server port

### Frontend

- `REACT_APP_API_URL` — backend API base URL

Use placeholder values in example files. Never commit actual passwords, connection strings, or secrets.

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

Configure production environment variables in the respective hosting dashboards.

## License

Add a license if you intend to distribute this project under a specific open-source license.
