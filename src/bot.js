const { Client, GatewayIntentBits } = require('discord.js');
const { handleUserMessage } = require('./LLM');
const { LLM } = require('@langchain/core/language_models/llms');
const chatHistory = [];
const MAX_HISTORY = 50;

// Loading the Secrets from .env file
require('dotenv').config();
const TOKEN = process.env.BOT_TOKEN;


// setting the Client and Permissions
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent] });

client.login(TOKEN)

client.on('messageCreate', async (message) => {
    // getting the user's name
    const username = message.author.username;

    // ignoring Bot's messages
    if (message.author.bot) return;

    // retaining the chat context
    chatHistory.push({ user: username, message: message.content });

    const context = chatHistory.slice(-10);
    const chatContext = context.map(entry => `${entry.user}: ${entry.message}`).join("\n");


    // Getting the LLM Output
    var LLM_output = await handleUserMessage(chatContext, username)

    chatHistory.push({ user: 'Bot', message: LLM_output });

    if (chatHistory.length > MAX_HISTORY) {
        chatHistory.shift();
    }
    message.reply({
        content: String(LLM_output)
    })
})

