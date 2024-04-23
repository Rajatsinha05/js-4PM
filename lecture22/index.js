


const handleData = (e) => {
    e.preventDefault()

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let number = document.querySelector("#number").value;
    const validUsername = /^[A-Za-z]{3,16}$/;
    const isStrongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

    let isValidNumber =  /^[6789]\d{9}$/
    if (!(validUsername.test(username))) {
        alert("Please enter a valid username")
        return
    }

    if (!(isStrongPassword.test(password))) {
        alert("Please enter a  valid password")
        return
    }



    if (!isValidNumber.test(number)) {

        alert("Please enter a valid number")
        return

    }


}



document.querySelector("form").addEventListener("submit", handleData)