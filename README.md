# LankaTransit

**A DevOps-Enabled Real-Time Public Bus Tracking and Passenger Information System for Sri Lanka**

## Project Overview

LankaTransit aims to improve public transportation in Sri Lanka by providing bus tracking and passenger information. This repository contains the frontend and backend components, along with DevOps configuration for automated testing and Docker-based deployment.

## Technologies Used

- **Frontend:** React and Vite
- **Backend:** Node.js and Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT) and bcrypt
- **Testing:** Jest and Supertest
- **Containerization:** Docker and Docker Compose
- **CI/CD:** GitHub Actions
- **Container Registry:** GitHub Container Registry (GHCR)

## Repository Structure

```text
LankaTransit/
├── Backend/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── tests/
│   └── package.json
├── Frontend/
│   └── README.md
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## DevOps Implementation

The project uses GitHub Actions to automate backend testing and Docker image publishing.

The workflow performs the following steps:

1. Checks out the source code.
2. Sets up Node.js.
3. Installs backend dependencies.
4. Runs automated backend tests.
5. Builds the Docker image.
6. Publishes the image to GitHub Container Registry when code is pushed to the configured branches.

The Docker image is available at:

`ghcr.io/yasirurashmika/lankatransit-backend:latest`

## Prerequisites

Before running the backend, install:

- Docker Desktop with Docker Compose support, or Docker Engine with the Compose plugin
- Git

## Run the Backend

### 1. Clone the repository

```bash
git clone -b devops/testing https://github.com/YASIRURASHMIKA/LankaTransit-backend.git
cd LankaTransit-backend/Backend
```

### 2. Configure environment variables

Create a `.env` file inside the `Backend` directory:

```env
MONGO_URI=mongodb://mongodb:27017/lankatransit
PORT=3000
JWT_SECRET=replace_with_a_long_random_secret
```

Replace the example JWT secret with a strong, unique secret. Do not commit the `.env` file to Git.

### 3. Download and start the services

```bash
docker compose pull backend
docker compose up -d
```

Docker Compose starts the backend and MongoDB containers.

### 4. Check the containers

```bash
docker compose ps
```

### 5. Test the backend

Open:

`http://localhost:3000/`

Or run:

```bash
curl http://localhost:3000/
```

Expected response:

```text
LankaTransit Backend is running!
```

### 6. Stop the services

```bash
docker compose down
```

This stops and removes the containers while preserving the MongoDB data volume. Avoid `docker compose down -v` unless you intentionally want to delete that volume and its stored database data.

## Authentication API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| GET | `/api/auth/profile` | Access a protected user profile |
| GET | `/api/auth/admin` | Access an admin-protected route |

Protected endpoints require a valid JWT in the request's authorization header.

## Current Deployment Approach

The backend and MongoDB run as Docker containers. GitHub Actions automates testing, image building, and image publishing. Starting or updating the services on a separate computer currently requires running Docker Compose commands on that computer.

## Repository

[GitHub: LankaTransit Backend](https://github.com/YASIRURASHMIKA/LankaTransit-backend)
