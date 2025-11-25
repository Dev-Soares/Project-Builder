import jwt from "jsonwebtoken";
import { config as configDotenv } from 'dotenv';

configDotenv();

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Gera um token JWT para um diagrama
 * @param {number} diagramId
 * @returns {string}
 */

export const generateLimitedToken = (diagramId) => {


    const data = {
        resourceId: diagramId,
        type: "limited_access"
    };
    

    const tokenConfig = {
        expiresIn: '3h',
        audience: 'diagram_users'
    };

    
    const token = jwt.sign(data, JWT_SECRET, tokenConfig);

    

    return token;
}