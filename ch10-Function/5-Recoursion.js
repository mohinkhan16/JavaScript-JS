<<<<<<< HEAD

function factorial(number){
    console.log("num",number);

    if(number===0){
        return console.log("factorial is not define for negative number");
    }else if(number===1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

let result=factorial(5);
=======

function factorial(number){
    console.log("num",number);

    if(number===0){
        return console.log("factorial is not define for negative number");
    }else if(number===1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

let result=factorial(5);
>>>>>>> ebcb54a8f2fc9f65ec674abe7f05616885dec8ff
console.log("factorial of 5 is",result);