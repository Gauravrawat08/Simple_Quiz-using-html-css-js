const Quiz = document.querySelector(".quiz");
const crossiCon = document.querySelector(".quiz-close-img");
const btn = document.querySelector(".btn");
 
 


 

document.querySelector("body").addEventListener("click" , (e) =>{
   if(e.target === Quiz ||e.target === crossiCon){
    Quiz.style.display ="none";
   }
   else if(e.target===btn){
    Quiz.style.display="block";
   }
}
);

const correctAnswers = {
    q1: "B",
    q2: "B",
    q3: "A",
    q4: "A",
    q5: "A",
  };
  
  const displayScore = (score) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i === score) {
        clearInterval(timer);
      } else {
        i++;
      }
      document.querySelector("#score").innerText = `Your Score is : ${i}`;
    }, 10);
  };
  
  const calculateScore = (userAnswers) => {
    let score = 0;
   
  
    for (let cA in correctAnswers) {
      for (let uA in userAnswers) {
        if (cA === uA) {
          if (correctAnswers[cA] === userAnswers[uA]) {
            score += 20;
          }
          break;
        }
      }
    }
    displayScore(score);
  };
  
  const QuizSubmitt = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("input[type='radio']");
  
    const userAnswers = {};
    inputs.forEach((input) => {
      if (input.checked) {
        userAnswers[input.name] = input.value;
      }
    });
    calculateScore(userAnswers);
  };
  