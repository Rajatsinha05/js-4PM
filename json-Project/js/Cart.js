import DeleteProduct from "../Api/Delete.js";
import GetData from "../Api/Get.js";
import HandleQty from "../Api/ProductUpdate.js";
import CreateTag from "../components/CreateTag.js";
import NavBar from "../components/navBar.js";
document.getElementById("navbar").innerHTML = NavBar()

const Qty = (opr, data) => {
    if (opr == "+") {
        data.qty += 1
        HandleQty(data)
    }
    else {
        if (data.qty >= 2) {
            data.qty -= 1
            HandleQty(data)
        }
        else {
            DeleteProduct(data.id)
        }
    }
}

const uiMaker = (data) => {

    data.map((ele) => {

        let img = CreateTag("img")
        img.src = ele.img

        let title = CreateTag("h4")
        title.innerHTML = ele.title
        let td1 = CreateTag("td")
        td1.append(img, title)
        td1.setAttribute("class", "d-flex")

        let btn1 = CreateTag("button")
        btn1.innerHTML = "-"
        let qty = CreateTag("span")
        qty.innerHTML = ele.qty
        let btn2 = CreateTag("button")
        btn2.innerHTML = "+"
        btn2.addEventListener("click", () => Qty("+", ele))
        btn1.addEventListener("click", () => Qty("-", ele))
        let td2 = CreateTag("td")
        td2.append(btn1, qty, btn2)
        let td3 = CreateTag("td")
        td3.innerHTML = ele.price * ele.qty
        let btn3 = CreateTag("button")
        btn3.innerHTML = "Delete"

        btn3.addEventListener("click", () => {
            DeleteProduct(ele.id)
        })
        let td4 = CreateTag("td")
        td4.append(btn3)
        let tr = CreateTag("tr")
        tr.append(td1, td2, td3, td4)
        document.getElementById("tbody").append(tr)


        // let dummy = document.createElement("div")
        // dummy.addEventListener
    })

}

const get = async () => {
    let data = await GetData("http://localhost:3000/cart")
    uiMaker(data)
}
get()