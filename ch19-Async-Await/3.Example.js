<<<<<<< HEAD


function apiCall(){
    return new  Promise((resolve,reject)=>{
        let item=true;

        setTimeout(()=>{
            if(item){
                resolve("Which Item Want...")
            }else{
                reject("Item is not avabalie...")
            }
        },2000);
    });
}

async function ItemData() {
    try{
        console.log("Iteam Loadding...")
    
    const item =await apiCall();

    console.log(item);

    console.log("i want grosary's item");
    }catch(error){
        console.log(error)
    }
}

ItemData();
=======


function apiCall(){
    return new  Promise((resolve,reject)=>{
        let item=true;

        setTimeout(()=>{
            if(item){
                resolve("Which Item Want...")
            }else{
                reject("Item is not avabalie...")
            }
        },2000);
    });
}

async function ItemData() {
    try{
        console.log("Iteam Loadding...")
    
    const item =await apiCall();

    console.log(item);

    console.log("i want grosary's item");
    }catch(error){
        console.log(error)
    }
}

ItemData();
>>>>>>> adad84205beffcd754155409d8df8f20af39a573
console.log("it will wait for your items")