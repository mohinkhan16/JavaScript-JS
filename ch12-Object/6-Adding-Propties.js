const person={
    Name:"Mohin",
    LastName:"khan",
    city:"Bvn",
    age:21,
};

//using . notion

person.Email ="mohinpathan2004@gmail.com";

console.log(person);

//using [] notion

person["BloodGroup"]="B+";

console.log(person);

function hotel(rating,room,staff){
    this.rating=rating,
    this.room=room,
    this.staff=staff;
};

hotel.prototype.SwimmingPool=true;

const hotel1= new hotel(50,30,44);

console.log(hotel1.SwimmingPool);