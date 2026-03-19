document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let num = Number(document.getElementById("multiple").value);
    let result = document.getElementById("result");

    result.innerHTML = `<h3 style="color:lime;">Table of ${num}</h3>`;

    for(let i = 1; i <= 10; i++){
        result.innerHTML += `<h3>${num} × ${i} = 
        <span style="color:lime">${num * i}</span></h3>`;
    }
});
