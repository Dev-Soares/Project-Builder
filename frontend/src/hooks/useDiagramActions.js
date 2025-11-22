import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAlert } from "../contexts/AlertContext";



export const useDiagramActions = () => {

    const { successAlert, errorAlert } = useAlert();

    const navigate = useNavigate();

    const handleExpiredToken = (error) => {

        if (error.response?.data?.code === 'TOKEN_EXPIRED') {

            return navigate('/token-expired');
        }
        return false;
    }



    const createNewDiagram = async () => {

        const diagramData = {
            flowData: {
                nodes: [],
                edges: [],
                viewport: {
                    x: 0,
                    y: 0,
                    zoom: 1
                },

                diagramName: 'Untitled-Diagram'
            }

        }

        try {
            const response = await axios.post('/diagram/create-diagram', diagramData)
            successAlert('Diagrama criado com successo!');
            return response

        } catch (error) {
            console.error('Error creating diagram:', error);
        }
    };

        const fetchDiagram = async (diagramId) => {
            try {
                const response = await axios.get(`/diagram/${diagramId}`);
                return response.data;
            } catch (error) {
                console.error('Error fetching diagram:', error);
                if (!handleExpiredToken(error)) {
                    errorAlert('Erro ao carregar o diagrama. Tente novamente.');
                }

            };
        };

        const deleteDiagram = async (diagramId) => {
            try {
                await axios.delete(`/diagram/delete-diagram/${diagramId}`);
                successAlert('Diagrama deletado com successo!');
            } catch (error) {
                console.error('Error deleting diagram:', error);
                if (!handleExpiredToken(error)) {
                    errorAlert('Erro ao deletar o diagrama. Tente novamente.');
                }
            }
        };

        const formatDiagramToJSON = ( toObject, diagramName) => {

            
            const flowData = toObject();

            const serializableNodes = flowData.nodes.map(node => ({
                ...node,
                data: {
                    ...node.data,
                    iconComponent: undefined,
                    iconId: node.data.iconId || node.data.id,
                }
            }));

            const flowCode = {
                flowData: {
                    nodes: serializableNodes,
                    edges: flowData.edges,
                    viewport: flowData.viewport,
                    diagramName: diagramName
                }
            };

            return flowCode

        }

        const saveFlowData = async (id, toObject, diagramName) => {

            const flowCode = formatDiagramToJSON(toObject, diagramName);

            try {

                await axios.put(`/diagram/save-diagram/${id}`, flowCode);
                successAlert('Diagrama salvo com successo!');

            } catch (error) {
                console.error('Error saving diagram:', error);
                if (!handleExpiredToken(error)) {
                    errorAlert('Erro ao salvar o diagrama. Tente novamente.');
                }
            }
        };

        return {
            createNewDiagram,
            fetchDiagram,
            deleteDiagram,
            saveFlowData,
        }
}