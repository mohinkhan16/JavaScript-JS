
//delete key word use for deleteing some part of the object. 

let student={
    name :"Mohin",
    Grid:12028,
    lastname:"Pathan"
}

console.log(student);

delete student.Grid;

console.log(student);

//HasOwn
//use for checking propties in object and they give us to output true and false.

const Person={
    firstname :"Mohin",
    lastname :"Pathan"
}

const result= Person.hasOwnProperty('age');

console.log(result);

//key

console.log(Object.keys(Person));

//value

console.log(Object.values(Person));