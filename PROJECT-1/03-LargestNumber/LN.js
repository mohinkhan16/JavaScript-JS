document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  let thirdnumber = Number(document.getElementById("thirdnumber").value);

  let result = document.getElementById("result");

  if (firstnumber >= secondnumber && firstnumber >= thirdnumber) {
    result.innerHTML = firstnumber + " is the largest number";
  } 
  else if (secondnumber >= firstnumber && secondnumber >= thirdnumber) {
    result.innerHTML = secondnumber + " is the largest number";
  } 
  else {
    result.innerHTML = thirdnumber + " is the largest number";
  }
});