

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
 let marks= document.getElementById("marks").value;

 let result=document.getElementById("result");

 if(marks>=90){
    result.innerHTML =`<h1"> you have achive A gread </h1>`;
 }else if(marks>=70){
    result.innerHTML=`<h1>you have achive B gread</h1>`;
 }else if(marks>=50){
    result.innerHTML=`<h1> you have achive C gread</h1>`;
 }else if(marks>=35){
    result.textContent=`you have achive D gread`;
 }else {
    result.innerHTML=`<h1> you have fail </h1>`;
 }
 
})      
