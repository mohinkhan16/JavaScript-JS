document.getElementById("btn").addEventListener("click", function(){

    let signal = document.getElementById("signal").value;
    let result = document.getElementById("result");

    if(signal === ""){
        result.innerHTML = "Please select a signal!";
        result.style.color = "white";
    }
    else if (signal === "red") {
        result.innerHTML = "STOP";
        result.style.color = "red";
    } 
    else if (signal === "yellow") {
        result.innerHTML = "READY";
        result.style.color = "yellow";
    } 
    else if (signal === "green") {
        result.innerHTML = "GO";
        result.style.color = "green";
    }
});
