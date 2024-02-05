// function outer() {
//   let a = 20;

//   function inner() {
//     console.log(a);
//   }

//   console.log("outer");

//   inner();
// }

// outer();

function print(n) {
  if (n == 0) {
    return;
  }
 

  print(n - 1);
  console.log(n);
}

print(10)