import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
configDotenv();
async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.apiKey });
  const prompt = `(DO NOT INCLUDE ACTIONS or special characters like *) I am a former prison convict. 
    I want to build a resume to highlight my best qualities in order to improve my chances of getting a job. 
    I have automotive experience and have a associates degree from william rainey harper college in economics. 
    While in prison I was a volunteer for building the new high school in illinois. 
    Please make me a resume highlighting my best skills`;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });
  console.log(response.text);
}

await main();
