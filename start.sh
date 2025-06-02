cd discord-bot-llm
docker build -t llm-discord-bot .
docker stop llm-bot || true
docker rm llm-bot || true
docker run -d --name llm-bot --restart always llm-discord-bot
