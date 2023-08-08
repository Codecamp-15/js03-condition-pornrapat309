let company = prompt("Which company created JavaScript?");
company == "Netscape" ? alert("Right!") : alert("Wrong.");

// ทำงานได้แต่ไม่ถูกหลักของ ternary เนื่องจากตัวแปร company เป็น condition จึงควรประกาศตัวแปรอีกตัวเพื่อเก็บค่าที่ได้ เช่น
// let company = prompt('Which company created JavaScript?');
// let result = company == 'Netscape' ? alert('Right!') : alert('Wrong.');
