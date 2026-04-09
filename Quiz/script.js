const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    id: 3,
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    id: 4,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },
  {
    id: 5,
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22"
  },
  {
    id: 6,
    question: "Which method is used to fetch API data?",
    options: ["getData()", "fetch()", "request()", "apiCall()"],
    answer: "fetch()"
  },
  {
    id: 7,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    id: 8,
    question: "Which keyword is used to declare a variable in JS?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 9,
    question: "What is DOM?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Mode",
      "Desktop Oriented Mode"
    ],
    answer: "Document Object Model"
  },
  {
    id: 10,
    question: "Which HTML tag is used for images?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  }
];

let qusNumber = document.getElementById("qusNumber");
let timer = document.getElementById("timer");
let questions = document.getElementById("questions");
let options = document.getElementById("options");
let butSubmit = document.getElementById("submit");

let currentIndex = 0;


function quiz(){

    let current=quizData[currentIndex]

    questions.innerText=current.question

    options.innerText = "";

    current .options.forEach((opt)=>{

        let col=document.createElement("div")

        col.classList.add("col-md-6");

        let button=document.createElement("button")

        button.innerText=opt;

        button.classList.add("btn","btn-outline-primary","option-btn");

        col.appendChild(button);

        options.appendChild(col)

    })
}

quiz();


// let counter=0

// function next(){
//     if(quizData.length > currentIndex){
//         currentIndex++;
//         qusCounter++
//     }

// qusNumber.innerHTML =`Qns $ {qunCounter}/10`;

// quiz()

// }

let counter = 0;


function next(){
    if(quizData.length > currentIndex){
        currentIndex++;
        counter++;
    }

    qusNumber.innerText = `Qns ${counter}/10`;

    quiz();
}

next()