let score = prompt("Enter score");
if (score > 0 && score < 100) {
    if (score >= 80) {
        alert("Grade A");
    } else if (score >= 70 && score < 80) {
        alert("Grade B");
    } else if (score >=60 && score < 70) {
        alert("Grade C");
    } else if (score >=50 && score < 60) {
        alert("Grade D");
    } else if (score < 50) {
        alert("Grade F");
    }
} else {
    alert("Invalid range");
}