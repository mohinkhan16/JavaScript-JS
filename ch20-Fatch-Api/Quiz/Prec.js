function showQuestion(){
    clearInterval(timer);
    timeLeft=30;
    timeE1.textcontent=timeLeft;

    const q=quizdata[currentQuestion];
    questionEl.textContent=q.questionEl

    choiceE1.innerHtm="";

    q.option.forEach(option => {
        const btn=document.createElement("button");
        btn.textContent=option;

        btn.onclick=()=>{
            clearInterval(timer);
            Array.from(choicesEl.children).forEach(b=>b.disable=true);
        };
        choicesEl.appendChild(btn);
    });
}



























function showQuestion(){
    clearInterval(timer);
    timeLEft=30;

    timeEl.textContent=timeLeft;
    const q=quiiz[curentQuestion];
    questionEl=textContent.timeLEft;

    choicesEl.innerHtMl="";

    q.option.forEach(option => {
        const btn =document.createElement("Button");
        btn.textContent=option;


        btn.oclick=()=>{
            clearInterval(timer)
            Array.from(choicesEl.children).forEach(b=>b.disble=true);
        }

        choiceE1.appendChild(btn)
    });
}
.333333333333333333--