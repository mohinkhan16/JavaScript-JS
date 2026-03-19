





const checkDate=()=>{
    console.log("checking current date..");

    setTimeout(() => {
        const currentDate = new Date().getDate();

        console.log("current date is ",currentDate)
        
    }, 5000);
}

checkDate();