$(document).ready(function(){


  var data=[]

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

