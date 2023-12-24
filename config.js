// Contains the default configuration for Bot & Plugins
// Any attribute not given in the configuration will take its default value

const botConfig = {
  authFolder: "auth",
  selfReply: true,
  logMessages: true,
};

const pluginsConfig = {
  mirror: {
    prefix: ".mirror",
  },
  roles: {
    dataFile: "./roles.json",
    prefix: ".role ",
    updateOnAdd: false,
    updateOnRemove: false,
  },
  tagEveryone: {
    membersLimit: 100,
    trigger: "all",
  },
  alive: {
    prefix: ".alive",
    image: "https://raw.githubusercontent.com/ayeshchamodye/Baileys-Qr/main/1.jpg",
  },
  menu: {
    prefix: ".menu",
    image: "https://raw.githubusercontent.com/ayeshchamodye/Baileys-Qr/main/1.jpg"
},
  news: {
    prefix: ".news",
    url: "https://ada-derana-news-bot-by-nbmods.sl-technicaltec.repl.co/",
    },
  
};

module.exports = { botConfig, pluginsConfig };
