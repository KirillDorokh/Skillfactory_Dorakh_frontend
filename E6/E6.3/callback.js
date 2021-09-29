function f1() {console.log('f1')};
function f2() {console.log('f2')};

const btn = document.querySelector(".butt");

f2();
btn.addEventListener('click', f1);
f2();
