//this is a example of a async-await...

const items =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i want meggie..");
        },3000);
    });
}

async function fetchData() {

    console.log("what do you want...")

    const Data = await items();

    console.log(Data);
}

fetchData();