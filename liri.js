// MANY OF THE COMMENTED OUT SECTIONS ARE OLD CODE 
// THAT I HAVE SINCE COMMENTED OUT AND REWRITEN BUT KEPT TO SEE WHAT IDEAS I NEEDED TO REPLACE


// variables and requires
require("dotenv").config();
var fs = require("fs")
var keys = require("./keys.js");
var axios = require("axios")
// const moment = require("moment");

// making a sentence but with code. Remember what morgan said about you have to -1. NODE + 1st COmmand + 2ND COmmand

var command = process.argv[2];
var content = process.argv[3];

var undef = (undef === 'undefined') ? def_val : undef;
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});
var omdb = keys.omdb.key;
var bit = keys.bit.key;

//
if (command === 'concert-this') {
    axios.get("https://rest.bandsintown.com/artists/" + content + "/events?app_id=" + bit + "")
        .then(function (response) {
            console.log("\nNext concert: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city);
            console.log("Time: " + response.data[0].datetime + "\n");
        });
}
else if (command === 'spotify-this-song') {
    spotify.search({ type: 'track', query: content }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Artist(s)
        console.log("Artists: " , data.tracks.items[0].album.artists[0].name);
        // The song's name
        console.log(data.tracks.items[0].name);
        // A preview link of the song from Spotify
        console.log(data.tracks.items[0].preview_url);
        // The album that the song is from 
        console.log(data.tracks.items[0].album.name);

    })
}

else if (command === 'movie-this') {
    axios.get("http://www.omdbapi.com/?t=" + content + "&y=&plot=short&apikey=" + omdb)
        .then(function (response) {
            // OMDB API INFO where i can console log more info from the API if i wanted

            console.log("\nTitle: " + response.data.Title);
            console.log("-_______________________________________-")
            console.log("Year: " + response.data.Year);
            console.log("-_______________________________________-")
            console.log("Actors: " + response.data.Actors + "\n");
            console.log("-_______________________________________-")
            console.log("Country: " + response.data.Country);
            console.log("-_______________________________________-")
            console.log("Language: " + response.data.Language);
            console.log("-_______________________________________-")
            console.log("Plot: " + response.data.Plot);
            console.log("-_______________________________________-")
            console.log("IMDB Rating: " + response.data.Ratings[1].Value);
            console.log("-_______________________________________-")
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
            //rating preference?
            console.log("-_______________________________________-")
            JSON.stringify(response.data);
            console.log("-_______________________________________-")
        })
}


// 4
// case "do-what-it-says":
// doWhat();
// break;

// //(userCommand) for switching api commands 
// mySwitch(userCommand)

else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        var output = data.split(",");
        var doitcontent = output[1];
        // Spotify API INFO where i can console log more info from the API if i wanted
        spotify.search({ type: "track", query: "" + doitcontent + "", limit: "1" })
            .then(function (response) {
                console.log("\nArtist: " + response.tracks.items[0].album.artists[0].name);
                console.log("-_______________________________________-")
                console.log("Song Name: " + response.tracks.items[0].name);
                console.log("-_______________________________________-")
                console.log("Album: " + response.tracks.items[0].album.name + "\n");
                console.log("-_______________________________________-")
                console.log("Album link: " + response.tracks.items[0].album.external_urls.spotify);
                console.log("-_______________________________________-")
            })
            .catch(function (err) {
                console.error('Sorry, no information found', err);
            })
    });
}
else {
    console.log('invalid command')
}


//         // DONE WITH API STUF. NOW how to switch!
//         //('________________________________________');
//         //How to siwtch from one api to another (listed above)
//         function mySwitch(userCommand) {
//             //options for (userCommand)


//             switch (userCommand) {

//                 //1
//                 case "my-tweets":
//                     getTweets();
//                     break;
//                 // ("-_______________________________________-")
//                 //2
//                 case "spotify-this-song":
//                     getSpotify();
//                     break;
//                 // ("-_______________________________________-")

//                 //3
//                 case "movie-this":
//                     getMovie();
//                     break;
//                 // ("-_______________________________________-")

//                 //4
//                 case "do-what-it-says":
//                     doWhat();
//                     break;

//                     // ""
//                     // ''
//                     // }}};

//                     //(userCommand) for switching api commands 
//                     mySwitch(userCommand)
//             }
//         };