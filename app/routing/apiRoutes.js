// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var path = require('path');
var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests

  app.post("/api/friends", function(req, res) {
    // will handle the incoming survey results and compatibility logic
     var userInput = req.body;
        var userResponse = userInput.scores;
        var match = {
          name: "",
          photo: "",
          difference: 500
        };
  
        for (var i = 0; i < friendsData.length; i++) {
          var totalDifference = 0;
          for (var j = 0; j < userResponse.length; j++) {
            totalDifference += Math.abs(friendsData[i].scores[j] - userResponse[j]);
            
            if (totalDifference <= match.difference){
                match.name = friendsData[i].name;
                match.photo = friendsData[i].photo;
                match.difference = totalDifference;
            }
          }
        }
  
        friendsData.push(userInput);
  
    res.json(match);
  
  });
};
