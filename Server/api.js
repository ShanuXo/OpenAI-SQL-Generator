import { Configuration , OpenAIApi} from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiAPIKey= process.env.OPENAI_API

if(!openaiAPIKey){
    console.error("No OPENAI API Key Provided");
    process.exit(1);
} 

const  configuration = new Configuration({
    apiKey: openaiAPIKey
})
const openai = new OpenAIApi(configuration)

export default openai