console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

//1 y 2. Al llamar a las funciones declaradas estas funcionan sin problema, debido a que el hoisting de estas es de manera global, en cuanto a las funciones expresadas, estas arroja el error del catch, ya que el hoisting de estas empieza a aplicar desde donde estan declaradas.
//3 Las funciones declarativas las sube al principio del hoisting, las funciones expresivas no modifican su hoisting y solo se puede acceder a ellas después de haber sido declaradas.