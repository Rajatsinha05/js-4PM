let arr = [1, 4, 6, 8];

arr.shift();
arr.unshift(10, 20);
// console.log(arr);

let arr2 = ["RED", "GREEN", "BLUE"];

for (let i = 0; i < arr2.length; i++) {
  if (i % 2 == 1) {
    console.log(arr2[i].toLowerCase());
  } else {
    console.log(arr2[i]);
  }
}
