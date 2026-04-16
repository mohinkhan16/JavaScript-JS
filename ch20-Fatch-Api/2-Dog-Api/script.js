<<<<<<< HEAD
// document.getElementById("btn").addEventListener("click", async () => {

//     const image = document.getElementById("dog");

//     try {
//         const dog = await fetch("https://dog.ceo/api/breeds/image/random");
//         const result = await dog.json();

//         if(result.status !== "success"){
//             throw new Error("failed to fetch dog image");
//         }

//         dog.src = result.message;

//     } catch(error){
//         console.log(error);
//     }
// });

document.getElementById("btn").addEventListener("click",async()=>{

    const dog =document.getElementById("dog");

    const images=  await fetch("https://dog.ceo/api/breeds/image/random");

    const result=  await images.json();

    if(result.status !=="success"){
 throw new Error("images is not found");
    }else{
        dog.src=result.message;
    }

=======
// document.getElementById("btn").addEventListener("click", async () => {

//     const image = document.getElementById("dog");

//     try {
//         const dog = await fetch("https://dog.ceo/api/breeds/image/random");
//         const result = await dog.json();

//         if(result.status !== "success"){
//             throw new Error("failed to fetch dog image");
//         }

//         dog.src = result.message;

//     } catch(error){
//         console.log(error);
//     }
// });

document.getElementById("btn").addEventListener("click",async()=>{

    const dog =document.getElementById("dog");

    const images=  await fetch("https://dog.ceo/api/breeds/image/random");

    const result=  await images.json();

    if(result.status !=="success"){
 throw new Error("images is not found");
    }else{
        dog.src=result.message;
    }

>>>>>>> adad84205beffcd754155409d8df8f20af39a573
});