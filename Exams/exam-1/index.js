
let users = []

const uiMaker = () => {
    document.getElementById("tbody").innerHTML = ""

    users.map((ele, i) => {
        let th = document.createElement("th")
        th.innerHTML = i + 1
        let td1 = document.createElement("td")
        td1.innerHTML = ele.email
        let td2 = document.createElement("td")
        td2.innerHTML = ele.password

        let td3 = document.createElement("td")
        let img = document.createElement("img")
        img.src = ele.img

        td3.append(img)
        let td4 = document.createElement("td")
        td4.innerHTML = "Delete"

        // delete method
        td4.addEventListener("click", () => {
            users.splice(i, 1)
            uiMaker()
        })
        let tr = document.createElement("tr")
        tr.append(th, td1, td2, td3, td4)
        document.getElementById("tbody").append(tr)
    })
}

const handleData = (e) => {
    e.preventDefault()
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        img: document.getElementById("img").value,
    }
    users.push(user)
    uiMaker()
}
document.getElementById("data").addEventListener("submit", handleData)
document.getElementById("delete").addEventListener("click", () => {
    users = []
    uiMaker()

})