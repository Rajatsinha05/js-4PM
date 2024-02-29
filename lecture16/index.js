let student = {
  name: "dev",
  grid: 4532,
  number: 87678578,
  add: {
    city: "surat",
    state: "Gujarat",
  },
  skil: ["html", "css", "js", "react"],
  friends: [
    { name: "jayesh", number: 43565 },
    { name: "jim", number: 4590 },
    { name: "vishal", number: 99894245 },
  ],

  dummy: {
    data: [
      { user: { name: "jayesh", number: 43565 } },
      { user: { name: "vishal", number: 5476767 } },
      { user: { name: "you am", number: 905689789 } },
      { user: { name: "you is", number: 905689789 } },
      { user: { name: "you are", number: 905689789 } },
    ],
  },
};

let n=student.dummy.data.length;

// for (let i=0; i<n;i++) {
//    console.log(student.dummy.data[i].user.name);
//    console.log(student.dummy.data[i].user.number);

// }



student.dummy.data.map((ele)=>{

    console.log(ele);
    console.log(ele.user.name);
    console.log(ele.user.number);
})

