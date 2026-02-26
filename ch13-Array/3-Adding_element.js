//push is use to add element et the end

 let heros=["Ironmen","Spidermen","Thor"];

 heros.push("Hulk");

console.log("After push",heros)

//Unshift is use to add element at the first

let car=["BMW","Honda","Porse"];

car.unshift("Audi");

console.log("After Unshift",car);

//pop is use to Remove element from the end

let bike=["KTM","Suzuki","Honda"]

bike.pop();

console.log("After pop",bike);

//shift is use to remove element from the begin

let frutes=["Banana","cherry","apple"];

frutes.shift();

console.log("After shift",frutes)

//splice:-add,remove and replace.
//Add

let vegetable=["Tamato","Bringel","carrot"];

vegetable.splice(1,0,"Potato");

console.log(vegetable);

//Remove

let color=["red","green","yellow","brown","white"];

color.splice(1,2);

console.log(color);

//Replace

let student =["Moksh","Arun","Kishan","Vaibhav"];

student.splice(1,1,"Mitansh");

console.log(student);