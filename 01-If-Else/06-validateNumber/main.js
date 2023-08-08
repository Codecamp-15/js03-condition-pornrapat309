let num1 = +prompt("Enter number");
let num2 = +prompt("Enter number");
console.log(num1,num2)
let sum = num1 + num2;

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid number");
} else {
    alert(sum);
}

