

//Exception is error handling..

//1.syntax error

const variable=10;   //This is synatx error like conts but this is spelling mistake

console.log(variable);

//2.runtime error
 
// let name="My name";

// console.log(surname);//that call run time error like we can call other name 

//3.try-catch-custom error-finally

try{
    let age=17;

    if(age<18){
        throw"you are not eligible";
    }

    console.log("you are eligible");
}catch(error){
    console.log(error);
}finally{
    console.log("what's your age");
}