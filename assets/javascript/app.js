//declare global variables, set up trivia questions and store in trivia object
var timer = 5;
var timerOn = false;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var trivia = {
    questions:{
        q1: "What Pokemon does Pikachu evolve into?",
        q2: "What is the most effective Poke Ball?",
        q3: "What is the device trainers use to keep a record of their Pokemon encounters?",
        q4: "If you need to buy supplies in the Pokemon world, where do you go?",
        q5: "If you are facing a Magmar in battle, which of these attacks should your Pokemon use?",
    },
    options:{
        q1: ["Jolteon", "Electivire", "Meowstic", "Raichu"],
        q2: ["Great Ball", "Master Ball", "Ultra Ball", "Timer Ball"],
        q3: ["Pokecounter", "Pokefinder", "Pokedex", "Pokephone"],
        q4: ["Pokemon Center", "Gym", "Poke Mart", "Poke Dep"],
        q5: ["Hyper Beam", "Solar Beam", "Earthquake", "Splash"],
    },
    answers: {
        q1: "Raichu",
        q2: "Master Ball",
        q3: "Pokedex",
        q4: "Poke Mart",
        q5: "Earthquake",
    },
    choices:{
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
    }
}


//landing page with Start button to initialize game
$(document).ready(function(){
$('.start').show();
$('.game').hide();
});

//what happens after you click start
$('#start').on('click', function(){
showQuestions(); 
$('.start').hide();
$('.game').show();
});



function startTimer(){
if (!timerOn){
    intervalId = setInterval(function(){
        if (timer>0){
            timer--;
            $('#timer').text(timer);
        }
        else {
            results();
        }
    },1000)
    timerOn = true;
};
}

function showQuestions(){
for (var triviaKey in trivia.questions){
    var question = $(`<div><p>${trivia.questions[triviaKey]}</p>`);
    var options = trivia.options[triviaKey];  
    for (var i = 0; i < options.length; i++){
        var choice = options[i];  
        $(question).append(`<p><input type="radio" class="answer" value="${choice}" name="${triviaKey}">${choice}</p>`)
    }
        $('.trivia').append(question);
}
$('.answer').on('click', function(){
    $('.answer').attr('checked', false);
    $(this).attr('checked', true);  
    trivia.choices[$(this).attr('name')] = $(this).attr('value');
    console.log(trivia.choices);
})
startTimer();
}

// loop over selected input and then compare if it is correct, increment accordingly
function checkQuestions(){
    for (var triviaKey in trivia.answers){
        // var answers = $(`<div><p>${trivia.answers[triviaKey]}</p>`);
        // var choices = $(`<div><p>${trivia.choices[triviaKey]}</p>`);
        // console.log(trivia.answers[triviaKey]);
        // console.log(trivia.choices[triviaKey]);

        if (trivia.answers[triviaKey] === trivia.choices[triviaKey]){
            console.log("user got " + triviaKey + 'right');
            correct++;
        } else if (trivia.choices[triviaKey] === 0){
            console.log("user got " + triviaKey + 'wrong');
            unanswered++;
        }
        else {incorrect++;
        }
            console.log ("user didn't answer");
    

        // }
        // if (choices === answers){     
        // correct++;
        // }
        // else if (choices != answers){
        // incorrect++;
        // }
        // else {
        // unanswered++;
        // }
        // }
    }
}

function results(){
checkQuestions();
clearInterval(intervalId);
$('.game').hide();
$('.results').append("<p>Pika Pika: " + correct + "</p>");
$('.results').append("<p>Train Harder: " + incorrect + "</p>");
$('.results').append("<p>Are you JigglyPuff?: " + unanswered + "</p>");
}
