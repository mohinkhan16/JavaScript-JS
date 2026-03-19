document.getElementById("factorialForm").addEventListener("submit", function(e){
    e.preventDefault();

    let num = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    if(num < 0){
        result.textContent = "Factorial not defined for negative numbers!";
        return;
    }

    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }

    result.textContent = `${num}! = ${fact}`;
});
