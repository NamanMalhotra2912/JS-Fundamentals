let name = {
    firstName: "Neeraj",
    lastName: "Malhotra",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
name.printFullName();