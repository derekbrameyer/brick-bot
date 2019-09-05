var SlackBot = require('slackbots');

// create a bot
const envKey = process.env.BRICK_BOT_TOKEN
const bricksetSetUrl = 'https://brickset.com/sets/'

var bot = new SlackBot({
    token: envKey, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'Brick Bot'
});

bot.on('start', function() {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    // bot.postMessageToChannel('lego', 'Hello world!', params);
});

bot.on('message', msg => {
    console.log(msg.type)
    console.log(msg.text)

    var reply = ''

    var words = msg.text.split(' ')
    words.forEach(function(word) {
        console.log(word);
        if (! isNaN(word)) {
            reply += bricksetSetUrl + word
            reply += '\n'
        }
    });

    if(reply.length > 0) {
        bot.postMessage(msg.channel, reply)
    }
});