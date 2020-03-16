//declare global variables, set up trivia questions and store in trivia object
var timer = 60;
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
        q6: "If you need to revive your fainted Pokemon to full health, where do you go?",
        q7: "What type of attacks are Normal type Pokemon immune to?",
        q8: "What type of Pokemon does Gym Leader Erika specialize in?",
        q9: "What type of Pokemon is Mewtwo?",
        q10: "What type of attach are Flying type Pokemon immune to?",
    },
    options:{
        q1: ["Jolteon", "Electivire", "Meowstic", "Raichu"],
        q2: ["Great Ball", "Master Ball", "Ultra Ball", "Timer Ball"],
        q3: ["Pokecounter", "Pokefinder", "Pokedex", "Pokephone"],
        q4: ["Pokemon Center", "Gym", "Poke Mart", "Poke Dep"],
        q5: ["Hyper Beam", "Solar Beam", "Earthquake", "Splash"],
        q6: ["Mount Fuji", "Pokemon Mansion", "Pokemon Center", "Gym"],
        q7: ["Fighting", "Ghost", "Dark", "Fire"],
        q8: ["Earth", "Water", "Electric", "Grass"],
        q9: ["Fighting", "Psychic", "Fairy", "Dark"],
        q10: ["Normal", "Dragon", "Ground", "Water"],
    },
    answers: {
        q1: "Raichu",
        q2: "Master Ball",
        q3: "Pokedex",
        q4: "Poke Mart",
        q5: "Earthquake",
        q6: "Pokemon Center",
        q7: "Ghost",
        q8: "Grass",
        q9: "Psychic",
        q10: "Ground",
    },
    choices:{
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0, 
        q9: 0,
        q10: 0,
    }
}


//landing page with Start button to initialize game
$(document).ready(function(){
$('.start').show();
$('.game').hide();
$('#retry').hide();
});

//what happens after you click start
$('#start').on('click', function(){
showQuestions(); 
$('.start').hide();
$('.game').show();
$('#retry').hide();
playAudio();
});

function playAudio(){
    var sound = document.getElementById("audio");
    sound.play();
}

function pauseAudio(){
    var sound = document.getElementById("audio");
    sound.pause();
}


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
})
startTimer();
}

// loop over selected input and then compare if it is correct, increment accordingly
function checkQuestions(){
    for (var triviaKey in trivia.answers){
        if (trivia.answers[triviaKey] === trivia.choices[triviaKey]){
            correct++;
        } else if (trivia.choices[triviaKey] === 0){
            unanswered++;
        }
        else {incorrect++;
        }
    }
}

function results(){
checkQuestions();
clearInterval(intervalId);
$('.game').hide();
$('.results').append("<p>Pika Pika: " + correct + "</p>");
$('.results').append("<p>Train Harder: " + incorrect + "</p>");
$('.results').append("<p>Are you JigglyPuff?: " + unanswered + "</p>");
$('#retry').show();
}

$('#retry').on('click', function(){
    $('.start').show();
    $('.game').hide();
    $('.results').hide();
    $('#retry').hide();
    ResetGlobalVariables();
    pauseAudio();
    });

function ResetGlobalVariables(){
    timer = 60;
    timerOn = false;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    trivia.choices = {
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0, 
        q9: 0,
        q10: 0,
    }
}
