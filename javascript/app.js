//declare global variables, set up trivia questions and store in trivia object
    var timer = 120;
    var timerOn = false;
    var correct;
    var incorrect;
    var unanswered;
    var userGuess;
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
$('#start').on('click', function(){
    // correct = 0;
    // incorrect = 0;
    // unanswered = 0;
    // timer = 120;
    // timerOn = false;
    $('#start').hide();
    // $('.game').show();
    // clearInterval(timer);
    timerOn = false;
});

function startGame{
    timerOn = true;
}

//display questions with options in radio button
function showQuestions(questions, options);{
    var userGuess = [];
    var answers;
    for (var i=0; i<questions.length; i++){
        answers = [];


//compare userGuess with answers
function checkAnswers(){
    var userGuess = '';
    var correct = 0
if ($('input[type="radio"][name=q1]: checked').val()==)
}


//show results
function results(){
    correct;
    incorrect;
    unanswered;
}

//timer
function timer(){
    if (number === 0){
        stop();
        results();
    }
}