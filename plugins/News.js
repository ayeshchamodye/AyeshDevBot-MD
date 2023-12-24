const axios = require("axios");
const fetch = require('node-fetch');

class News {
  #getText;
  #sendMessage;
  #prefix;
  #url;

  constructor(config = {}) {
    this.#prefix = config.prefix;
  }

  init(socket, getText, sendMessage) {
    this.#getText = getText;
    this.#sendMessage = sendMessage;
  }

  process(key, message) {
    const text = this.#getText(key, message);

    if (text.toLowerCase().startsWith(this.#prefix)) {
      ///write your code here
      ///start
const url = `https://ada-derana-news-bot-by-nbmods.sl-technicaltec.repl.co/`;
      
     // const response = news(url);

      try {
        // Fetch news data from the API
        

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
    

        if (json.length > 0) {
          const newsItem = json[0]; // Assuming you want to send the first news item
          const newsText =
            `*${newsItem.title}*\n\n${newsItem.description}\n\n${newsItem.time}\nsource- https://adaderana.lk`;

          // Send the news as a message
          const reactionMessage = {
            react: {
              text: "🌍", // use an empty string to remove the reaction
              key: key,
            },
          };
          this.#sendMessage(key.remoteJid, reactionMessage);

          this.#sendMessage(
            key.remoteJid,
            {
              image: { url: newsItem.image },
              caption: newsText,
            },
            {
              quoted: { key, message },
            },
          );
        } else {
          this.#sendMessage(key.remoteJid, {
            text: "No news Available at the Moment!",
          });
        }
      });} catch (error) {
        
        console.error("Error fetching news:", error);
        this.#sendMessage(key.remoteJid, {
          text: `Faild to Fetch News Try Again Later!
          \n `,
        });
        
      }
    }
    ////end
  }
}




module.exports = News;
