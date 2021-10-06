var readlineSync = require("readline-sync");
function start(){
    var username = readlineSync.question ("What's your name?");
    console.log ("Welcome TVD fan "+ username +" to test your knowledge of The Vampire Diaries with this multiple-choice trivia quiz." );
game (username);
}
var score=0;
var highScore={
    name: "Plaksha",
    score: 6,
}
var questions = [{
    question: "In what town does the show primarily take place?",
    options: {
      a: "Rosewood",
      b: "Mystic Falls",
      c: "New Orleans",
      d: "Forks"
    },
    answer: "b"
  }, 
  {
    question: "What is the name Stefan's best friend, who appears in season one and is promptly killed? ",
    options: {
      a: "Lexi",
      b: "Klaus",
      c: "Alaric",
      d: "Matt"
    },
    answer: "a"
  },
  {
    question: "What is the herb called that can protect you from being compelled by a vampire? ",
    options: {
      a: "Vibranium",
      b: "Mugwort",
      c: "Vervain",
      d: "Molybdenum"
    },
    answer: "c"
  },
  {
    question: "Who is Stefan's evil doppelgänger? ",
    options: {
      a: "Klaus",
      b: "Silas",
      c: "Kol",
      d:"Elijah"
    },
    answer: "b"
   
  },
  {
    question: "Who saves Elena from the car accident that killed her parents? ",
    options: {
    a: "Caroline",
    b: "Damon",
    c: "Stefan",
    d:"Bonnie"
    },
    answer: "c"
  },
  {
    question: "What are the names of Alaric's twin daughters? ",
    options: {
      a: "Vanessa and Lizzie",
      b: "Lizzie and Caroline",
      c: "Vanessa and Josie",
      d:"Lizzie and Josie"
    },
    answer: "d"
  },
  ];
  function play(question, answer, options) {

    console.log(question);

    for (const key in options){
    console.log(`${key} : ${options[key]}`);
    }
    var useranswer = readlineSync.question ("Choose your Option:");
    if (useranswer.toUpperCase() === answer.toUpperCase()){
        console.log("You're right");
        score=score +1;

    }
else {
    console.log("OOPS! You're wrong");
}
console.log("*******************************")
console.log("current score:",score);
console.log("*******************************")

}
function game (username){
    for( var i=0; i< questions.length; i++){
      var  givenQuestion = questions[i];
      play( givenQuestion.question, givenQuestion.answer,givenQuestion.options)
    }
    finalScore(username);
}

function finalScore(username){
    console.log("Yay your final score is ",score)
    if(highScore.score<=score){
        highScore.name= username;
        highScore.score=score;
        console.log("You're a vampire expert. You get a Stefan Salvatore to take home as your prize. He's a little bit dead, though; sorry. ")
    }
    console.log("Lets see the high score")
    console.log(highScore.name, ":", highScore.score);
}

start();