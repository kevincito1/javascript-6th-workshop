
//#### Ejercicio 1: El quiz del Scope.



alert("Vamos a conocer el funcionamientos del scope y el hoisting, para eso te daremos varios ejm de variables y funciones y responderas Si o No es posible acceder a sus valores.")
document.write("//Global Scope<br>'let globalVariable = 'soy una variable global.';'<br>function testScope() {<br>// 'Function Scope<br>'var functionVariable='soy una variable local';'<br><br>if (true) {<br>//Block Scope<br>'let blockVariable = 'soy una variable de bloque.';'<br>console.log('Dentro del bloque:', blockVariable);<br>}<br>console.log('Dentro de la función:', functionVariable);<br>}<br>console.log('Fuera de la función:', globalVariable);<br>testScope()")
 
setTimeout(()=>{
    let globalVariableScopeGlobal =confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'globalVariable' de manera global, osea fuera de la función?")
    let explGlobalVariableScopeGlobal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(globalVariableScopeGlobal === true){
       alert("Correcto: Es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la  definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }else{
       alert("Error: Si es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la  definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }
   let globalVariableScopeLocal =confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'globalVariable' de manera local, osea dentro de la función?")
   let explGlobalVariableScopeLocal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
   if(globalVariableScopeLocal === true){
    alert("Correcto: Es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }else{
    alert("Error: Si es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }
   let globalVariableScopeBlock =confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'globalVariable' de manera de bloque, osea dentro del if?")
   let explGlobalVariableScopeBlock = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
   if(globalVariableScopeBlock === true){
    alert("Correcto: Es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la  definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }else{
    alert("Error: Si es posible acceder al valor de la variable ya que la estamos definiendo antes de acceder a su valor, la definimos en la parte superior del hoisting y es reconocible en todo momento del codigo")
   }   
},"2000")
 


setTimeout(()=>{
    let functionVariableScopeGlobal = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'functionVariable' de manera global, osea fuera de la función?")
    let expFunctionVariableScopeGlobal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(functionVariableScopeGlobal === true){
        alert("Error: No es posible acceder al valor de la variable ya que la estamos definiendo dentro de un ambito local esta variable pertenece a la función donde fue creada.")
    }else{
        alert("Correcto:No es posible acceder al valor de la variable ya que la estamos accediendo a ella de manera global y esta solo existe de manera local en el ambito de la función donde fue creada")
    }
    let functionVariableScopeLocal = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'functionVariable' de manera local, osea dentro de la función?")
    let expFunctionVariableScopeLocal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(functionVariableScopeLocal===true){
        alert("Correcto:Es posible acceder al valor de la variable ya que esta se encuentra en el ambito en el que fue creada")
    }else{
        alert("Error:Si es posible acceder a su valor ya que el ambito en el que se encuentra es en el cual fue creada.")
    }
    let functionVariableScopeBlock = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'functionVariable' de manera de bloque, osea dentro del if?")
    let expFunctionVariableScopeBlock = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(functionVariableScopeBlock===true){
        alert("Correcto:Es posible acceder al valor de la variable ya que esta se encuentra en el ambito en el que fue creada")
    }else{
        alert("Error:Si es posible acceder a su valor ya que el ambito en el que se encuentra es en el cual fue creada.")
    }
},"4000")

setTimeout(()=>{
    let blockVariableScopeGlobal = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'blockVariable' de manera global, osea fuera de la función?")
    let expBlockVariableScopeGlobal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(blockVariableScopeGlobal === true){
        alert("Error: No es posible acceder al valor de la variable ya que la estamos definiendo dentro de un ambito de bloque esta variable pertenece al bloque if donde fue creada.")
    }else{
        alert("Correcto:No es posible acceder al valor de la variable ya que la estamos accediendo de manera global y esta solo existe de manera de bloque en el ambito del if donde fue creada")
    }
    let blockVariableScopeLocal = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'blockVariable' de manera local, osea dentro de la función?")
    let expBlockVariableScopeLocal = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(blockVariableScopeLocal === true){
        alert("Error: No es posible acceder al valor de la variable ya que la estamos definiendo dentro de un ambito de bloque esta variable pertenece al bloque if donde fue creada.")
    }else{
        alert("Correcto:No es posible acceder al valor de la variable ya que la estamos accediendo de manera local y esta solo existe de manera de bloque en el ambito del if donde fue creada")
    }
    let blockVariableScopeBlock = confirm("Viendo este codigo como esta escrito, es posible acceder al valor de 'blockVariable' de manera de bloque, osea dentro del if?")
    let expBlockVariableScopeBlock = prompt("Teniendo en cuenta tu respuesta anterior explica porque Si o porque No, según tu respuesta")
    if(blockVariableScopeBlock===true){
        alert("Correcto:Es posible acceder al valor de la variable ya que esta se encuentra en el ambito en el que fue creada, osea dentro del if")
    }else{
        alert("Error:Si es posible acceder a su valor ya que el ambito en el que se encuentra es en el cual fue creada, osea dentro del if")
    }
},"6000")
