
//getter   Example no:-1

let person={
    firstname:"Mohin",
    lastname:"pathan",

    get fullname(){
        return this.firstname + " " +this.lastname;
    }

}

console.log( person.fullname);

//example no:-2

let Price={
    Name : 'Mango',
    price2 :120,

    get Fullprice (){
        return this.Name+ " " +this.price2;
    }
}

console.log(Price.Fullprice)

