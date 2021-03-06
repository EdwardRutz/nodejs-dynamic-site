var Profile = require("./profile.js");

//Friendly message for home route
//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Treehouse User Badge API\n");
    response.write("http://localhost:3000/treehouse_username\n");
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  //if url == "/" && POST
  //redirect to /:username
}

//Route to get user info
//Handle HTTP route GET /:username i.e. /bobSmith
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

    //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile

      //store the required values
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        userName: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript,
        totalPoints: profileJSON.points.total
      };

      //simple response
      response.write(values.userName + " has " + values.badges + " badges\n");
      response.end('Footer\n');
    });

    //on "error"
    studentProfile.on("error", function(error) {
      //show error
      response.write(error.message + "\n");
      response.end('Footer\n');
    });

  }
}


module.exports.home = home;
module.exports.user = user;



