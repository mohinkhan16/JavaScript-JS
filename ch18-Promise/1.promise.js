
// promise definition  :- promise is a object represents the eventual completion or failure of an asynchronous operation and its resulting value 

//promise is a work in 3 bias
// 1.pending
// 2.fulfilled
// 3.rejected

//Promise is a work in Vertically.

const items = new Promise((resolve,reject)=>{
    
    let product=["sunscreen","FashWash"];

    // product=[];

    setTimeout(()=>{
        if(product.length===0){
            reject("No product found");
        }else{
            resolve(" please Product to check out ");
        }
    },2000);
});

items
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);


// promise definition  :- promise is a object represents the eventual completion or failure of an asynchronous operation and its resulting value 

//promise is a work in 3 bias
// 1.pending
// 2.fulfilled
// 3.rejected

//Promise is a work in Vertically.

const items = new Promise((resolve,reject)=>{
    
    let product=["sunscreen","FashWash"];

    // product=[];

    setTimeout(()=>{
        if(product.length===0){
            reject("No product found");
        }else{
            resolve(" please Product to check out ");
        }
    },2000);
});

items
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });