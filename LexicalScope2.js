function function1(){
    var number = 10;    
    console.log(number);
    function2();
    function function2() {
        console.log(number);
    }
}

var number = 20;
console.log(number);
function1();
