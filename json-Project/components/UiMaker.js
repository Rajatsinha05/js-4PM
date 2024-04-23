import HandleQty from "../Api/ProductUpdate.js"
import Post from "../Api/post.js"
import CreateTag from "./CreateTag.js"

const isExists = (data) => {
    fetch(`http://localhost:3000/cart/${data.id}`)
        .then((res) => res.json())
        .then((res) => {
            res.qty += 1
            HandleQty(res)

        })
        .catch((err) => {
            Post("http://localhost:3000/cart", data)
        })


}




const uiMaker = (data, id) => {
    document.getElementById(id).innerHTML = ""
    data.map((ele) => {

        let img = CreateTag("img")
        img.src = ele.img
        let title = CreateTag("h4")
        title.innerHTML = ele.title
        let price = CreateTag("p")
        price.innerHTML = ele.price
        let category = CreateTag("p")
        category.innerHTML = ele.category
        let btn = CreateTag("button")
        btn.innerHTML = "Buy Now"
        btn.addEventListener("click", () => {
            //   Post("http://localhost:3000/cart",{...ele,qty:1})

            ele.qty = 1
            isExists(ele)
        })

        let div = CreateTag("div")
        div.append(img, title, price, category, btn)

        document.getElementById(id).append(div)
    })
}


export default uiMaker





