

//ClearInterval is used to stop repeted task
// let id= setInterval(()=>{
//     console.log("playing");
// },1000)

// setTimeout(()=>{
//     clearInterval((id));
//     console.log("Stop");
// },4000);

//Example no:-2

let Name = setInterval(() => {
    console.log("Your name");
}, 2000);

setTimeout(() => {
    clearInterval(Name);
    console.log("My name is Mohin");
}, 5000);