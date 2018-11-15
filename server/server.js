require('dotenv').config();
let Twitter = require('twitter');
let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

// Variable to hold reference on currently connected stream connection
let _stream;

app.use(express.static(path.join(__dirname, "server")));

const client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

io.on('connection', function(socket){
    console.log('User connected');
    //Once a client connects, start the stream        
    socket.on('[Search] Start Twitter Stream', function(evt){
        console.log("Hit Start-Stream event");
        console.log(evt);
        //Reset connection if user passed a new filter value and the stream is alrady running.
        //   Can only do this a few times before twitter will rate-limit you
        terminateStream();
        client.stream('statuses/filter', {track: evt.filter},  function(stream) {
            _stream = stream;
            stream.on('data', function(tweet) {
                console.log(tweet.text);
                socket.emit('[Tweet] New Tweet Received', {tweet});
            });
            
            stream.on('error', function(error) {
                console.log(error);
            });
        })
    });

    socket.on('disconnect', function(){
        console.log('User disconnected');
        //If user disconnects, destroy the stream since our number of connected users is limited by the twitter API.
        terminateStream();
    }); 
});

/**
 * Function that will close current stream if one is active
 */
function terminateStream(){
    if(_stream){
        _stream.destroy();
    }   
}

server.listen(3000, function(){
    console.log('Listening on port 3000');
});