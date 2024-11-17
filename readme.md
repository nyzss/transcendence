# Transcendence

**Transcendence** is a real-time multiplayer Pong game with user authentication, live chat, and a leaderboard system. Built as the final project of the 42 common core curriculum, it demonstrates mastery of full-stack development, real-time systems, and user management.

---

## Features

- **Real-time Multiplayer Pong Game**: Engage in live matches with other users.
- **Server-Side Gameplay**: Authoritative game logic to ensure fairness and synchronization.
- **User Authentication**: Secure login with JWT and optional Two-Factor Authentication (2FA).
- **Live Chat**: Real-time communication with other players.
- **Game Customization**: Personalize the game experience with customizable options.
- **Dashboards**: Detailed user and game statistics, including leaderboards.
- **Tournament Management**: Create and manage tournaments for players.
- **Browser Compatibility**: Expanding support for multiple browsers.

---

## Tech Stack

### Backend
- **Framework**: Django (Python)
- **Database**: PostgreSQL
- **Cache**: Redis
- **Authentication**: JWT and 2FA

### Frontend
- **Toolkit**: Bootstrap for responsive design
- **Library**: Chart.js for interactive and visually engaging dashboards
- **Framework**: Vanilla JavaScript and HTML5 Canvas for game rendering

### Deployment
- **Containerization**: Dockerized environment for seamless deployment
- **WebSocket Support**: Real-time communication and gameplay synchronization

---

## Modules and Achievements

| Module                                      | Status | Type  | Points |
|---------------------------------------------|--------|-------|--------|
| User and Game Stats Dashboards              | Done   | Minor | 0.5    |
| Game Customization Options                  | Done   | Minor | 0.5    |
| Expanding Browser Compatibility             | Done   | Minor | 0.5    |
| Live Chat                                   | Done   | Major | 1      |
| Remote Players                              | Done   | Major | 1      |
| Use a Framework as Backend                  | Done   | Major | 1      |
| Implement Two-Factor Authentication (2FA)  | Done   | Major | 1      |
| Implementing Remote Authentication          | Done   | Major | 1      |
| Standard User Management and Tournaments    | Done   | Major | 1      |
| Use a Database for the Backend              | Done   | Minor | 0.5    |
| Use a Front-End Framework or Toolkit        | Done   | Minor | 0.5    |
| Server-Side Pong                            | Done   | Major | 1      |

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/nyzss/transcendence.git
   cd transcendence
   ```

2. **Set Up Environment Variables**:

   - Rename `.env.template` to `.env`.
   - Update the variables in `.env` as needed.

3. **Build and Run the Application**:

   ```bash
   docker compose up --build
   ```

   This command builds and starts the Docker containers for the application.

---

## Usage

Access the application at `http://localhost:443`.
This can be changed in the .env file.

