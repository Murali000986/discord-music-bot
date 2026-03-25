# Discord Music Bot

## Overview
This Discord Music Bot allows users to play music in their Discord server. It supports various audio sources and provides a user-friendly interface.

## Features
- Supports multiple audio formats (e.g., MP3, WAV)
- Play music from YouTube and Spotify
- Queue management for seamless listening experience
- Volume control and playback commands
- Supports Slash commands for an easy-to-use interface

## Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Murali000986/discord-music-bot.git
   cd discord-music-bot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your Discord bot**:
   - Create a new application in the [Discord Developer Portal](https://discord.com/developers/applications).
   - Create a bot within the application and copy the bot token.
   - Invite the bot to your server using the OAuth2 URL.

4. **Configure the bot**:
   - Create a `.env` file in the root directory and add your token:
     ```
     DISCORD_TOKEN=YOUR_BOT_TOKEN
     ```

5. **Run the bot**:
   ```bash
   npm start
   ```

## Usage Examples
- **Play a song**: `!play <song name or URL>`
- **Pause the music**: `!pause`
- **Resume the music**: `!resume`
- **Skip to next song**: `!skip`
- **Show the current queue**: `!queue`

## Contributing
If you want to contribute, please fork the repository and create a pull request. All contributions are welcome!

## License
This project is licensed under the MIT License.