let id = -1;
const appendInForm = (ele) => {
  document.getElementById("name").value = ele.name;
  document.getElementById("submit").value="Update"
  id = ele.id;
};
const ui = (data) => {
  document.getElementById("userList").innerHTML = "";
  data.map((ele) => {
    let name = document.createElement("h2");
    name.innerHTML = ele.name;
    let div = document.createElement("div");
    let DeleteBtn = document.createElement("button");
    DeleteBtn.innerHTML = "Delete";
    DeleteBtn.addEventListener("click", () => deleteData(ele.id));
    let updateBtn = document.createElement("button");
    updateBtn.innerHTML = "Update";

    updateBtn.addEventListener("click", () => appendInForm(ele));
    div.append(name, updateBtn, DeleteBtn);
    document.getElementById("userList").append(div);
  });
};
const get = () => {
  try {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => ui(data));
  } catch (error) {
    console.log(error.message);
  }
};
// post
const postData = (data) => {
  try {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
// update data
const updateData = (id, data) => {
  try {
    fetch(`http://localhost:3000/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
// delete
const deleteData = (id) => {
  try {
    fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
// form data
const handleSubmit = (e) => {
  e.preventDefault();
  let data = {
    name: document.getElementById("name").value,
  };

  if (id != -1) {
    updateData(id, data);
  } else {
    postData(data);
  }
};

document.getElementById("myform").addEventListener("submit", handleSubmit);

get();
