class Alive {
  #getText;
  #sendMessage;
  #prefix;
  #image

  constructor(config = {}) {
    this.#prefix = config.prefix || ".alive";
    this.#image = config.image ;
  }

  init(socket, getText, sendMessage) {
    this.#getText = getText;
    this.#sendMessage = sendMessage;
  }

  process(key, message) {
    const text = this.#getText(key, message);

    if (!text.toLowerCase().startsWith(this.#prefix)) return;

    const reactionMessage = {
      react: {
        text: "✅", // use an empty string to remove the reaction
        key: key,
      },
    };
    this.#sendMessage(key.remoteJid, reactionMessage);

    const fs = require("fs");
    let Aliv = fs.readFileSync(__dirname + "/../src/alive.txt");
    let ali = Buffer.from(Aliv).toString("utf-8");

    
    this.#sendMessage(
    key.remoteJid, 
    { 
        image: {url: this.#image}, 
        caption: ali,
    },{
      quoted:{ key , message },
    });
  }
}

module.exports = Alive;
