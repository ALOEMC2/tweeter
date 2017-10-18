$(document).ready(function(){
// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

//console.log(tweetData.user.name)

// function createTweetElement(tweet) {
//   //var $tweet =
//    $('article').addClass('tweet').append('header span .nameleft').addClass(nameleft).text(tweetData.user.name);
//    //$('article').addClass('tweet').append('span .nameright').text(tweetData.user.handle);
//    //$('article').addClass('tweet').append('span .smilelogo img').text(tweetData.user.name.avatars.regular);

//   console.log($('<article>'));
//   //console.log($tweet);
//   return $tweet;
// }
function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}


var $tweet = createTweetElement(tweetData);
console.log($tweet)
// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like

$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

function createTweetElement(tweet) {
var $tweet =

  `<article>
    <header class="header">
      <span class="smilelogo"><img src=${tweetData.user.avatars.regular}></span>


      <span class="nameleft">${tweetData.user.name}</span>
      <span class="nameright">${tweetData.user.handle}</span>
    </header>
      <body>
        <div class="data">${tweetData.content.text}</div>
      </body>
    <footer>
      <div class="footer">
      <span class="date">${tweetData.created_at}</span>
      <span class="flag"><img src="images/flag.png"></span>
      <span class="arrow"><img src="images/arrow.png"></span>
      <span class="heart"><img src="images/heart.png"></span>
    </div >
    </footer>
  </article>`
//</section>}

return $tweet;


};

});
