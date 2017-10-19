"use strict";



  // ==> Refactored and wrapped as new, tweet-specific function:
//
// Simulates the kind of delay we see with network or filesystem operations

//const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, function(err, resp) {
        if (err) throw err

          callback(null, resp)
      });

    },


    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }


  }
};
