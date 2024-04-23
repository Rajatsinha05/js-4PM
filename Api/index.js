const data = (product) => {


    let tags = ""
    product.map((res) => {
        //    let title = document.createElement("p")
        //    title.innerHTML = res.title
        //    let image = document.createElement("img")
        //    image.src = res.image

        //    document.getElementById("box").append(title,image)
        tags += ` <div class="item">
<img src=${res.image} alt="" />
<h1>${res.title}</h1>

<p>${res.price}</p>
</div>`


    })


    document.getElementById("box").innerHTML = tags






}


fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(res => data(res))