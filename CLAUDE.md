# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DiagramBuilder is a full-stack web application for creating, editing, and sharing technical architecture diagrams. Users can drag-and-drop technology icons (languages, frameworks, databases, etc.) onto a canvas, connect them with edges, and save/share their diagrams via unique IDs.

**Tech Stack:**
- Frontend: React 19 + Vite + Tailwind CSS 4 + React Flow (@xyflow/react)
- Backend: Node.js + Express + Prisma ORM
- Database: PostgreSQL
- Deployment: Frontend on Vercel, Backend containerized with Docker

## Development Commands

### Frontend (in `frontend/`)
```bash
npm run dev          # Start Vite dev server on port 5173
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Backend (in `backend/`)
```bash
npm run dev          # Start with nodemon (watches src/ directory)
npm start            # Start production server
npm run build        # Generate Prisma Client
```

### Docker (Backend)
```bash
cd backend
docker-compose up    # Start PostgreSQL + backend API
docker-compose down  # Stop services
```

The docker-compose setup:
- PostgreSQL on port 5432
- Backend API on port 3000
- Automatically runs `prisma db push` on startup

### Database
```bash
cd backend
npx prisma generate      # Generate Prisma Client
npx prisma db push       # Push schema changes to database
npx prisma studio        # Open Prisma Studio GUI
```

## Architecture Overview

### Frontend Architecture

**State Management:**
- Two main React Contexts provide global state:
  - `DiagramContext` ([frontend/src/contexts/DiagramContext.jsx](frontend/src/contexts/DiagramContext.jsx)): Manages React Flow state (nodes, edges, viewport), diagram name, and node operations
  - `AlertContext` ([frontend/src/contexts/AlertContext.jsx](frontend/src/contexts/AlertContext.jsx)): Manages toast notifications (success, error, loading)

**Routing Structure:**
- `/` - MainPage: Landing page with hero, guide, and call-to-action sections
- `/create-diagram` - CreateDiagram: Form to create a new diagram
- `/diagram/:id` - DiagramArea: Main diagram editor (loads diagram by ID from URL)
- `/get-diagram` - GetDiagram: Form to access existing diagram by ID

**Diagram Editor Flow:**
1. User navigates to `/diagram/:id`
2. DiagramContent component loads and fetches diagram data via `useDiagramActions` hook
3. DiagramFlowSection renders the React Flow canvas with nodes/edges from DiagramContext
4. ElementsSideBar shows draggable technology icons organized by category
5. User can drag icons from sidebar, create connections, and save changes

**Key Components:**
- `CustomNode` ([frontend/src/components/diagramComponents/CustomNode.jsx](frontend/src/components/diagramComponents/CustomNode.jsx)): Custom React Flow node that displays technology icons
- `languageIcons.js` ([frontend/src/icons/languageIcons.js](frontend/src/icons/languageIcons.js)): Central registry of 100+ technology icons organized by category (languages, frameworks, databases, devops, etc.)
- `useDiagramActions` hook ([frontend/src/hooks/useDiagramActions.js](frontend/src/hooks/useDiagramActions.js)): Encapsulates all API calls (create, fetch, save, delete diagrams)

**Icon System:**
- Icons are defined in `languageIcons.js` with structure: `{ component, id, label, type, color }`
- Each icon references a React Icons component (from `react-icons/si`, `react-icons/fa`, etc.)
- Icons are organized into categories: "Stacks", "Popular Languages", "Web Frontend", "Backend Frameworks", "Databases", "DevOps & Tools", "Cloud Platforms", "Testing", etc.
- When a node is created, DiagramContext's `fetchIconComponent` finds the matching icon component by label

### Backend Architecture

**API Structure:**
- Single resource: Diagrams
- Routes defined in [backend/src/routes/diagramRoutes.js](backend/src/routes/diagramRoutes.js)
- Controller layer handles HTTP logic ([backend/src/controllers/diagramController.js](backend/src/controllers/diagramController.js))
- Service layer handles business logic ([backend/src/services/diagramService.js](backend/src/services/diagramService.js))

**API Endpoints:**
```
POST   /api/diagram/create-diagram        # Create new diagram
GET    /api/diagram/:id                   # Get diagram by ID
PUT    /api/diagram/save-diagram/:id      # Update diagram
DELETE /api/diagram/delete-diagram/:id    # Delete diagram
POST   /api/diagram/generate-token/:id    # Generate limited access token
```

**Database Schema** ([backend/prisma/schema.prisma](backend/prisma/schema.prisma)):
- Single `Diagram` model mapped to `diagrams` table
- Fields: `id` (cuid), `flowData` (JSON, nullable), `createdAt`, `updatedAt`
- `flowData` JSON structure: `{ nodes: [], edges: [], viewport: {x, y, zoom}, diagramName: string }`

**CORS Configuration:**
- Allowed origins: `http://localhost:5173` (dev) and `https://project-builder-frontend.vercel.app` (production)
- Update `allowedOrigins` in [backend/src/app.js](backend/src/app.js:11) when adding new frontend domains

