//using object accessing method
//this method is use for give output us to specific value like name="YourName".

function PersonDetails(name, id, age, surname){
    this.name = name;
    this.id = id;
    this.age = age;
    this.surname = surname;
}

const PersonDetails1 = new PersonDetails("Mohin", 101, 20, "Pathan");

console.log(PersonDetails1.name);
console.log(PersonDetails1.age);
