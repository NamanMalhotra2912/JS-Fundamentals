function sum(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);
            }
        }
    }
}
sum (5)(10)(15)(20);

// This is traditional approach of function currying.
// Parent function can't gets the arguments of child function.
