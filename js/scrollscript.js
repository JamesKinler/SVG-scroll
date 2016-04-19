
$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit


  var $dashOffset = $(".animate").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 0);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".animate").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});


$(window).scroll(function() {

  setTimeout(function (){
    var $fillopacity = $(".animate").css("fill-opacity");
    //on a scroll event - execute function
    $(window).scroll(function() {
      //calculate how far down the page the user is
      var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
      //sets fillopacity
      var $newUnit = 1  ;
      //get the value to be subtracted from the 'fillopacity'
      var $offsetUnit = $percentageComplete * ($newUnit / 100);
      //Reverses the math to make the opacity start at 0
      var $reverseUnit = $newUnit - ($newUnit-$offsetUnit);
      //set the new value of the Reverse Unit
      $(".animate").css("fill-opacity", $reverseUnit);
    });

  }, 1000);

});
