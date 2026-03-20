
//object using function 
function details(age,id){
    this.age=age;
    this.id=id;

};

const details1 =new details(20,12028);

console.log(details1);

const details2=new details(10,12025);

console.log(details2);