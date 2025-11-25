import express from "express";
import cors from "cors"
import diagramRoutes from "./routes/diagramRoutes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerConfig.js';



const app = express();

const allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
  origin: (origin, callback) => {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true,
  optionsSuccessStatus: 204 
};

// Use as opções de CORS configuradas
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.get("/", (_req, res) => {
	res.json({ message: "Diagram-service Hello World!" });
});


app.use("/api/diagram", diagramRoutes);

// ERROR HANDLER => PARA BRANCH DEV APENAS
app.use((err, _req, res, _next) => {
	console.error(err);
	const status = err?.status || 500;
	res.status(status).json({ error: err?.message || '[DEV]: Erro interno do servidor!' });
});

export default app;

