let employeeName = prompt("Enter your name:");

console.log(employeeName);

document.writeln("Welcome " + employeeName);

let answer = confirm("Are you ready to join today's JavaScript training?");

console.log(answer)

alert("Welcome to Stackly Solutions!");

console.log("Customer entered the website.");


let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");

console.log("Name: " + studentName);
console.log("Age: " + studentAge);

let productPrice = 500;

productPrice = 750;

console.log(productPrice);


let username = prompt("Enter your username:");

if (username === "") {
    console.warn("Username cannot be empty!");
} else {
    console.log("Login Successful: " + username);
}


alert("Website is under maintenance.");

console.error("Error: Website is currently under maintenance.");


let feedback = prompt("How was today's JavaScript session?");

console.log(feedback);

document.writeln("Thank you for your feedback!");


let name = prompt("Enter your name:");
let city = prompt("Enter your city:");
let favoriteLanguage = prompt("Enter your favorite programming language:");

console.log("Name: " + name);
console.log("City: " + city);
console.log("Favorite Programming Language: " + favoriteLanguage);


let fullName = prompt("Enter your Full Name:");
let email = prompt("Enter your Email:");
let mobile = prompt("Enter your Mobile Number:");

console.log("===== Registration Details =====");
console.log("Name   : " + fullName);
console.log("Email  : " + email);
console.log("Mobile : " + mobile);

alert("Registration Successful!");