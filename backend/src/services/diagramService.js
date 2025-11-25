import prisma from '../config/prisma.js';

const diagramService = {
  
    createDiagram: async (flowData) => {
        return await prisma.diagram.create({
            data: {
                flowData: flowData,
            }
        });
    },

    getDiagramById: async (id) => {
        return await prisma.diagram.findUnique({ where: { id } });
    },

    deleteDiagram: async (id) => {
        return await prisma.diagram.delete({ where: { id } });
    },

    updateDiagram: async (id, flowData) => {
        try {
            return await prisma.diagram.update({ where: { id }, data: { flowData: flowData } });
        } catch (error) {
            console.error("Error updating diagram:", error);
            throw new Error("Failed to update diagram");
        }
        
    }


};

export default diagramService;
