$( document ).ready(function() {
    console.log( "ready to get it done!" );

//     $(document).on("keydown",function(){
//    keyPressCount++;
// });

  $( "textarea" ).keyup(function() {
    var keyPress = +($(this).val().length);
    var update = (140 - keyPress);
    //$("span").closest(".counter").text(update);
    $(this).siblings(".counter").text(update).toggleClass("red", update < 0);

// var $counter = $(this).siblings(".counter").text(update);
// if (update < 0){
//   console.log(update);

//   $counter.addClass("red");
// }else{

//   $counter.removeClass("red");
// }

    // var keyPressCount = $("textarea").val().length
  });

});

