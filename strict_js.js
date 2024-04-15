var a = 10; //global scop

function f1() {
  var b = 20;
  console.log(`inside f1`, a); //yes
  console.log(`inside f1`, b); // yes
}

function f2() {
  var c = 30;

  console.log(`inside f2`, a); //yes
  console.log(`inside f2`, b); //no
  console.log(`inside f2`, c); //yes
}

function f3() {
  var c = 30;
  d = 23;

  console.log(`inside f3`, a); //yes
  console.log(`inside f3`, b); //no
  console.log(`inside f2`, c); //yes
  console.log(`inside the f3`); //yes
}

f1();
f3();
