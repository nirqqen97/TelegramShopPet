const TelegramBot = require('node-telegram-bot-api');

const token = "6146057071:AAFnH4AC-dTWv4LODq9fgN8kP6_5vl7Iolg"

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://incomparable-selkie-7724d9.netlify.app/';

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    await bot.sendMessage(chatId, text);
    if (text === '/start') {
        await bot.sendMessage(chatId, "появится кнопка снизу", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'do a order', web_app: { url: webAppUrl } + '/form' }]
                ]
            }
        });
    }
  
});


