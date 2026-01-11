<h1 align="center">
  <br>
  🏗️ <br>
  ProjectBuilder
  <br>
</h1>

<h4 align="center">Visualize, Model, and Generate your System Architecture.</h4>

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-docs">API Docs</a> •
  <a href="#-author">Author</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg?style=flat-square&color=2E8B57" alt="Status">
  <img src="https://img.shields.io/badge/react-v19-blue?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/node-v20-green?style=flat-square&logo=nodedotjs" alt="Node">
  <img src="https://img.shields.io/badge/docker-compose-blue?style=flat-square&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/postgres-15-336791?style=flat-square&logo=postgresql" alt="Postgres">
  <img src="https://img.shields.io/badge/license-ISC-lightgrey?style=flat-square" alt="License">
</p>

<br>

## 🔖 About

**ProjectBuilder** is an interactive visual tool designed for software developers and architects. It allows you to create infrastructure and system architecture diagrams using an intuitive "Drag & Drop" interface.

Unlike generic drawing tools, ProjectBuilder is tech-focused, offering a vast library of real icons (AWS, Azure, Languages, Frameworks) and enabling users to save and share projects via unique links without the barrier of mandatory login.

---

## ✨ Features

* **🎨 Visual Modeling (Drag & Drop):** Build complex diagrams by dragging nodes onto an infinite canvas (powered by `@xyflow/react`).
* **💾 Data Persistence:** Save your diagrams and retrieve them later via a unique ID.
* **🔗 Sharing:** Generate access links to share the architecture with your team.
* **📚 Rich Library:** Hundreds of categorized icons (Cloud, DevTools, Databases, Languages).
* **🎓 Interactive Tutorial:** Integrated onboarding system (`intro.js`) for new users.
* **📱 Responsive:** Adaptive interface for both Desktop and Mobile.

---

## 🚀 Tech Stack

The project uses the latest technologies in the JavaScript/TypeScript ecosystem.

### Frontend
| Technology | Description |
| :--- | :--- |
| **React 19** | Core library for UI. |
| **Vite** | High-performance build tool. |
| **Tailwind CSS v4** | Next-gen utility-first styling. |
| **React Flow (@xyflow)** | Engine for node-based diagram building. |
| **Axios** | HTTP client for API communication. |
| **React Hot Toast** | Elegant toast notifications. |

### Backend
| Technology | Description |
| :--- | :--- |
| **Node.js v20** | JavaScript runtime on the server. |
| **Express** | Fast and minimalist web framework. |
| **Prisma ORM** | Modern ORM for database interaction. |
| **PostgreSQL** | Robust relational database. |
| **Swagger** | Automatic API documentation. |
| **JWT** | Access token management for secure sharing. |

### Infrastructure & DevOps
* **Docker & Docker Compose:** Complete environment orchestration (Frontend, Backend, and Database).

---

## 🐳 Getting Started (Docker)

The easiest way to run the project is using Docker, as it automatically configures the database, backend, and frontend.

### Prerequisites
* Docker and Docker Compose installed.

### Step-by-Step

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/bernardosoares30/project-builder.git](https://github.com/bernardosoares30/project-builder.git)
    cd project-builder
    ```

2.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` folder based on `.env.example`:
    ```bash
    # Example for backend/.env
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_NAME=projectbuilder
    JWT_SECRET=your_secret_key_here
    # The URL is automatically assembled by Docker Compose, but for reference:
    # DATABASE_URL="postgresql://postgres:postgres@db:5432/projectbuilder?schema=public"
    ```

3.  **Start the Containers:**
    In the project root (where the main `docker-compose.yml` is located), run:
    ```bash
    docker-compose up --build
    ```

4.  **Access the Application:**
    * **Frontend:** `http://localhost:5173`
    * **Backend API:** `http://localhost:3000`
    * **Swagger Docs:** `http://localhost:3000/api-docs`

---

## 🔌 API Endpoints

Full documentation is available via Swagger at `/api-docs`. Below are the main routes:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/diagram/create-diagram` | Creates a new diagram and returns the ID. |
| `GET` | `/api/diagram/:id` | Returns data (nodes and edges) of a diagram. |
| `PUT` | `/api/diagram/save-diagram/:id` | Updates an existing diagram structure. |
| `DELETE`| `/api/diagram/delete-diagram/:id` | Removes a diagram. |
| `POST` | `/api/diagram/generate-token/:id` | Generates a temporary access token. |

---

## 📂 Project Structure

```text
ProjectBuilder/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Route logic
│   │   ├── services/      # Business rules and DB calls
│   │   ├── routes/        # Endpoint definitions
│   │   └── prisma/        # DB Schemas and Migrations
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/    # Modular React components
│   │   │   ├── diagramComponents/ # React Flow logic
│   │   │   └── ...
│   │   ├── contexts/      # Context API (Diagram, Alert)
│   │   ├── hooks/         # Custom hooks
│   │   └── pages/         # Routing
│   └── Dockerfile
└── docker-compose.yml     # Service orchestration
