// console.log("Mensaje 1: Inmediatamente")

// setTimeout(()=>{
//     console.log("Mensaje 2: Con timeout de 0 segundos")
// },0);

// setTimeout(()=>{
//     console.log("Mensaje 3: Con timeout de 1 segundo")
// },1)

// El setTimeOut con retardo 0, no se muestra antes que el console.log directo, se debe a que en el event loop, todas entran al callstack al mismo tiempo, envueltas en una funcion anonima, luego se dividen las tareas, segun su importancia, primero resolviendosen las tareas, seguidas de las microtareas y luego las macrotareas, al setTimeOut ser una macrotarea, no importa si su tiempo de ejecución es 0, ya que en el event loop se resolvera después de las tareas y microtareas.

setTimeout(() => {
  alert(
    "Teniendo como base este codigo indica en cada uno de los casos cuál crees que sera el orden en el que se impriman en pantalla."
  );
}, 1);

document.write(
  "console.log('Inicio del script');<br><br>setTimeout(() => {<br>console.log('Primer setTimeout');<br>}, 0);<br><br>setTimeout(() => {<br>console.log('Segundo setTimeout');<br>}, 0);<br><br>Promise.resolve('Promesa resuelta').then(console.log);<br><br>console.log('Fin del script');"
);
setTimeout(() => {
  const firstLine = prompt(
    "En que posición crees que se imprimira este console.log()\nconsole.log('Inicio del script')\n1\n2\n3\n4\n5"
  );
  const secondLine = prompt(
    "En que posición crees que se imprimira este console.log()\nsetTimeout(() => {\n>console.log('Primer setTimeout');\n>}, 0);\n1\n2\n3\n4\n5"
  );
  const thirdLine = prompt(
    "En que posición crees que se imprimira este console.log()\nsetTimeout(() => {\n>console.log('Segundo setTimeout');\n>}, 0);\n1\n2\n3\n4\n5"
  );
  const forthLine = prompt(
    "En que posición crees que se imprimira este console.log()\nPromise.resolve('Promesa resuelta').then(console.log);\n1\n2\n3\n4\n5"
  );
  const fifthLine = prompt(
    "En que posición crees que se imprimira este console.log()\nconsole.log('Fin del script');\n1\n2\n3\n4\n5"
  );
  let correctAnswer = 0;
  let wrongAnswer = 0;
  let explications = [];

  if (firstLine === "1") {
    correctAnswer++;
  } else {
    if (firstLine !== "1") {
      const explication1 =
        "Este es un console.log() que se ubica al inicio del hoisting y al no estar en un scope local o de bloque, sera el 1° en imprimirse";
      explications.push(explication1);
    }
    wrongAnswer++;
  }

  if (secondLine === "4") {
    correctAnswer++;
  } else {
    if (secondLine !== "4") {
      const explication2 =
        "Este console.log(), se encuentra dentro de un setTimeOut, al entrar el codigo al callstack en su función anonima, este se desestructura en tareas, microtareas y macrotareas, los setTimeOut son una macrotarea, por ende primero deben resolverse primero las tareas, luego las microtareas y por último las macrotareas, en caso de haber más de una macrotarea, se resolvera primero la que haya sido declarada con anterioridad en el hoisting, en este caso se imprimira de 4°";
        explications.push(explication2);
    }
    wrongAnswer++;
  }

  if (thirdLine === "5") {
    correctAnswer++;
  } else {
    if (thirdLine !== "5") {
      const explication3 =
        "Este console.log(), se encuentra dentro de un setTimeOut, al entrar el codigo al callstack en su función anonima, este se desestructura en tareas, microtareas y macrotareas, los setTimeOut son una macrotarea, por ende primero deben resolverse primero las tareas, luego las microtareas y por último las macrotareas, en caso de haber más de una macrotarea, se resolvera primero la que haya sido declarada con anterioridad en el hoisting, en este caso se imprimira de 5°";
        explications.push(explication3)
    }
    wrongAnswer++;
  }

  if (forthLine === "3") {
    correctAnswer++;
  } else {
    if (forthLine !== "3") {
      const explication4 =
        "Este console.log(), se encuentra dentro de un Promise, al entrar el codigo al callstack en su función anonima, este se desestructura en tareas, microtareas y macrotareas, las promesas son una microtarea, por ende primero deben resolverse primero las tareas y luego las microtareas, en caso de haber más de una microtarea, se resolvera primero la que haya sido declarada con anterioridad en el hoisting, en este caso se imprimira de 3°";
        explications.push(explication4)
    }
    wrongAnswer++;
  }

  if (fifthLine === "2") {
    correctAnswer++;
  } else {
    if (fifthLine !== "2") {
      const explication5 =
        "Este es un console.log() que se ubica al final del hoisting y al no estar en un scope local o de bloque, sera el 2° en imprimirse, ya que al ser una tarea, se resuelve antes que las microtareas y las macrotareas, pero sera después del primer console.log(), que se encuentra en el tope del hoisting";
        explications.push(explication5)
    }
    wrongAnswer++;
  }
  console.log(explications)
  if (correctAnswer === 5) {
    alert("Felicitaciones, tienes claro el funcionamiento del event loop");
  } else {
    alert(explications.join("\n"));
  }
}, 2);
