$(document).ready(function() {

//set initial variables
var correctGuess = 0;
var wrongGuess = 0;
var time = 10;
var noGuess = 0;
var wins = 0;
var losses = 0;

//make an array of objects or objects within objects for Q/A  
var questions = [];

//hide elements
// $(".panel-title").hide();


//set a timer to count down from 10
function start() {
    intID = setInterval(countDown, 1000);
};

function countDown(){
    time--;
    $(".timer").html(`Time: ${time}`);
    if(time === 0){
        losses++;
        // gameStop();
    } 
    else {
        playGame();
    }
};


//choose a question and display it to the user
function playGame(){

};




//if user picks the right answer inrease wins++, congrats them,
//move onto next question

$(".startButton").on("click", function(){
    start();
});





















});
    