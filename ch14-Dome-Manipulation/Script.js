
//by id
document.getElementById("btn").addEventListener("click",()=>{
    const heading =document.getElementById("heading");

    heading.textContent="Hi,I am Good";
})


//by class

const para =document.getElementsByClassName("para")
console.log("para",para);

para[0].textContent="this is paragrah";

//para[1]addinng onther in in html

para[1].textContent="other paragraph";

//using tag name

const list =document.getElementsByTagName("ul");

console.log("list",list);
list[0].innerHTML =`<li>this is list one </li>`