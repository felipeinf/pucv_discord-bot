import { Client, Message, Guild, GuildMember, PartialGuildMember } from "discord.js";
import messageHandler from "../handlers/message.handler";


async function main(){
  
  const bot: Client = new Client();
  const token: string | undefined = process.env['DISCORD_TOKEN'];

  bot.on("message", (message: Message) => messageHandler(message));

  try {
    await bot.login(token);
    console.log("Ayudatina is online");
  } 
  catch (error) {
    console.log("Login error");
  }
}
export default { main };