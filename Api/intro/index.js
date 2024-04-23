






const getData = async () => {

    try {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

getData()



const get = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err);
        })
}
