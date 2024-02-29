let products = [];

const displayProduct = () => {
  products.map((ele) => {
    console.log(ele);
    let img = document.createElement("img");
    img.src = ele.img;
    let price = document.createElement("p");
    price.innerHTML = ele.price;
    let title = document.createElement("h2");
    title.innerHTML = ele.title;
    let category = document.createElement("h3");
    category.innerHTML = ele.category;
    let div = document.createElement("div");
    div.append(img, title, category, price);
    document.getElementById("parent-box").append(div);
  });
};

const productData = (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").value;




  let product = {
    title: title,
    price: price,
    category: category,
    img: img,
  };
  products.push(product);
  //   console.log(products);

  displayProduct();
};

document.getElementById("data").addEventListener("submit", productData);
