document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let age = document.getElementById("age").value;
    let result = document.getElementById("result");

    if(age === ""){
        result.innerHTML = "Please enter your age!";
        result.style.color = "red";
        return;
    }

    let price;

    if(age < 5){
        price = 0; 
    } else if(age <= 12){
        price = 100; 
    } else if(age <= 59){
        price = 250; 
    } else{
        price = 150; 
    }

    result.innerHTML = `Your Movie Ticket Price is ₹${price}`;
    result.style.color = "#00ffae";
});
