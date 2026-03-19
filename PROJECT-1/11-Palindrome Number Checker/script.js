document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let num = document.getElementById("number").value;
  let reversed = num.split("").reverse().join("");
  let result = document.getElementById("result");

  if (num === reversed) {
    result.textContent = num + " is a Palindrome Number ";
    result.style.color = "green";
  } else {
    result.textContent = num + " is NOT a Palindrome Number";
    result.style.color = "red";
  }
});
