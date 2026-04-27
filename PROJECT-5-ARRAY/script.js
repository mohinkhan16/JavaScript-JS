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

document.getElementById("pushBtn").onclick = () => {
  let arr = getValues();
  let val = prompt("Enter value");
  if (val !== "" && !isNaN(val)) arr.push(Number(val));
  showOutput(arr);
};

document.getElementById("popBtn").onclick = () => {
  let arr = getValues();
  arr.pop();
  showOutput(arr);
};

document.getElementById("shiftBtn").onclick = () => {
  let arr = getValues();
  arr.shift();
  showOutput(arr);
};

document.getElementById("unshiftBtn").onclick = () => {
  let arr = getValues();
  let val = prompt("Enter value");
  if (val !== "" && !isNaN(val)) arr.unshift(Number(val));
  showOutput(arr);
};

document.getElementById("reverseBtn").onclick = () => {
  let arr = getValues();
  arr.reverse();
  showOutput(arr);
};

document.getElementById("sortBtn").onclick = () => {
  let arr = getValues();
  arr.sort((a, b) => a - b);
  showOutput(arr);
};

document.getElementById("jointBtn").onclick = () => {
  let arr = getValues();
  showOutput("Joined: " + arr.join(" - "));
};

document.getElementById("clearBtn").onclick = () => {
  document.getElementById("output").innerHTML = "";
};

