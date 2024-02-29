const handleSubmit = (e) => {
  e.preventDefault();

  // values from input field

  let name = document.getElementById("name").value;
  let marks = document.getElementById("marks").value;
  let number = document.getElementById("number").value;
  let course = document.getElementById("course").value;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = name;
  let td2 = document.createElement("td");
  td2.innerHTML = marks;
  let td3 = document.createElement("td");
  td3.innerHTML = number;
  let td4 = document.createElement("td");
  td4.innerHTML = course;
  let td5 = document.createElement("td");
  td5.innerHTML = "Delete";

  td5.addEventListener("click", (e) => {
    // console.log(e);
    e.target.parentNode.remove();
  });

  let td6 = document.createElement("td");

  if (marks >= 90) {
    td6.innerHTML = "pass";
    td6.style.backgroundColor = "green";
    td6.setAttribute("class", "pass");
  } else {
    td6.innerHTML = "fail";
    td6.style.backgroundColor = "red";
  }

  tr.append(td1, td2, td3, td4, td6, td5);
  document.getElementById("tbody").append(tr);
};

document.getElementById("form").addEventListener("submit", handleSubmit);

// delete all
document.getElementById("del").addEventListener("click", () => {
  document.getElementById("tbody").innerHTML = "";
});
