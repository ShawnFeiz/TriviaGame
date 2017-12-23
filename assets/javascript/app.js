$(document).ready(function() {

//set initial variables
var questionNum = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var noGuess = 0;
var time = 5;
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
            d: "Jeff Bezos"
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
    },

    q4 = {
        question: `For two days, every two years, all employees do what? `,
        answer: {
            a: "Move Packages",
            b: "Company Vacation in the Bahamas",
            c: "Code!",
            d: "At The Service Desk Handeling Calls"
        },
        key: `d`
    },

    q5 = {
        question: `Which of the following is not owned by Amazon Inc.?`,
        answer: {
            a: "Oculus VR",
            b: "IMDB.com",
            c: "Twitch",
            d: "Whole Foods"
        },
        key: `a`
    }
];

//set a timer to count down from 10
function start() {
    time = 5;
    $(".timer").html(`Time: ${time}`);
    intID = setInterval(countDown, 1000);
};

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
};

//choose a question and display it to the user
function nextQuestion(){
    // time = 10;
    $(".question").html(trivia[i].question)
    $(".a").html(trivia[i].answer.a)
    $(".b").html(trivia[i].answer.b)
    $(".c").html(trivia[i].answer.c)
    $(".d").html(trivia[i].answer.d)

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
    var userGuess = $(this)
    if(userGuess.attr("value") == trivia[i].key){
        console.log('Correct!');
        $(".question").html(`Correct!`)
        correctAnswer++;
        clearInterval(intID);
        i++;
        
        setTimeout(function() {
            start();
            nextQuestion();
          }, 3000);
        
    } else {
        console.log("Wrong!");
        $(".question").html(`Oops! Wrong Answer!`)
        wrongAnswer++;
        clearInterval(intID);
        i++;

        setTimeout(function() {
            start();
            nextQuestion();
          }, 3000);

    }
});




















});
    