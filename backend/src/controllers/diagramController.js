import diagramService from "../services/diagramService.js";
import { generateLimitedToken } from "../services/authService.js";


const diagramController = {

  createDiagram: async (req, res) => {

    const { flowData } = req.body;

    try {

      const diagram = await diagramService.createDiagram(flowData);

      res.status(201).json(diagram);
    } catch (error) {
      console.error('Error creating diagram:', error);
      res.status(500).json({ error: "Failed to create diagram" });
    }
  },

  getDiagramById: async (req, res) => {
    const { id } = req.params;
    try {
      const diagram = await diagramService.getDiagramById(id);
      if (diagram) {
        res.status(200).json(diagram);
      } else {
        res.status(404).json({ error: "Diagram not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve diagram" });
    }
  },

  deleteDiagram: async (req, res) => {
    const { id } = req.params;

    try {
      await diagramService.deleteDiagram(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete diagram" });
    }
  },

  updateDiagram: async (req, res) => {
    
    const { id } = req.params;
    const { flowData } = req.body;
    try {
      const updatedDiagram = await diagramService.updateDiagram(id, flowData);
       return res.status(200).json(updatedDiagram);
    } catch (error) {
      res.status(500).json({ error: "Failed to update diagram" });
    }
  },
};


export const handleTokenGeneration = async (req, res) => {
  
  const { id } = req.params;

  try {

    const token = generateLimitedToken(id);

    return res.status(200).json({
      message: `Token de acesso gerado com sucesso.`,
      token: token,
      expiresIn: "3 horas",
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to generate access token" });
  }
};

export default diagramController;
