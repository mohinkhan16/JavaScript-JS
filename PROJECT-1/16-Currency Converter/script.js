document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    const rates = {
        INR: { USD: 0.012, EUR: 0.011 },
        USD: { INR: 83, EUR: 0.92 },
        EUR: { INR: 90, USD: 1.09 }
    };

    if(from === to){
        result.innerHTML = "Same currency selected!";
        return;
    }

    let converted = amount * rates[from][to];
    result.innerHTML = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
