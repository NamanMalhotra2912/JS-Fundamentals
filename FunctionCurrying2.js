function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
const add = sum (5)(7)(9)(10);
console.log(add);