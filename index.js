const Bot = require("./Bot");

const Mirror = require("./plugins/Mirror");
const TagEveryone = require("./plugins/TagEveryone");
const Roles = require("./plugins/Roles");
const Alive = require("./plugins/Alive");
const Reaction = require("./plugins/Reaction");
const Menu = require("./plugins/Menu");
const News = require("./plugins/News");

const { botConfig, pluginsConfig } = require("./config");

const plugins = [
  new Mirror(pluginsConfig.mirror),
  new TagEveryone(pluginsConfig.tagEveryone),
  new Roles(pluginsConfig.roles),
  new Alive(pluginsConfig.alive),
  new Reaction(),
  new Menu(pluginsConfig.menu),
  new News(pluginsConfig.news),
];

const bot = new Bot(plugins, botConfig);

(async () => {
  var fs = require("fs");
  const cred = fs.readFileSync(__dirname + "/session.txt").toString();
  let m = Buffer.from(cred, "base64").toString("utf-8");

  if (fs.existsSync("auth")) {
    require("child_process").exec("rm -rf auth");
    fs.mkdirSync("auth");
  var writeStream = fs.createWriteStream("./auth/creds.json");
  writeStream.write(m);
  writeStream.end();
  
  } else {
    fs.mkdirSync("auth");
    
  var writeStream = fs.createWriteStream("./auth/creds.json");
  writeStream.write(m);
  writeStream.end();
  }

  

  if (!m == "") {
    await bot.connect();
    await bot.run();
  } else {
    console.log(`Invalid session`);
    process.exit(1);
  }
})();
