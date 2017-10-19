$(document).ready(function(){

  // function showValues() {
  //   var str = $( "form" ).serialize();
  //   $( "#results" ).text( str );
  // }
  // $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
  // $( "select" ).on( "change", showValues );
  // showValues();





var data=[]
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ]

// var tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }



function renderTweets(tweets) {
  tweets =tweets.reverse()
  for (let tweet of tweets){
    let $tweet=createTweetElement(tweet)
    $('#tweets-container').append($tweet);

  }

}

// renderTweets(data);


function createTweetElement(twt) {
var $tweet =

  `<article>
    <header class="header">
      <span class="smilelogo"><img src=${escape(twt.user.avatars.regular)}></span>


      <span class="nameleft">${escape(twt.user.name)}</span>
      <span class="nameright">${escape(twt.user.handle)}</span>
    </header>
      <body>
        <div class="data">${escape(twt.content.text)}</div>
      </body>
    <footer>
      <div class="footer">
      <span class="date">${escape(parseHumanDate(twt.created_at))}</span>
      <span class="flag"><img src="images/flag.png"></span>
      <span class="arrow"><img src="images/arrow.png"></span>
      <span class="heart"><img src="images/heart.png"></span>
    </div >
    </footer>
  </article>`

return $tweet;

};
function parseHumanDate(timeCreated) {
    var created = new Date(timeCreated);
    var seconds = Math.floor((Date.now() - created) / 1000);

    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + ' years';
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + ' months';
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ' days';
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hours';
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + ' minutes';
    }

    return Math.floor(seconds) + ' seconds';
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}




$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  var test1 = $( this ).find('textarea').val()

  if( test1.length == null || test1.length ==''){
    alert("Text area is empty")
  }else if( test1.length > 140){
    alert("Your tweet is too long")
  }else{
   // alert("You're good to go")
    $.post('/tweets', $(this).serialize(), function() {
      $.get('/tweets', function(data) {

        data = data.reverse()

        let $tweets = ''

        for (let tweet of data){
            $tweets += createTweetElement(tweet)
        }

        $('#tweets-container').html($.parseHTML($tweets));
      })
    })
  }
})

function loadTweets(){
  $.ajax({
      url: '/tweets/',
      method: 'GET',
      success: renderTweets
    })
}
loadTweets();

// $( "#myBtn" ).on( "click", function( event ) {
//   $("section, .newtweet").animate({ scrollTop: 0 }, "fast");
//   console.log(this);
// })
$( "#myBtn" ).click(function() {
  window.scrollTo(0, 0);
  $( "textarea" ).focus();
  console.log( "Handler for .focus() called." );

});



});

