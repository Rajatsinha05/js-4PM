let arr = [2, 8, 10, 20, 30];

let target = 110;

let i = 0;
let j = arr.length - 1;

let flag = false;
while (i < j) {
  if (arr[i] + arr[j] == target) {
    console.log(i, j);
    flag = true;
    break;
  } else if (arr[i] + arr[j] > target) {
    j--;
  } else {
    i++;
  }
}

if (flag == false) {
  console.log(-1, -1);
}
