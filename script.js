// Randomize picture order
var cards = $(".square");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

var t0 = performance.now();
var start = new Date().getTime();

// Show grid, hide opening remarks
setTimeout(function() {
    $('.grid').show();
    $('.opening').hide();
}, 5000);

// 5 second countdown
var timeleft = 5;
var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("countdowntimer").textContent = timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);

// If correct image is selected, display 
$('.square').click(function() {
  var end = new Date().getTime() - start - 5000;
  //var t1 = performance.now() - t0 - 5000;
  console.log("It took you " + end + " milliseconds");

  if ($(this).hasClass('img1_2')) {
  	$('.grid').hide();
  	$('.correct').show();
    document.getElementById("stopwatch").innerHTML = ("It took you " + end + " milliseconds");
  }
  else {
  	$('.grid').hide();
  	$('.incorrect').show();
    document.getElementById("stopwatch").innerHTML = ("It took you " + end + " milliseconds");
  }
});