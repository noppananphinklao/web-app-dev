var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keypress", function(event) {
    if (event.key === 'a'){
        if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
            }
    } 
});

$(".btn").on("click", function(){
    var colorUserClicked = $(this).attr("id")
    userClickedPattern.push(colorUserClicked)

    playSound(colorUserClicked);
    animatePressed(this);

    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press 'A' to Restart");
        startOver()
        console.log("wrong");
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
   
}

function playSound(colorUserClicked){
    var audio = new Audio("sounds/" + colorUserClicked + ".mp3");
    audio.play();
}

function animatePressed(element) {
    $(element).addClass("pressed");
    setTimeout(function () {
        $(element).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}








