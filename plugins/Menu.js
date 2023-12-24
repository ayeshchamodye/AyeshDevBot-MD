const fs = require("fs");

class Menu {
  #getText;
  #sendMessage;
  #prefix;
  #image;

  constructor(config = {}) {
    this.#prefix = config.prefix || ".menu";
    this.#image = config.image ;
  }

  init(socket, getText, sendMessage) {
    this.#getText = getText;
    this.#sendMessage = sendMessage;
  }

  process(key, message) {
    const text = this.#getText(key, message);

    if (!text.toLowerCase().startsWith(this.#prefix)) return;

    

    const Menu = fs.readFileSync(__dirname + "/../src/menu.txt");
    
    let c = Buffer.from(Menu).toString("utf-8");
    
    this.#sendMessage(
    key.remoteJid, 
    { 
        image: {url: this.#image}, 
        caption: c,
    },{
      quoted:{ key , message },
    });

    const Music = fs.readFileSync(__dirname + "/../src/audio/music.mp3");
    let m = Buffer.from(Music);

    this.#sendMessage(
      key.remoteJid,
      { audio: m  },
      {
        quoted: { key, message },
      },
    );

    const reactionMessage = {
      react: {
        text: "📃", // use an empty string to remove the reaction
        key: key,
      },
    };

    this.#sendMessage(key.remoteJid, reactionMessage);
  }
}

module.exports = Menu;
