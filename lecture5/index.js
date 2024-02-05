let sum = 0;
for (let i = 1; i <= 3; i++) {
  for (let j = i; j <= 3; j++) {
    if (i == j) {
      sum += i + j;
    }
  }
}


if(sum%2 == 0) {
    console.log("even number", sum);
}