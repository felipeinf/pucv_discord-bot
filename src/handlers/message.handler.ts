import { Message } from "discord.js";

export default function messageHandler(message: Message){
  
  let { content } = message;
  
  console.log(content)
  
  if(content.toLowerCase() === 'hola'){
    message.reply('Holanda');
  }

  if(content.toLowerCase() === 'chao'){
    message.reply('Chavela');
  }
}