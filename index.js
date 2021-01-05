const TelegramBot = require('node-telegram-bot-api');

const token = '1545840889:AAHP8gnv9A3JycnDo21bqXBs55hkciGFHZU';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function(msg) {
  const chatId = msg.chat.id;
  console.log(msg.text);
  bot.sendMessage(chatId, 'Fale aí, meu chegado')
});