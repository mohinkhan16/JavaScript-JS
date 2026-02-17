

//function argumnet

function addition(a,b){
    let sum=0;

    for(let i=0;i<arguments.length;i++){
        sum +=arguments[i];
    }
    console.log("sum is",sum);
}
addition(10,20,54);

