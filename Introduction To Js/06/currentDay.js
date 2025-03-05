const date = new Date()
// by the new Date() we get the info about the current date
console.log(date);
//to extract the day from the date we use the getDay() function it returns a value of 0-6 
const day = date.getDay()

//code sample

const inputDate = prompt("Enter a date (YYYY-MM-DD):")
const currentDate = new Date(inputDate)
const currentDay = currentDate.getDay()


console.log(currentDay)

// if(currentDay == 6 || currentDay == 0){
//     alert("Enjoy Your Weeknd 😊")
// }else{
//     alert("Work Hard 💪 !!!")
// }

(currentDay == 6 || currentDay == 0) ? alert("Enjoy Your Weeknd 😊")  : alert("Work Hard 💪 !!!")