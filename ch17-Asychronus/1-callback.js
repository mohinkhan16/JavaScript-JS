

// A function that takes some time to perform its functionality is called asynchronous.
//callback function passed as an argumnet to the another function .
//using callback we can do asychronus in js 
//callback function run after another function has been finished

function infromation(result){
console.log(result);
}

function person(name,id,Details){
    const info = name + id;

    Details(info);
}

person("Mohin",1,infromation);


//Example no:-2

function total(result){
    console.log(result);
}

function calculate(X,Y,Z){
    const total=X*Y;

    Z(total);
}

calculate(10,2,total);