
const { Telegraf } = require("telegraf");

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is missing");
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply(
    "🛡️ Салом! Ман Group Guard ҳастам.\n\n" +
    "Барои идора кардани гурӯҳ маро ба гурӯҳ илова карда, администратор кун."
  );
});

bot.help((ctx) => {
  ctx.reply("🛡️ Group Guard — муҳофизати гурӯҳи Telegram.");
});

bot.launch();

console.log("Group Guard is running");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
