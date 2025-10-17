
import { GoogleGenAI, Type } from "@google/genai";
import type { CodeSolution } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateCodeSolution(question: string, language: string): Promise<CodeSolution> {
  const model = 'gemini-2.5-pro';

  const prompt = `
    You are an expert programming assistant specializing in algorithms and data structures.
    Your task is to solve the following coding problem and provide a comprehensive, structured response in JSON format.

    Problem: "${question}"
    Programming Language: ${language}

    Please provide a JSON object with the following three keys:
    1. "code": A string containing the complete, correct, and un-commented code solution in ${language}. The code should be clean, readable, and follow best practices for the language. Do NOT include any comments in the code itself.
    2. "explanation": A string with a clear, step-by-step explanation of the code. Break down the logic so that someone with intermediate programming knowledge can understand it. This is where you should explain what the code does.
    3. "optimalSolutionAnalysis": A string that analyzes the time and space complexity of your solution (e.g., O(n log n)). Explain why this approach is optimal or discuss trade-offs with other possible solutions.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            code: { type: Type.STRING },
            explanation: { type: Type.STRING },
            optimalSolutionAnalysis: { type: Type.STRING },
          },
          required: ["code", "explanation", "optimalSolutionAnalysis"],
        },
        temperature: 0.3,
      },
    });

    const jsonString = response.text.trim();
    const parsedResult = JSON.parse(jsonString);

    // Validate the parsed result
    if (
      typeof parsedResult.code !== 'string' ||
      typeof parsedResult.explanation !== 'string' ||
      typeof parsedResult.optimalSolutionAnalysis !== 'string'
    ) {
      throw new Error('Received malformed JSON response from the API.');
    }

    return parsedResult as CodeSolution;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a valid response from the AI model.");
  }
}
