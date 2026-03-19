document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let Age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (Age >= 60) {
        result.textContent = `Age ${Age} is Senior Citizen (Can Vote)`;
    } 
    else if (Age >= 18) {
        result.textContent = `Age ${Age} is Eligible for Vote and Drive`;
    } 
    else {
        result.textContent = `Age ${Age} is NOT Eligible for Vote and Drive`;
    }
});
