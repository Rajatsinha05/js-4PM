
function divide() {
     console.log("divided");
    let a=document.getElementById("num1").value
    let b=document.getElementById("num2").value
    document.getElementById("ans").innerHTML=`divide ${a} ${b} = ${a/b}` 
}


document.getElementById("divide").addEventListener("click",divide)
