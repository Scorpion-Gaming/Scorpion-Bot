const Discord = require("discord.js");
const client = new Discord.Client();


const config = require("./config.json");

client.on(`ready`, ()=>{
   console.log("ecksdee");


client.user.setStatus("online")

});


client.on("message", message => {
    const args = message.content.split(" ").slice(1);
   

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }



    if (message.content.startsWith(config.prefix + "eval")) {
      if(message.author.id !== config.ownerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`:no_entry:\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });


 





client.on('message', message => {
    if(message.author.id !== config.ownerID) return;
    switch(message.content.toUpperCase()) {
        case '?RS':
            resetBot(message.channel);
            break;

    }
});

function resetBot(channel) {
    channel.send('i am restarting')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.token));
}



client.on('message', message => {
    if(message.author.id !== config.ownerID) return;
    switch(message.content.toUpperCase()) {
        case '?SLEEP':
            sleepBot(message.channel);
            break;

    }
});

function sleepBot(channel) {
    channel.send('zzzz')
    .then(msg => client.destroy())
}


  
  
  client.on("message", async message => {
   
 
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    
    if(command === "ping") {

      const m = await message.channel.send("Ping?");
      m.edit(`Bot ping is ${Math.round(client.ping)}ms`);
    }

    


    
  });
  
  



client.login(process.env.token);