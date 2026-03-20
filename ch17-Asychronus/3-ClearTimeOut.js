let car=setTimeout(()=>{
    console.log("This is new car");
},5000);

setTimeout(()=>{
    console.log("No,This is Bike");
    clearTimeout(car);
},2000)


//Example no:-2

let person=setTimeout(()=>{
    console.log("What is your name");
},5000);

setTimeout(()=>{
    console.log("My name is Mohin");
    clearTimeout(person)
},2000);