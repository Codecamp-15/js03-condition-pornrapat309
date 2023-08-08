let num1 = +prompt("Enter number 1");
let num2 = +prompt("Enter number 2");
let num3 = +prompt("Enter number 3");

// if ( num1 >= num2 && num1 >= num3 && num2 >= num3 ) {
//     alert( `${num1}, ${num2}, ${num3}` );
// } else if ( num1 >= num2 && num1 >= num3 && num3 >= num2 ) {
//     alert( `${num1}, ${num3}, ${num2}` );
// } else if ( num2 >= num1 && num2 >= num3 && num1 >= num3 ) {
//     alert( `${num2}, ${num1}, ${num3}` );
// } else if ( num2 >= num1 && num2 >= num3 && num3 >= num1 ) {
//     alert( `${num2}, ${num3}, ${num1}` );
// } else if ( num3 >= num1 && num3 >= num2 && num1 >= num2 ) {
//     alert( `${num3}, ${num1}, ${num2}` );
// } else if ( num3 >= num1 && num3 >= num2 && num2 >= num1 ) {
//     alert( `${num3}, ${num2}, ${num1}` );
// } else { alert("Invalid number"); }


let max;
let mid;
let min;
    
    if (x >= y && x >= z && y >= z) {
        // x,y,z
        max = x;
        mid = y;
        min = z;
    } else if (x >= y && x >= z && y < z) {
        max = x;
        mid = z;
        min = y;
    } else if (y >= x && y >= z && x >= z) {
        max = y;
        mid = x;
        min = z;
    } else if (y >= x && y >= z && x < z) {
        max = y;
        mid = z;
        min = x;
    } else if (z >= x && z >= y && x >= y) {
        max = z;
        mid = x;
        min = y;
    } else {
        max = z;
        mid = y;
        min = x;
    }
    
    console.log(`${max} : ${mid} : ${min}`);