function startNum() {
  let count = document.getElementById("arrayNum").value;
  let box = document.getElementById("itemArray");

  box.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    box.innerHTML += `
      <input type="text" class="form-control m-1 w-25 inputEl" 
      placeholder="Element ${i}" id="el${i}">
    `;
  }

  document.querySelectorAll(".inputEl").forEach(input => {
    input.addEventListener("input", createArray);
  });
}

function createArray() {
  let arr = getValues();
  showOutput(arr);
}

function getValues() {
  let count = document.getElementById("arrayNum").value;
  let arr = [];

  for (let i = 1; i <= count; i++) {
    let val = document.getElementById("el" + i).value;

    if (val !== "" && !isNaN(val)) {
      arr.push(Number(val));
    }
  }
  return arr;
}

function showOutput(data) {
  let out = document.getElementById("output");

  if (Array.isArray(data)) {
    out.innerHTML = `[ ${data.join(", ")} ]`;
  } else {
    out.innerHTML = data;
  }
}

function Push() {
  let arr = getValues();
  let val = prompt("Enter value");
  if (val !== "" && !isNaN(val)) arr.push(Number(val));
  showOutput(arr);
}

function Pop() {
  let arr = getValues();
  arr.pop();
  showOutput(arr);
}

function Shift() {
  let arr = getValues();
  arr.shift();
  showOutput(arr);
}

function Unshift() {
  let arr = getValues();
  let val = prompt("Enter value");
  if (val !== "" && !isNaN(val)) arr.unshift(Number(val));
  showOutput(arr);
}

function Reverse() {
  let arr = getValues();
  arr.reverse();
  showOutput(arr);
}

function Sort() {
  let arr = getValues();
  arr.sort((a, b) => a - b);
  showOutput(arr);
}

function Join() {
  let arr = getValues();
  showOutput("Joined: " + arr.join(" - "));
}

function some() {
  let arr = getValues();
  let result = arr.some(num => num > 10);
  showOutput("Some > 10: " + result);
}

function find() {
  let arr = getValues();
  let val = prompt("Enter value to find");
  let result = arr.find(num => num == val);
  
  if (result !== undefined) {
    showOutput("Found: " + result);
  } else {
    showOutput("Not Found");
  }
}

function Ascending() {
  let arr = getValues();
  arr.sort((a, b) => a - b);
  showOutput("Ascending: " + arr.join(", "));
}

function Descending() {
  let arr = getValues();
  arr.sort((a, b) => b - a);
  showOutput("Descending: " + arr.join(", "));
}

function length() {
  let arr = getValues();
  showOutput("Length: " + arr.length);
}

function Map() {
  let arr = getValues();
  let result = arr.map(num => num * 2); 
  showOutput("Map : [ " + result.join(", ") + " ]");
}

function Filter() {
  let arr = getValues();
  let result = arr.filter(num => num > 10); 
  showOutput("Filter : [ " + result.join(", ") + " ]");
}

function Reduce() {
  let arr = getValues();
  let result = arr.reduce((acc, curr) => acc + curr, 0); 
  showOutput("Reduce : " + result);
}

function Clear() {
  document.getElementById("output").innerHTML = "";
}