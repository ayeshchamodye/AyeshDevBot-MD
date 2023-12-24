class Mirror {
  #getText;
  #sendMessage;
  #prefix;

  constructor(config = {}) {
    this.#prefix = config.prefix || "!mirror!";
  }

  init(socket, getText, sendMessage) {
    this.#getText = getText;
    this.#sendMessage = sendMessage;
  }

  process(key, message) {
    const text = this.#getText(key, message);
    
if(text.toLowerCase().startsWith('.jid')) {

         this.#sendMessage(key.remoteJid, { text: key.remoteJid },{quoted:{key , message},});
}



    if (!text.toLowerCase().startsWith(this.#prefix)) return;


    

    const reactionMessage = {
        react: {
          text: "🪞", // use an empty string to remove the reaction
          key: key,
        },
      };
      this.#sendMessage(key.remoteJid, reactionMessage);

    this.#sendMessage(
      key.remoteJid,
      {
        text: text.slice(this.#prefix.length),
      },
      { quoted: { key, message } }
    );
  }
}

module.exports = Mirror;
