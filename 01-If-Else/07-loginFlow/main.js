let userName = prompt("Enter Username");
let password = prompt("Enter Password");

if ( userName === "admin" && password === "1234") {
    alert("Hello " + userName);
} else if ( userName === "john" && password === "qwerty") {
    alert("Hello " + userName);
} else if ( userName === "" ) {
    alert("Username is required");
} else if ( password === "" ) {
    alert("Password is required");
} else {
    alert("Invalid username or password");
}