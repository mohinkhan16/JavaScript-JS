let number=[1,2,3,4,5,6,7,8,9,10];

console.log(number);


//using reduce
const tonumber =number.reduce((acc,cuu)=>{
    return (acc *= cuu);
},5);

console.log("using reduce",tonumber);

//using loop

let sum=0;

for(let i=0; i<number.length;i++){
    sum+=number[i];
}

console.log("sum =",sum);

//second example


const productDetails = [
  { productName: "Laptop", price: 1200,  stock: 15 },
  { productName: "Office Chair", price: 250,  stock: 30 },
  { productName: "Smartphone", price: 800,  stock: 25 },
  { productName: "Desk Lamp", price: 45,  stock: 50 },
  { productName: "Backpack", price: 60,  stock: 40 },
];


const total=productDetails.reduce((acc,cur)=>{
    return (acc=acc+cur.price);
},0);

console.log(total);