const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'yourserver.aternos.me',
    port: 12345,
    username: 'ShadowIsAFK',
    version: '1.16.5'
  });

  bot.on('spawn', () => {
    console.log('Bot spawned');
    bot.chat('Hi from GitHub bot!');
  });

  bot.on('end', createBot);
  bot.on('kicked', console.log);
  bot.on('error', console.log);
}

module.exports = createBot;
