const TelegramBot = require('node-telegram-bot-api');

const token = "6146057071:AAFnH4AC-dTWv4LODq9fgN8kP6_5vl7Iolg"

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://incomparable-selkie-7724d9.netlify.app/';


bot.on('message', async (msg) => { 
    const chatId = msg.chat.id
    const text = msg.text

    if (text === '/start') {
        await bot.sendMessage(chatId, "button will be bottom", {
            reply_markup : {
                inline_keyboard : [
                    [{text : 'do a order', web_app: {url : webAppUrl }}]
                ]
            }
        })
        await bot.sendMessage(chatId, 'keyboard Button', {
            reply_markup : {
                keyboard : [
                    [{text : 'do a order', web_app : {url : webAppUrl }}]
                ]
            }
        })
    }
    if (msg?.web_app_data?.data) {                                  //* обрабатывать данные которые пришли с фронта
        const data = JSON.parse(msg?.web_app_data?.data)
        await bot.sendMessage(chatId, `your city ${data.city}`)
    }
})


