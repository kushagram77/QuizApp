const quizDB=[
{
    question:"Q1:What is the full form of HTML?",
    a:"Hyper Text Makeup Language",
    b:"Hyper Text Markup League",
    c:"HyperText MachineLanguage",
    d:"Hypertext Markup Language",
    ans:"ans4"
},

{
    question:"Q2:What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading style Sheep",
    c:"Common Style Sheet",
    d:"Community Style Sheet",
    ans:"ans1"
},

{
    question:"Q3:What is the full form of HTTP?",
    a:"Hyper Term Transfer Protocol",
    b:"Hyper Test Transfer Protocol",
    c:"Hype Text Transfer Protocol",
    d:"Hyper Text Transfer Protocol",
    ans:"ans4"
},

{
    question:"Q4:Who is the father of Computer?",
    a:"Sir Charles Babbage",
    b:"James Gosslings",
    c:"Dannis Ritchie",
    d:"Maria Francis",
    ans:"ans1"
},

{
    question:"Q5:Which among the following is the oldest language?",
    a:"C",
    b:"Java",
    c:"Python",
    d:"C++",
    ans:"ans1"
},


]
const question=document.querySelector('.questions');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const option5=document.querySelector('#option5');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');


let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
    
}


loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
       if(curAnsElem.checked){
        answer=curAnsElem.id;
       }
      
    });
    return answer;

}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
         showScore.innerHTML= `
            <h3>You scored ${score}/${quizDB.length} 😀👍 </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
         showScore.classList.remove('scoreArea');
    }
})
