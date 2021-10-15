
const submitButton = document.getElementById("submit");
const userName = document.getElementById("userName");
const welcomeText = document.querySelector("span");
const restartGame = document.getElementById("newGame");
const questioN = document.getElementById("questioN")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const answers = document.querySelectorAll('.answer')
const showScore = document.getElementById("showScore")
const countDownEl =document.getElementById('countDown')

// userName.addEventListener("input", () => {
//   welcomeText.innerText = userName.value;
// });

const questions = [
  {
    question: "In what town does the show primarily take place?",

    a: "Rosewood",
    b: "Mystic Falls",
    c: "New Orleans",
    d: "Forks"

    ,
    ans: "ans2"
  },
  {
    question: "What is the name Stefan's best friend, who appears in season one and is promptly killed? ",

    a: "Lexi",
    b: "Klaus",
    c: "Alaric",
    d: "Matt",

    ans: "ans1"
  },
  {
    question: "What is the herb called that can protect you from being compelled by a vampire? ",

    a: "Vibranium",
    b: "Mugwort",
    c: "Vervain",
    d: "Molybdenum",

    ans: "ans3"
  },
  {
    question: "Who is Stefan's evil doppelgänger? ",

    a: "Klaus",
    b: "Silas",
    c: "Kol",
    d: "Elijah",

    ans: "ans2"

  },
  {
    question: "Who saves Elena from the car accident that killed her parents? ",

    a: "Caroline",
    b: "Damon",
    c: "Stefan",
    d: "Bonnie",

    ans: "ans3"
  },
  {
    question: "What are the names of Alaric's twin daughters? ",

    a: "Vanessa and Lizzie",
    b: "Lizzie and Caroline",
    c: "Vanessa and Josie",
    d: "Lizzie and Josie",

    ans: "ans4"
  },
];

  restartGame.addEventListener("click", () => {
    location.href = 'index.html';
  
  });

  let questionNo = 0;
  let score=0;
  const loadQuestion = () => {
    const questionList = questions[questionNo];
    questioN.innerText = questionList.question;


    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
  }
  loadQuestion();
  submitButton.addEventListener('click', () => {
const  checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer === questions[questionNo].ans){
score++;
console.log(score);
};
    questionNo++;
    if (questionNo < questions.length){
      loadQuestion();}
      else{
        if(score==1){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h3>you're a newbie fan Let's watch the series together😇 </h3> `}
       else if(score==2){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h3> Try Again!🤗</h3>`}
      else if(score==3){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct Better luck next time!</h3>
       `}
      else if(score==4){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
       <h3> You are Almost a Vamp Better luck next time!😊 </h3>
       `}
      else if(score==5){
        showScore.innerHTML = ` <h3>Yay You got ${score} out of ${questions.length} correct You're a True Vamp Sire😉</h3>
       `}
      else if(score==6) {
        showScore.innerHTML = ` <h3>Wohoo! You got ${score} out of ${questions.length} correct </h3> <h3>You're a vampire expert🤩. 
        You get a Stefan Salvatore to take home as your prize. He's a little bit dead, though; sorry🤭.</h3> `}

        showScore.classList.remove('scoreArea');
      }

  });
  const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAns)=>{
      if(currentAns.checked){
        answer =currentAns.id;
      }
      
    }
   
    );
    return answer;

  };
  const startingMinutes =1;
  let time=startingMinutes*60;
setInterval(updateCountdown,1000);
function updateCountdown(){
const minutes =Math.floor(time/60);
let seconds =time%60;
seconds=seconds<1?'0'+ seconds :seconds;
countDownEl.innerHTML=`${minutes}:${seconds}`;
time--;
if(time==0){
  alert('Time is up')
  location.href = 'index.html'
}
}
