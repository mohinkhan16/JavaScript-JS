document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let balance = Number(document.getElementById("balance").value);
  let amount = Number(document.getElementById("amount").value);
  let result = document.getElementById("result");

  if(balance <= 0){
    result.innerText = "Enter valid balance!";
  }
  else if(amount <= 0){
    result.innerText = "Enter valid amount!";
  }
  else if(amount > balance){
    result.innerText = "Insufficient Balance!";
  }
  else{
    let remaining = balance - amount;
    result.innerText =
      "Withdrawal Successful Remaining Balance: ₹" + remaining;
  }
});
