$(document).ready(function() {

//set initial variables
var correctAnswer = 0;
var wrongAnswer = 0;
var noGuess = 0;
var time = 20;
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
    }

    // q2 = {
    //     question: `Who's the CEO & founder of Amazon?`,
    //     answer: {
    //         a: "Mark Zuckerburg",
    //         b: "Elon Musk",
    //         c: "Winklevoss Twins",
    //         d: "Jeff Bezos"
    //     },
    //     key: `d`
    // },

    // q3 = {
    //     question: `What was the first product Amazon sold?`,
    //     answer: {
    //         a: "Fidget Spinner",
    //         b: "Book",
    //         c: "Adwords",
    //         d: "Sweatshirt"
    //     },
    //     key: `b`
    // },

    // q4 = {
    //     question: `For two days, every two years, all employees do what? `,
    //     answer: {
    //         a: "Move Packages",
    //         b: "Company Vacation in the Bahamas",
    //         c: "Code!",
    //         d: "At The Service Desk Handeling Calls"
    //     },
    //     key: `d`
    // },

    // q5 = {
    //     question: `Which of the following is not owned by Amazon Inc.?`,
    //     answer: {
    //         a: "Oculus VR",
    //         b: "IMDB.com",
    //         c: "Twitch",
    //         d: "Whole Foods"
    //     },
    //     key: `a`
    // }
];

//set a timer to count down from 10
function start() {
    time = 20;
    $(".timer").html(`Time: ${time}`);
    intID = setInterval(countDown, 1000);
};

//choose a question and display it to the user
function nextQuestion(){
    showAll();
    $(".question").html(trivia[i].question)
    $(".a").html(trivia[i].answer.a)
    $(".b").html(trivia[i].answer.b)
    $(".c").html(trivia[i].answer.c)
    $(".d").html(trivia[i].answer.d)
};

//function to set up the timer and what happens if it hits 0.
function countDown(){
    time--;
    $(".timer").html(`Time: ${time}`);
    if(time === 0){
        noGuess++;
        i++;
        clearInterval(intID);
        console.log(`You have lost ${noGuess} many times`);
        
        setTimeout(function() {
            start();
            nextQuestion();
          }, 3000);
    } 
    if(trivia.length === i ){
        setTimeout(function(){
        clearInterval(intID);
        endGame();
       }, 3000)
    };
};

function nextQ() {
    start();
    nextQuestion();
};

function endGame(){
    console.log("End Game, Show Results");
    var resetButton = $("<button>").text("Play Again").addClass("btn-lg btn-primary resetButton");
    $(".triviaContent").prepend(resetButton);
    $(".resetButton").on("click", reset);

    $(".question").html("<h1>Thanks For Playing!</h1>");
    $(".a").html(`Correct: ${correctAnswer}`);
    $(".b").html(`Incorrect: ${wrongAnswer}`);
    if(noGuess === 0) {
        $(".c").html(`Unanswered: ${noGuess}`);
    } else if (noGuess > 0){
        $(".c").html(`Why did you leave ${noGuess} unanswered ... I'm not mad, just disappointed`);
    }
    $(".d").html("Great Job!");
    $(".timer").hide();
};

//rest the game
function reset() {
    correctAnswer = 0;
    wrongAnswer = 0;
    noGuess = 0;
    i = 0;
    start();
    nextQuestion();
    $(".resetButton").remove();
    $(".timer").show();
};

function hideAll() {
    $(".allAnswers").hide();
};

function showAll() {
    $(".allAnswers").show();
};

// ==============================================================
// ==============================================================

//hide elements
$(".panel-title").hide();
$(".triviaContent").hide();

//START GAME WITH BUTTON CLICK
$(".startButton").on("click", function(){
    $(".panel-title").show();
    $(".triviaContent").show();
    $(".startButton").hide();
    start();
    nextQuestion();
});

$(".answer").on("click", function(){
    if($(this).attr("value") == trivia[i].key){
        hideAll();
        // $(".allAnswers").detach();
        console.log('Correct!');
        $(".question").html(`Correct!`)
        correctAnswer++;
        clearInterval(intID);
        i++;
            setTimeout(nextQ, 3000);
        
    } else {
        hideAll();
        // $(".allAnswers").detach();
        console.log("Wrong!");
        $(".question").html(`Oops! Wrong Answer!`)
        wrongAnswer++;
        clearInterval(intID);
        i++;
             setTimeout(nextQ, 3000);
    }

    if(trivia.length === i ){
        setTimeout(function(){
        clearInterval(intID);
        endGame();
       }, 3000)
    };
});
});
    