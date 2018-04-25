const bot = require('./bot');
const botconfig = require('./botconfig.json');
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
  bot.login(botconfig.token);
});