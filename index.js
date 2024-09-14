var colours = ["red","green","blue","yellow"];
var game = [];
var user = [];
var start = false;
var level = 0;

$(document).keypress(function(){
    if(!start){
        $("level-title").text("level" + level);
        nextSequence();
        start = true;
    }
})

$(".btn").click(function(){
    var usercolor = $(this).attr("id");
    user.push(usercolor);

    playSound(usercolor);
    animate(usercolor);

    check(user.length-1)

    
})

function  check(currentLevel){
    if(game[currentLevel] === user[currentLevel]){
        if(user.length === game.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
    }

    function nextSequence(){
    user = [];
    level++;
    $("#level-title").text("Level " + level);
    var random = Math.floor(Math.random() * 4);
    var randomcolor = colours[random];;
    game.push(randomcolor);
    
    $("#" + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomcolor);

    }

    
function animate(Color) {
    $("#" + Color).addClass("pressed");
    setTimeout(function () {
    $("#" + Color).removeClass("pressed");
    }, 1000);
  }
  
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  
