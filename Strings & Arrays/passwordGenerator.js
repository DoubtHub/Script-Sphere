// const length = prompt("Enter the length of the password")
const length = 10
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'

let password = ""

console.log(Math.random())

console.log(Math.floor(Math.random() * 10))



for (let i = 0; i < length; i++) {
    let char = characters.charAt(Math.floor(Math.random() * characters.length))
    password = password + char
}

console.log(password);
