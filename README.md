# MERN Blog — Integration Assignment

Concise README for the MERN blog project used in Week 4. This repository contains a React front-end (`client`) and an Express + MongoDB back-end (`server`). The app demonstrates authentication, CRUD operations for posts, categories, and basic file uploads.

## Contents

- `client/` — React (Vite) front-end
- `server/` — Express API with Mongoose models
- `Week4-Assignment.md` — assignment instructions and tasks

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)
- Optional: `nodemon` for server development

## Quick Setup

1. Clone the repository and open the project root:

```pwsh
git clone <repo-url>
cd mern-stack-integration-Jothphat21
```

2. Create a `.env` in the `server/` folder with the following variables:

```
MONGO_URI=<your-mongo-connection-string>
JWT_SECRET=<a-strong-secret>
PORT=5000
NODE_ENV=development
```

3. Install dependencies

```pwsh
# from project root
cd server
npm install
cd ../client
npm install
```

4. Run the app

```pwsh
# Start server (dev)
cd server
npm run dev

# In a new terminal: start client
cd ../client
npm run dev
```

The React app (Vite) should open at `http://localhost:5173` by default and the API runs at `http://localhost:5000/api`.

## Environment & API

- API base path: `/api`
- Auth endpoints: `/api/auth/register`, `/api/auth/login`
- Posts: `/api/posts`
- Categories: `/api/categories`

If the client fails to reach the server, set `VITE_API_URL` in `client/.env` or ensure `client/src/services/api.js` uses the correct `baseURL`.

## Common Troubleshooting

- 400 responses during registration usually mean: missing fields or the email already exists in the database. Inspect the response body in the browser Network tab for the `message` field.
- `Uncaught (in promise) AxiosError`: wrap API calls in `try/catch` on the client and read `error.response.data.message`.
- If you see server errors (500), check the server terminal for stack traces and confirm `MONGO_URI` and `JWT_SECRET` are set.

## Useful Commands

- Server (dev): `cd server && npm run dev`
- Server (prod): `cd server && npm start`
- Client: `cd client && npm run dev`

## Notes for Grading / Submission

- Ensure your local changes are committed and pushed to the GitHub Classroom repository linked to the assignment.
- Include screenshots and any additional notes in the repository if required by the assignment brief.

## Resources

- MongoDB: https://docs.mongodb.com/
- Express: https://expressjs.com/
- React: https://react.dev/
- Mongoose: https://mongoosejs.com/docs/

If you want, I can also add a short section with example `.env` values, or update the `client` code to show server errors in the UI. Which would you like next?
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 