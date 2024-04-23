
let count = sessionStorage.getItem('count') || 0
document.getElementById("count").innerHTML = count


let counter = () => {
    count++;
    document.getElementById("count").innerHTML = count


    sessionStorage.setItem("count", count)
}


document.querySelector("#btn").addEventListener("click", counter)