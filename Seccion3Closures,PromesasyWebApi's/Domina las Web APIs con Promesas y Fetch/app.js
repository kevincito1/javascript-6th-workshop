const timeUser = Number(prompt("Indica los segundos en los que quieres que se muestre el mensaje en pantalla"))
let timeSetTimeOut = timeUser * 1000


setTimeout(() => {
    alert(`Hola esta orden se ha ejecutado en ${timeUser} segundos, como lo solicitaste`)
}, timeSetTimeOut)

function getDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
            )
            reject("error: 404")
        }, timeSetTimeOut)
    })

}

getDatos().then(data => console.log(data)).catch(err => console.log(err))



