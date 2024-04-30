document.write("//Vars Call<br><br>console.log('Valor de a:', a);<br>console.log('Valor de b:', b);<br>console.log('Valor de c:', c);<br><br><br>// functions call<br><br>console.log('Resultado de funcionDeclarada:', funcionDeclarada());<br>console.log('Resultado de funcionExpresada:', funcionExpresada());<br><br><br>// vars declaration<br><br>var a = 1;<br>let b = 2;<br>const c = 3;<br><br><br>// functions declarations<br><br>function funcionDeclarada() {<br>return 'Función declarada ha sido llamada.';<br>}<br><br>const funcionExpresada = function () {<br>return 'Función expresada ha sido llamada.';<br>};")
setTimeout(()=>{
    alert("Teniendo como base el siguiente codigo vamos a indicar el resultado de cada uno de los console.log()")
},"1")
setTimeout(()=>{
    let firstConsoleLog= prompt("Que crees que pasara en el Primer console.log()\n1. Imprimira el resultado\n2. Error:Undefined\n3. Error:Cannot access before initialization")
    let secondConsoleLog= prompt("Que crees que pasara en el Segundo console.log()\n1. Imprimira el resultado\n2. Error:Undefined\n3. Error:Cannot access before initialization")
    let thirdConsoleLog= prompt("Que crees que pasara en el Tercer console.log()\n1. Imprimira el resultado\n2. Error:Undefined\n3. Error:Cannot access before initialization")
    let fourthConsoleLog= prompt("Que crees que pasara en el Cuarto console.log()\n1. Imprimira el resultado\n2. Error:Undefined\n3. Error:Cannot access before initialization")
    let fifthConsoleLog= prompt("Que crees que pasara en el Quinto console.log()\n1. Imprimira el resultado\n2. Error:Undefined\n3. Error:Cannot access before initialization")
},"2")

setTimeout(()=>{
    alert("En el primer console.log(), tenemos una variable 'var', el resultado sera un 'Undefined', esto debido a que estamos queriendo acceder a su valor antes de declararla y las variables 'var', por defecto tienen el valor Undefined")
    alert("En el segundo y tercer console.log() vamos a tener el mismo resultado que es:'Error:Cannot access before initialization', esto debido a que estamos queriendo acceder a su valor antes de declararla")
    alert("En el cuarto console.log(), tenemos una funcion declarada, el hoisting de estas es de ambito global, igual que su scope, por ende el resultado de esta es que nos imprimira su valor, ya que podemos acceder a su valor antes de declararla")
    alert("En el quinto console.log() va a ocurrir lo mismo que en el segundo y tercer console.log(),'Error:Cannot access before initialization', ya que aunque también es una función, esta es expresada y no declarada y funciona como una variable la cuál no se puede acceder a su valor sin ser declarada anteriormente.")
},"3")











  



  
