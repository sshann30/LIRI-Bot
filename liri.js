
//Loading modules
// var Twitter = twitter api
// var spotify = spotify api

var fs = require('fs');

var inputCommand = process.argv[2];
var commandParam = process.argv[3];
var defaultMovie = "Shrek";
var defaultSong = "Numb";

// figure out how to get a twitter API in node with out authentication
// 
// 
// 
// 

// figure out how to get a spotify API in node with out authentication
// 
// 
// 
// 



//All functions 

//Run commands and note defaults
function processCommands(command, commandParam){

	switch(command){

	case 'my-tweets':
		getMyTweets();

	case 'spotify-this-song':
		//default is numb
		if(commandParam === undefined){
			commandParam = defaultSong;
		}     
		spotifyThis(commandParam);

	case 'movie-this':
		//default is shrek
		if(commandParam === undefined){
			commandParam = defaultMovie;
		}    
		movieThis(commandParam);

	case 'do-what-it-says':
		doWhatItSays();

	default: 
		console.log("LIST OF USEABLE COMMANDS PROCEEDING 'node liri.js': 'my-tweets, spotify-this-song, movie-this, and do-what-it-says' ");
};
};

// Twitter
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
// whenever the hell the twitter API situation is figured out, put the query here

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
	console.log("Title: " + response.data.Title);
	console.log("Release Year: " + response.data.Year);
	console.log("Artist: " + response.data.Artist);
	console.log("Rating: " + response.data.Rating);
  }
);




// Spotify
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
// whenever the hell the spotify API situation is figured out, put the query here

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
	console.log("Title: " + response.data.Title);
	console.log("Release Year: " + response.data.Year);
	console.log("Artist: " + response.data.Artist);
	console.log("Rating: " + response.data.Rating);
  }
);




// Movies
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
	console.log("Title: " + response.data.Title);
	console.log("Release Year: " + response.data.Year);
	console.log("Actors: " + response.data.Actors);
	console.log("Rating: " + response.data.Rating);
  }
);

function doWhatItSays(){
	console.log("LIST OF USEABLE COMMANDS PROCEEDING 'node liri.js': 'my-tweets', 'spotify-this-song', 'movie-this', 'and do-what-it-says' ");}