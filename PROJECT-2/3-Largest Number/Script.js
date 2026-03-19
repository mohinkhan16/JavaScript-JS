document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let inputs = document.querySelectorAll(".number");

    let number = [];

    inputs.forEach(input=>{
        number.push(Number(input.value));
    });

    let largest = number[0];

    for(let i=1;i<number.length;i++){
        if(number[i] > largest){
            largest = number[i];
        }
    }

    document.getElementById("result").innerHTML =
    "Entered Number : " + number.join(", ") +
    "<br> Largest Number : " + largest;
});