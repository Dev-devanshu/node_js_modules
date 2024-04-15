var a = (1, 2, 3);
console.log(a); //it will assign the last value

function vartest() {
  if (true) {
    var a = 10;
    console.log("block", a);
  }
}

for (let i = 0; i <= 3; i++) {
  console.log(i); // it is 1 2 3 inside the loop
}
console.log(i); // we can not call the function outside the loop so it
// will throw the error that  is refernce is not defined
