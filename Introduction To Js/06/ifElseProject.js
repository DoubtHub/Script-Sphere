const userOne = prompt("Enter the name of user 1 : ")
const userOneAge = prompt("Enter the age of user 1 : ")

const userTwo = prompt("Enter the name of user 2")
const userTwoAge = prompt("Enter the age of user 2")

if(userOneAge>userTwoAge){
    alert(userOne + " is bigger than "+userTwo)
}else if(userOneAge == userTwoAge){
    alert(userOne + " & "+userTwo+ "both are of same age")
}else{
    alert(userTwo + " is bigger than "+userOne)
}