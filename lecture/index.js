let products = JSON.parse(localStorage.getItem('data')) || []

console.log("products", products);



const DeleteProduct = (id) => {
    products.splice(id, 1);
    displayProduct()

    localStorage.setItem("data", JSON.stringify(products));
}



const displayProduct = () => {
    document.getElementById("box").innerHTML = ""
    products.map((ele, id) => {
        console.log(ele);
        let img = document.createElement("img");
        img.src = ele.img;
        let price = document.createElement("p");
        price.innerHTML = ele.price;
        let title = document.createElement("h2");
        title.innerHTML = ele.title;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete"

        btn.addEventListener("click", () => DeleteProduct(id))
        let div = document.createElement("div");
        div.append(img, title, price, btn);
        document.getElementById("box").append(div);
    });
};





displayProduct()




const handleSubmit = (e) => {
    e.preventDefault();


    let data = {

        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value
    }

    products.push(data);
    displayProduct()
    localStorage.setItem("data", JSON.stringify(products));
}







document.querySelector("#form").addEventListener("submit", handleSubmit)