**Swagger Documentation:**
- Available at `/api-docs` when backend is running
- Configuration in [backend/src/docs/swaggerConfig.js](backend/src/docs/swaggerConfig.js)

### Data Flow for Diagram Operations

**Creating a Diagram:**
1. User submits name in CreateDiagram page
2. Frontend calls `createNewDiagram` from `useDiagramActions`
3. Backend creates empty diagram with CUID and initial flowData
4. Frontend receives ID and navigates to `/diagram/:id`

**Loading a Diagram:**
1. DiagramFlowSection component calls `fetchDiagram(id)` on mount
2. Backend returns flowData JSON
3. Frontend deserializes nodes (icons are restored via `fetchIconComponent`)
4. React Flow renders nodes and edges from DiagramContext

**Saving a Diagram:**
1. User clicks save button
2. Frontend calls `saveFlowData` which uses React Flow's `toObject()` to get current state
3. `formatDiagramToJSON` strips out icon components (keeps iconId for deserialization)
4. Backend updates flowData JSON in database

## Environment Variables

**Backend** (create `backend/.env`):
```bash
# For local development without Docker:
DATABASE_URL=postgresql://user:password@localhost:5432/dbname?schema=public
JWT_SECRET=your_jwt_secret_here
PORT=3000

# For Docker (docker-compose uses these):
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```
Note: The `.env.example` file shows MongoDB format, but the project uses PostgreSQL (see Prisma schema and docker-compose.yml).

**Frontend** ([frontend/.env.example](frontend/.env.example)):
```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

For production, update `VITE_API_BASE_URL` to point to deployed backend.

## Important Technical Details

### Frontend Build Configuration

**Vite Config** ([frontend/vite.config.js](frontend/vite.config.js)):
- Uses `@vitejs/plugin-react-swc` for fast React compilation
- Tailwind CSS 4 via `@tailwindcss/vite` plugin
- Development server configured for Docker: `usePolling: true`, `host: true`
- Allowed hosts include `diagram-dev.platformcode.ai`, `localhost`, `127.0.0.1`

**React 19 Overrides:**
The frontend uses React 19, but some dependencies require overrides in [package.json](frontend/package.json:30-37):
```json
"resolutions": {
  "azure-react-icons/react": "^19.1.16",
  "azure-react-icons/prop-types": "*"
},
"overrides": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```

### Vercel Deployment

The frontend includes [vercel.json](frontend/vercel.json) with a rewrite rule for client-side routing:
```json
{ "source": "/(.*)", "destination": "/" }
```
This ensures all routes are handled by React Router.

### Node Serialization

When saving diagrams, icon components cannot be serialized to JSON. The frontend:
1. Strips `iconComponent` from node data
2. Preserves `iconId` or `id` field
3. On load, uses `fetchIconComponent` to restore the component by matching label

### Tutorial System

The app includes an interactive tutorial using intro.js ([frontend/src/utils/tutorial.js](frontend/src/utils/tutorial.js)). The tutorial guides users through:
- Searching for elements
- Dragging elements to canvas
- Saving diagrams
- Sharing diagrams

### Custom Alerts

Three alert components ([frontend/src/components/smallComponents/customAlerts/](frontend/src/components/smallComponents/customAlerts/)):
- ErrorAlert, LoadingAlert, SuccessAlert
- Used via AlertContext's `successAlert`, `errorAlert`, `setIsLoading`
- Built on top of `react-hot-toast`

## Modifying Icon Categories

To add/modify technology icons:
1. Import icon component from `react-icons` in [languageIcons.js](frontend/src/icons/languageIcons.js)
2. Add to appropriate category array with structure:
   ```js
   {
     component: SiReact,    // Icon component
     id: "react",           // Unique identifier
     label: "React",        // Display name (used for matching)
     type: "CustomNode",    // Node type for React Flow
     color: "#61DAFB"       // Icon color
   }
   ```
3. Icons are automatically available in ElementsSideBar sidebar

## Common Gotchas

1. **Icon Components**: Never try to serialize icon components in node data. Always strip them before API calls and restore on load.

2. **PostgreSQL vs MongoDB**: The backend uses PostgreSQL despite `.env.example` showing MongoDB format. Use the docker-compose.yml configuration as reference.

3. **Axios Base URL**: Set in [main.jsx](frontend/src/main.jsx:14) via `axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL`

4. **Context Dependencies**: DiagramContext and AlertContext are both required for diagram operations. DiagramContext is wrapped by AlertContext in [main.jsx](frontend/src/main.jsx).

5. **React Flow Ref**: The `reactFlowRef` in DiagramContext provides access to React Flow instance methods like `toObject()` for serialization.

6. **Mobile Responsive**: The sidebar has responsive behavior controlled by `isOpen` state, which initializes based on screen width (desktop = open, mobile = closed).
