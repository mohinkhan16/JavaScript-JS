

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
console.log("it will wait for your items")