





const divide = (a, b) => {
    if (a == 0 || b == 0) {
        throw new Error("Invalid number 0")
    }
    if (typeof (a) != "number" || typeof (b) != "number") {
        throw new Error("Invalid number")
    }
    return a / b
}



console.log("divide before");
// console.log(divide(10,0))



// try {
//     console.log(divide(10, "abc"));

// } catch (error) {

//     console.log(error.message);

// }


console.log(divide(10, "abc"));


console.log("divide after");