document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if(weight === "" || height === ""){
        result.innerHTML = "Please enter weight and height!";
        result.style.color = "red";
        return;
    }

    height = height / 100; 

    let bmi = (weight / (height * height)).toFixed(2);

    let message = "";

    if(bmi < 18.5){
        message = "Underweight";
    }
    else if(bmi < 24.9){
        message = "Normal Weight";
    }
    else if(bmi < 29.9){
        message = "Overweight";
    }
    else{
        message = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi} (${message})`;
    result.style.color = "green";
});
