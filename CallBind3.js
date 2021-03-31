let name1 = {
    firstName: "Mohak",
    lastName: "Malhotra",
}
let printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName+ " "+ "from "+ this.city + " state is : "+ this.state);
}
let name2 = {
    firstName: "Herit",
    lastName: "Malhotra",
}

// printFullName.call(name2, "Gurgaon" );
printFullName.apply(name1, ["Delhi"] );
