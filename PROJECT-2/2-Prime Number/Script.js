document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let primenumber =[];

    for(let i=1;i<=50;i++){
        let isprime =true;

        if(i<2){
            isprime =false;
        }

        for(let j=2;j<i;j++){
            if(i%j===0){
                isprime =false;
                break;
            }
        }
        if(isprime){
            primenumber.push(i);
        }
    }

    document.getElementById("result").innerHTML=primenumber.join(",");
});