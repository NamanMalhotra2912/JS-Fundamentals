function function1(){
    console.log(number);
    function2();
}
function function2() {
    var number = 10;    
    console.log(number);
}
var number = 20;
console.log(number);
function1();

// Here we are using lexical scopping as we are accessing one variable from diffrent scopes.