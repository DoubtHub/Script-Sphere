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