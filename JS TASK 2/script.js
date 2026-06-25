let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

console.log("My name is " + name);
console.log("I am " + age + " years old");


let degree = confirm("Did you complete degree?");

if (degree) {
    console.log("Degree Completed");
} else {
    console.log("Degree Not Completed");
}



let mobilePrice = 15000;
let discount = 2000;

let finalPrice = mobilePrice - discount;

console.log("Final Price : " + finalPrice);


let userAge = prompt("Enter your age:");

if (userAge >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}


let cart = [
    "Rice",
    "Milk",
    "Sugar",
    "Tea Powder"
];

console.log("First Product: " + cart[0]);
console.log("Last Product: " + cart[cart.length - 1]);
console.log("Total Products: " + cart.length);


let student = {
    name: "Naveen",
    age: 18,
    course: "MERN"
};

console.log("Student Name: " + student.name);
console.log("Student Course: " + student.course);


let salary = 25000;
let bonus = 5000;

let totalSalary = salary + bonus;

console.log("Total Salary : " + totalSalary);


let username = "admin";
let password = "1234";

let userNameInput = prompt("Enter Username:");
let passwordInput = prompt("Enter Password:");

if (userNameInput === username && passwordInput === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

let foodPrice = 350;
let deliveryCharge = 50;

let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;

console.log("Total Bill : " + totalBill);
console.log("GST 5% : " + gst);
console.log("Grand Total : " + grandTotal);


let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};

console.log("Product Name: " + product.name);
console.log("Brand: " + product.brand);
console.log("Price: " + product.price);
console.log("Stock Available: " + product.stock);


let attendance = confirm("Present?");

if (attendance) {
    console.log("Attendance Marked");
} else {
    console.log("Absent");
}


let balance = Number(prompt("Enter Current Balance:"));
let withdraw = Number(prompt("Enter Withdraw Amount:"));

if (withdraw <= balance) {
    let remainingBalance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remainingBalance);
} else {
    console.log("Insufficient Balance");
}


let employee = {
    name: prompt("Enter Employee Name:"),
    age: Number(prompt("Enter Employee Age:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Monthly Salary:"))
};

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Annual Salary: " + (employee.salary * 12));

if (employee.salary > 30000) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}