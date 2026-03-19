document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let evencount =0;
    let oddcount=0;

    for(let i=1;i<=50;i++){
        if(i%2===0){
            evencount++;
        }else{
            oddcount++;
        }
    }

    document.getElementById("result").innerHTML="Even Numbers:" + evencount +
    "<br> Odd Number :"+ oddcount;

});