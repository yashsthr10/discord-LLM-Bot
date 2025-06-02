# Discord LLM Bot

This is a Discord bot that integrates with a language model (LLM) to create a conversational AI experience. The bot remembers the last 50 messages exchanged with users and provides responses accordingly. Built using **Discord.js** and **LangChain**, it can integrate with various AI models.

## Features

- 🧠 Integration with a powerful LLM (like Groq API).
- 💬 Chat history functionality, limiting to the last 50 messages.
- 🚫 Bot ignores its own messages.
- 🔧 Flexible configuration with environment variables for API keys and other settings.

## Local Setup 

Follow the instructions below to get the bot up and running locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [Discord Bot Token](https://discord.com/developers/applications)
- [Groq API Key](https://groq.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yashsthr10/discord-LLM-Bot.git
    cd discord-LLM-Bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:

    ```env
    DISCORD_TOKEN=your-discord-bot-token
    GROQ_API_KEY=your-groq-api-key
    ```

4. Run the bot:

    ```bash
    node src/bot.js
    ```

### Usage

- Invite the bot to your server using the [Discord Developer Portal](https://discord.com/developers/applications).
- Type any message, and the bot will respond with an AI-generated reply.
- The bot will remember the last 50 messages exchanged with users and use that context for better responses.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Acknowledgements

- [Discord.js](https://discord.js.org/) - The library for interacting with the Discord API.
- [LangChain](https://js.langchain.com/) - The framework for building LLM-powered applications.

