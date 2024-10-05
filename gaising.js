const max = prompt("Enter a max number");
console.log(max);
let random = Math.floor(Math.random() * max) + 1;
random = parseInt(random);
console.log(random);
let gaise = prompt("Gaise a number");
while (true) {

    if (gaise == "quit") {
        console.log("user quit");
        break;
    }
    if (gaise == random) {
        console.log("Congrats");
        break;
    } else if(gaise > random){
        gaise = prompt("your gaise number is to large please enter some smaller number");
    }else{
        gaise = prompt("your gaise number is to Small please enter some Bigger number"); 
    }
}
