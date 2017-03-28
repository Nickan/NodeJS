var movies = require('./movies');

var defaultMovie = movies();
defaultMovie.faveMovie = "Emily";
console.log("Emily fav " + defaultMovie.faveMovie);