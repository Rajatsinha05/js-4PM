

// setTimeout(() => {
//     console.log("setTimeout");
// }, 1000)

// setInterval(() => {
//     console.log("setInterval");
// },100)

// let count = 0;
// let id = setInterval(() => {
//     count = count + 1;
//     console.log(count);

//     if (count == 10) {
//         clearInterval(id);
//     }
// }, 1000)












let maxCount = document.querySelector("#count1").innerHTML


let count = 0;
let id = setInterval(() => {
    count = count + 1;
    document.querySelector("#count1").innerHTML = count

    if (count == maxCount) {
        clearInterval(id);
    }


}, 100)



