document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let result = document.getElementById("result");

    let salary = Number(document.getElementById("salary").value);
    let hrapercent = Number(document.getElementById("HRA").value);
    let dapercent = Number(document.getElementById("DA").value);
    let tapercent = Number(document.getElementById("TA").value);

    let HRA = (salary * hrapercent) / 100;
    let DA = (salary * dapercent) / 100;
    let TA = (salary * tapercent) / 100;

    let totalsalary = salary + HRA + DA + TA;

    result.textContent = "Total Salary = " + totalsalary;
});