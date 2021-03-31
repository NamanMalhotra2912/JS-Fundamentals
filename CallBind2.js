let name1 = {
    firstName: "Neeraj",
    lastName: "Malhotra",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
name1.printFullName();

let name2 = {
    firstName: "Raj",
    lastName: "Malhotra",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
name2.printFullName();