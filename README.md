# TaskFlow API

A scalable REST API with JWT authentication and role-based access control.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt
- Swagger UI
- React.js (frontend)

## Setup

### Backend
git clone https://github.com/munawwar-ali/taskflow-api
cd taskflow-api
npm install

Create .env file:
PORT=5000
JWT_SECRET=your_secret
MONGO_URI=mongodb://localhost:27017/taskflow

npm run dev

### Frontend
cd frontend
npm install
npm run dev

## API Endpoints

| Method | Endpoint              | Auth     | Description          |
|--------|-----------------------|----------|----------------------|
| POST   | /api/v1/auth/register | Public   | Register user        |
| POST   | /api/v1/auth/login    | Public   | Login, get JWT       |
| GET    | /api/v1/auth/profile  | JWT      | Get profile          |
| GET    | /api/v1/tasks         | JWT      | Get tasks            |
| POST   | /api/v1/tasks         | JWT      | Create task          |
| PUT    | /api/v1/tasks/:id     | JWT      | Update task          |
| DELETE | /api/v1/tasks/:id     | JWT      | Delete task          |

## Roles
- **User** — can only see and manage their own tasks
- **Admin** — can see and manage all users' tasks

## API Docs
http://localhost:5000/api-docs