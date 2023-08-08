let user = prompt("Enter Username");

if ( user === "codecamp") {
    let password = prompt("Enter Password");
    if (password === "123456") {
        alert ("Welcome " + user);
    } else { alert ("Wrong password"); }
} else {
    alert ("Welcome guest");
}