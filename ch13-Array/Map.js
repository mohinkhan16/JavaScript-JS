

let numbers=[1,2,3,4,5,6,7,8];

console.log(numbers);

let newnumbers= numbers.map((numbers)=>numbers+5);

console.log(newnumbers);

//Secound Example

const veges=["Cabbeg","Onine","Brokly","Ginger","Chilli","Poteto","Domsticky"];

let vegesArray=veges.map((veges)=>{
    return veges
});

console.log(vegesArray);

//Third Example

const Person=[
    {name :"Smarth",age:21,city:"vadodra",profession:"Doctor"},
    {name :"Priya",age:23,city:"Ahemdabad",profession:"Teacher"},
    {name :"Yash",age:27,city:"Baroda",profession:"Hair Stylest"},
    {name :"Dhyey",age:31,city:"Mumbai",profession:"Graphic desiner"},
    {name :"Jay",age:34,city:"Pune  ",profession:"Bussiness men"},

];

const Personage= Person.map((Person)=>{
    return Person.age;
});

console.log(Personage);
