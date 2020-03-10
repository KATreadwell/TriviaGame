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
    }




//landing page with Start button to initialize game
$(document).ready(function(){
    $('.start').show();
    $('.game').hide();
});

$('#start').on('click', function(){
    showQuestions(); //add showQuestions function and then add startTimer inside of that function
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

function results(){
    clearInterval(intervalId);
    //display correct, incorrect, unanswered
    //need to track values
}

function showQuestions(){
    for (var triviaKey in trivia.questions){
        console.log(trivia.questions[triviaKey]);
        var question = $(`<div><p>${trivia.questions[triviaKey]}</p>`);
        var options = trivia.options[triviaKey];  
        for (var i = 0; i < options.length; i++){
            var choice = options[i];  //put attribute within choice to check if correct and tally
            var answer = trivia.answers[triviaKey];
            if (choice === answer){
                $(question).append(`<p><input type="radio" class="answer" value=${choice} name="correct">${choice}</p>`)
            }
            else {
                $(question).append(`<p><input type="radio" class="answer" value=${choice} name="incorrect">${choice}</p>`)
            }//can grab name attribute off of choice selected and if correct increment correct and incorrect and increment incorrect
        }
            $('.trivia').append(question);
    }

    startTimer();
}



