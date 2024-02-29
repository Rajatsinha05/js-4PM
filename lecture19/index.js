
let products = []
const uiMaker = () => {
    document.getElementById("box").innerHTML = ""
    products.map((ele, i) => {
        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let div = document.createElement("div")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        div.append(img, title, price, btn)
        // delete 
        btn.addEventListener("click", () => {
            products.splice(i, 1)

            console.log(products);
            uiMaker()
        })
        console.log(div);
        title.setAttribute("class", "title")
        document.getElementById("box").append(div)
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let price = document.getElementById('price').value;
    let password = document.getElementById("password").value;

    if (title.length < 2) {

        document.getElementById("t-error").style.display = "block"
        return
    }

    if (price < 0) {
        alert("price must be between 1 and  10000000")
        return
    }
    if (password.length < 8) {
        alert("password must be at least 8 characters")
        return
    }



    let product = {
        title: title,
        img: img,
        price: price
    }

    products.push(product);
    uiMaker()
}


document.getElementById("form").addEventListener("submit", handleSubmit);
