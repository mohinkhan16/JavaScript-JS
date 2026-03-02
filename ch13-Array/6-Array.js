// JavaScript Array some() Method
//some method give us output as a true false

let marks=[20,50,47,86,78,25];

const result=marks.some((mark)=>mark > 78);

console.log(result);

//reverse method

let student =["Mitansh","Ayan","siddhart","Shardha"];

console.log(student.reverse());

//Value()

 let heros=["Ironmen","Spidermen","Thor","Hulk"];

 let herosIterator= heros.values();

 console.log(herosIterator);

 for(key of herosIterator){
    console.log(key);
 }