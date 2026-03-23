
function orderfood(item, callback){
    console.log(`ordering ${item} `);
    setTimeout(()=>{
        if(item){
            console.log(`${item} order succesfull`);
            callback(null,item)
        }else{
            callback("No item select");
        }
    },1000)
}

function praperfood(item,callback){
    console.log("prepraing food");

    setTimeout(()=>{
        console.log(`${item} prepred `);
        callback(null,item)
    },1000)
}

function delevery(item,callback){
    console.log("Deleverd Food");
    setTimeout(()=>{
        console.log(`${item}Deleverd`);
        callback(null,"Food Deleverd succeesfully");
    },1000);
}

orderfood("BUrger",(err,item)=>{
    if(err){
        console.error(err);
    }else{
        praperfood(item,(err,item)=>{
            if(err){
                console.error(err);
            }else{
                delevery(item,(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log(result);
                    }
                })
            }
        })
    }
})
