function crearSumador(num){
   return function suma(num2){
        return num + num2
    }
}

const sumarCinco = crearSumador(12)(8)

console.log(sumarCinco)