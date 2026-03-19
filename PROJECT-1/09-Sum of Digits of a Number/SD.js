document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let num = document.getElementById("number").value;
    let sum = 0;

    for(let digit of num){
        sum += Number(digit);
    }

    document.getElementById("result").innerHTML =
        `Sum of digits = <span style="color:lime">${sum}</span>`;
});
