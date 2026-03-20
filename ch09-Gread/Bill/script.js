<<<<<<< HEAD
document.getElementById("from").addEventListener("submit",(e)=>{
    e.preventDefault();

    let unit = Number(document.getElementById("unit").value);
    let output = document.getElementById("bill");

    let Bill = 0;

    if(unit <= 100){
        Bill = unit * 10;
    }
    else if(unit <= 200){
        Bill = 100*10 + (unit-100)*20;
    }
    else if(unit <= 300){
        Bill = 100*10 + 100*20 + (unit-200)*40;
    }
    else{
        Bill = 100*10 + 100*20 + 100*40 + (unit-300)*50;
    }

    output.innerHTML = `<h2>Total Bill = ₹${Bill}</h2>`;
});
=======
document.getElementById("from").addEventListener("submit",(e)=>{
    e.preventDefault();

    let unit = Number(document.getElementById("unit").value);
    let output = document.getElementById("bill");

    let Bill = 0;

    if(unit <= 100){
        Bill = unit * 10;
    }
    else if(unit <= 200){
        Bill = 100*10 + (unit-100)*20;
    }
    else if(unit <= 300){
        Bill = 100*10 + 100*20 + (unit-200)*40;
    }
    else{
        Bill = 100*10 + 100*20 + 100*40 + (unit-300)*50;
    }

    output.innerHTML = `<h2>Total Bill = ₹${Bill}</h2>`;
});
>>>>>>> ebcb54a8f2fc9f65ec674abe7f05616885dec8ff
