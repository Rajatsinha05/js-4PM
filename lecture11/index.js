
let Name="racecarab"
let n=Name.length
let str=''

for(let i=n-1; i>=0; i--){
  str+=Name[i]
  console.log(str);
}

if(Name==str){
    console.log("palindrome");
}
else{
    console.log(" not a valid name");
}

