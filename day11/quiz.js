const quizdb=[
    {
    question:" Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Markup Language",
    d:"Hyper Textmakeup Language",
    ans:"ans4"
},
{
    question:" Q2: What is the full form of CSS?",
    a: "Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Markup Language",
    d:"Hyper Textmakeup Language",
    ans:"ans1"
},
{
    question:" Q3: What is the full form of JS?",
    a: "Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Markup Language",
    d:"Hyper Textmakeup Language",
    ans:"ans3"
},
{
    question:" Q4: What is the full form of HTML?",
    a: "Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Markup Language",
    d:"Hyper Textmakeup Language",
    ans:"ans2"
},
{
    question:" Q5: What is the full form of HTML?",
    a: "Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Markup Language",
    d:"Hyper Textmakeup Language",
    ans:"ans1"
}];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector("#showscore");
let questioncount=0;
let score=0;
const loadquestion= () => {
    const questionlist=quizdb[questioncount];
    question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;

}
const getcheckanswer= ()=>{
    let answer;
    answers.forEach((curanselem)=>{
    if(curanselem.checked){
             answer=curanselem.id;
            }
        
        });
        return answer;

};
loadquestion();
submit.addEventListener('click', () => {
    const checkedanswer=getcheckanswer();
    console.log(checkedanswer);
    if(checkedanswer == quizdb[questioncount].ans ){
        score++;
    };
    questioncount++;
    if(questioncount <  quizdb.length){
        loadquestion();
    }
   else{
       
    alert(`You won and your score is ${score}`);
    
    showscore.innerHTML=`
    <h3>yow scored ${score}</h3>
    <button.class="btn" onclick="location.relaod()"></button>
     `;
    }
});
    

