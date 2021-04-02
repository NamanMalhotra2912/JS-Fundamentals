let Is_Head = 0;
let HeadCount = 0, TailCount = 0;

let flipCoin = Math.floor(Math.random() * 10) % 2;

if (flipCoin == 0){
    console.log("Head");
    HeadCount++;
}
else{
    console.log("Tail");
    TailCount++;
}
console.log(HeadCount);

if (HeadCount == 11){
    console.log("Head wins");
}
else{
    console.log("Tail Wins");
}