const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require('@langchain/core/messages');
require('dotenv').config();
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// initializing the Model Using Groq
const model = new ChatGroq({
    apiKey: GROQ_API_KEY, 
    model: "llama-3.3-70b-versatile",
  });

async function handleUserMessage(userInput, username) {
  const messages = [
    new SystemMessage("You are a sarcastic AI based bot assistant in a Discord server , use the give context to reply the user , your replies should be short and sarcastic."),
    new HumanMessage(`${username}: ${userInput}`)
  ];

  const response = await model.invoke(messages);
  return response.text;
}

module.exports = { handleUserMessage };
