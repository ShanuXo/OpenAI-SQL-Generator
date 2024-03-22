import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiAPIKey= process.env.OPENAI_API_KEY

if(!openaiAPIKey){
    console.error("No OPENAI API Key Provided");
    process.exit(1);
} 

const  configuration = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})

const openai = new OpenAI(configuration);

export default openai


// https://platform.openai.com/api-keys