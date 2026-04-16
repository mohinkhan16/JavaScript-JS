<<<<<<< HEAD
//another example..

function apicall(){
    return new Promise((resolve,reject)=>{
        let payment=true;
       setTimeout(()=>{
        if(payment){
             resolve("i want to payment in online")
        }else{
            reject("You dont want to payment.?")
        }
       },3000)
    });
}

async function MoodOfPayment() {
    try{
        console.log("Payment....");
        
        const payment= await apicall();
        
        console.log(payment);

        console.log("Payment successfully..");
    }catch(error){
        console.log(error)
    }
}
MoodOfPayment();
console.log("what's your mood for payment ?")

=======
//another example..

function apicall(){
    return new Promise((resolve,reject)=>{
        let payment=true;
       setTimeout(()=>{
        if(payment){
             resolve("i want to payment in online")
        }else{
            reject("You dont want to payment.?")
        }
       },3000)
    });
}

async function MoodOfPayment() {
    try{
        console.log("Payment....");
        
        const payment= await apicall();
        
        console.log(payment);

        console.log("Payment successfully..");
    }catch(error){
        console.log(error)
    }
}
MoodOfPayment();
console.log("what's your mood for payment ?")

>>>>>>> adad84205beffcd754155409d8df8f20af39a573
