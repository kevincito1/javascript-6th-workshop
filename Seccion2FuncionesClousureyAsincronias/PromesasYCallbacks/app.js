let saludo = "Hola soy una promesa";
let saludoTarde = "Soy un callback después de la promesa";


function manejarAsincronia (callback){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(callback);
            reject({error: 404});
        }, 1000);
    });
}
manejarAsincronia(()=> console.log("¡Promesa cumplida y callback ejecutado!")).then((callback)=>callback()).catch((respuesta)=>{console.log(respuesta.error)})

//1. Al cambiar el tiempo de ejecución, solo se modifica el tiempo para aparecer en pantalla, pero se sigue ejecutando en el orden indicado.
//2. Si la promesa no se completa esta ira al catch y se ejecutura lo indicado en este
//3. Si, es posible.