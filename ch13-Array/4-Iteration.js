//iteration array

let bike=["Honda","Suzuki","Splender","Activa","KTM","BMW","Yamaha"];

//using for loop
for(let i=0;i<bike.length;i++){
    console.log(bike[i]);
}

console.log(" ")//for space

//using foor off

for(let i of bike){
    console.log(i);
}

//using foor each
//for eacch give us to index number in output

let fruit=["Banana","cherry","Mango","Ginger","Garlic"]

fruit.forEach((fruit,index)=>{
    console.log(index)
});

//concat

let price=["120","30","40","50","70"];

let Mixed =fruit.concat(price);

console.log(Mixed);

//Array into string

console.log(fruit.toString())