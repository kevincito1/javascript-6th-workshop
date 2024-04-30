let count = 0;
let flag = true;
while(flag){
    let numberUser = Number(prompt("Ingresa el número que quieres sumar"));
    function increment(num){
        return function suma(num2){
            return num + num2
        }
    }
    count=increment(numberUser)(count)
    flag = confirm("Quieres añadir otro número a la suma")
}
console.log(count)

