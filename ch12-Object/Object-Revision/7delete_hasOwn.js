

const bike={
    name :"KTM",
    price : 10000,
    model :2020
};

console.log(bike);
//delete key word use to delete part

delete bike.model;

console.log(bike);

//hasown

const car={
    name:"BMW",
    price :1200000,
}

const check=car.hasOwnProperty('name');

console.log(check);
//key

console.log(Object.keys(car));

//value

console.log(Object.values(car));