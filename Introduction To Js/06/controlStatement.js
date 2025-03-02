//if-else

let x = 5
let y = "5"

if(x === y){
    console.log("true");   
}else{
    console.log("false");
}

if(2 != 3){
    console.log("true");   
}else{
    console.log("false");
}


userLoggedIn = true

if(userLoggedIn){
    console.log("User has logged In");
    
}else{
    console.log("Please Sign Up");
    
}

//while

let z = 1

while(z<=10){
    console.log(z)
    z+=2
}

let sum = 10

//do-while

do {
    console.log(sum);
    sum++;
    
} while (z>20);


//switch

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("It's a holiday!");
        break;
    default:
        console.log("It's a regular day.");
}