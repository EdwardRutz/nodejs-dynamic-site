//Use Node.js to perform the profile look ups and serve a template via HTTP.

//1. Create a web server
var http = require('http');
http.createServer(function(request, response)) {

}

//2. Handle HTTP route GET / and POST / i.e. Home
  //if url == "/" && GET
  //show search
  //if url == "/" && POST
  //redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
  //get json from Treehouse
  //on "end"
  //show profile
  //on "error"
  //show error

//4. Function that handles the reading of files and merge in value
  // read from file and get a string
  // merge values in to string
