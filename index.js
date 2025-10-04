import TelegramBot from 'node-telegram-bot-api';

// Replace with your bot token from BotFather
const TOKEN = '8428169053:AAFCoYK9EdHcqMa5RvmSDe1woo2w3h_ZhRU';

// Create a bot that uses polling
const bot = new TelegramBot(TOKEN, { polling: true });

// Handle /start or /shop command
bot.onText(/\/start|\/shop/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, '🛍️ Welcome to the Jewelry Shop! Click below to open:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Shop',
            web_app: {
              url: 'https://cool-mooncake-269f76.netlify.app/'
            }
          }
        ]
      ]
    }
  });
});

// Listen for messages coming from WebApp (Buy button)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.web_app_data) {
    const data = JSON.parse(msg.web_app_data.data);
    console.log('Order received:', data);

    // Reply to the user
    bot.sendMessage(chatId, `✅ Order received: ${data.name} ($${data.price})`);
  }
});
