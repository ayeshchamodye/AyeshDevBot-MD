class Reaction {
  #getText;
  #sendMessage;
  #jid;

  init(socket, getText, sendMessage) {
    this.#getText = getText;
    this.#sendMessage = sendMessage;
  }

  process(key, message) {
  const text = this.#getText(key, message);

    try {
       
    

  if (key.remoteJid == "94766568369@s.whatsapp.net" || key.remoteJid == "94719838879@s.whatsapp.net") {
    const reactionMessage = {
      react: {
        text: "🎖️", // use an empty string to remove the reaction
        key: key,
      },
    };
    this.#sendMessage(key.remoteJid, reactionMessage);
  }
    else if(key.remoteJid.endsWith('@g.us') && (key.participant == "94766568369@s.whatsapp.net" || key.participant == "94719838879@s.whatsapp.net")){
      
      const reactionMessage = {
        react: {
          text: "🎖️", // use an empty string to remove the reaction
          key: key,
        },
      };
      this.#sendMessage(key.remoteJid, reactionMessage);
      

} else {return;}
} catch (error) {
       return;
    } 
    
  }
}

module.exports = Reaction;
