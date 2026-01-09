
import { GoogleGenAI } from "@google/genai";

const STRATEGY_CONTEXT = `
Eres el Asistente Virtual de Saúl Milla (FalcoHN). Tu objetivo es ayudar a clientes potenciales a entender el valor de la estrategia digital.
Basado en el plan estratégico de Saúl:
1. FalcoHN se enfoca en Consultoría de Alto Nivel, Estrategia y Autoridad.
2. PáginasWebHonduras es la "Fábrica" de servicios estandarizados (hosting, web, mantenimiento).
3. Saúl tiene 15+ años de experiencia, es Scout y apasionado por la historia de Honduras.
4. No recomendamos comprar seguidores falsos (daña reputación y algoritmos).
5. Enfócate en soluciones reales: IA, SEO Local y Automatización.
`;

export async function askStrategist(question: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: question,
    config: {
      systemInstruction: STRATEGY_CONTEXT,
      temperature: 0.7,
    },
  });
  return response.text;
}
