$(document).ready(function() {

//set initial variables
var questionNum = 0;
var correctGuess = 0;
var wrongGuess = 0;
var time = 10;
var noGuess = 0;
var wins = 0;
var losses = 0;
var i = 0;

//make an array of objects or objects within objects for Q/A  
var trivia = [
    q1 = {
        question: `What year was Amazon Inc. founded?`,
        answer: {
            a: 2001,
            b: 2007,
            c: 1994,
            d: 1981
        },
        key: `c`
    },

    q2 = {
        question: `Who's the CEO & founder of Amazon?`,
        answer: {
            a: "Mark Zuckerburg",
            b: "Elon Musk",
            c: "Winklevoss Twins",
            d: "Jeff Bezon"
        },
        key: `d`
    },

    q3 = {
        question: `What was the first product Amazon sold?`,
        answer: {
            a: "Fidget Spinner",
            b: "Book",
            c: "Adwords",
            d: "Sweatshirt"
        },
        key: `a`
    }
];


//set a timer to count down from 10
function start() {
    intID = setInterval(countDown, 1000);
};

function countDown(){
    playGame();
    time--;
    $(".timer").html(`Time: ${time}`);
    if(time === 0){
        losses++;
        clearInterval(intID);
        nextQuestion();
        console.log(losses);
    } 
    // else {
    //     playGame();
    // }
};


//choose a question and display it to the user
function playGame(){
    // time = 10;
    $(".question").html(trivia[i].question)
    $(".a").html(trivia[i].answer.a)
    $(".b").html(trivia[i].answer.b)
    $(".c").html(trivia[i].answer.c)
    $(".d").html(trivia[i].answer.d)

};



//if user picks the right answer inrease wins++, congrats them,
//move onto next question

//hide elements
$(".panel-title").hide();
$(".triviaContent").hide();

//START GAME WITH BUTTON CLICK
$(".startButton").on("click", function(){
    $(".panel-title").show();
    $(".triviaContent").show();
    $(".startButton").hide();
    start();
    playGame();

});





















});
    