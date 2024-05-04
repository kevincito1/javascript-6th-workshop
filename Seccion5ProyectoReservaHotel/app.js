let bookings = [];
let id = 0;

// Ruta del archivo data.json
const url = "./data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          rooms = data.rooms;
          roomTypes = data.roomTypes;
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 0);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    let flag = !false;
    while (flag) {
      let choice = prompt(
        "Hola Bienvenido al Hotel Online, que deseas hacer?\n1. Ver habitaciones Disponibles\n2. Hacer una Reserva\n3. Consultar Reservas\n4. Editar Reserva\n 5. Cancelar Reserva"
      );
      switch (choice) {
        case "1":
          let messageAvailabilityRooms = "";
          rooms.forEach((room) => {
            if (room.availability) {
              messageAvailabilityRooms += `\nHabitación: ${room.number} (${
                roomTypes.find((type) => type.id === room.roomTypeId).name
              })`;
            } else {
              alert("No quedan habitaciones disponibes");
            }
          });
          alert(
            `Estas son las habitaciones disponibles\n ${messageAvailabilityRooms}`
          );
          flag = !true
          break;
        case "2":
          // Mostrar el contenido de las habitaciones después de cargar los datos
          const userInput = prompt(
            "Ingrese el numero de habitacion a reservar: " +
              rooms
                .map((room) => {
                  return `\nRoom Number: ${room.number} (${
                    roomTypes.find((type) => type.id === room.roomTypeId).name
                  }) ${roomTypes.capacity}`;
                })
                .join(", ")
          );
          const userName = prompt("Nombre de a quien quedara la reserva");
          const startDate = new Date(prompt("Fecha de llegada YYYY/MM/DD"));
          const endDate = new Date(prompt("Fecha de salida YYYY/MM/DD"));
          const numberGuests = Number(prompt("Indica la cantdad de huespedes"));
          const booking = {
            id: ++id,
            userName,
            startDate,
            endDate,
            numberGuests,
            userInput
          }
          bookings.push(booking);
          
          rooms.map((room)=>{
            if((parseInt(userInput) === room.number) && ((roomTypes.find((id)=>id.id === room.roomTypeId).capacity)<=numberGuests)){
               console.log("Entro al if")                                   
            }else{
              console.log("Excede la capacidad")
            }
            // console.log(room)
          })
          

          flag=!true
          break;
      }
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });
  