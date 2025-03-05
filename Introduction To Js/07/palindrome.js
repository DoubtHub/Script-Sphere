// let number = prompt("Enter a Number : ")
let number = 121
let originalNumber = number
let reversedNumber = 0,remainder

while(number>0){
    remainder = number % 10
    reversedNumber = reversedNumber * 10 + remainder
    number = parseInt(number / 10)
}

reversedNumber == originalNumber ? console.log(originalNumber + " is a palindrome") : console.log(originalNumber + " is not a palindrome") 