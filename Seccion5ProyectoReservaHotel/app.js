// fetch('./data.json')
// .then(response => response.json())
// .then(data => console.log(data))

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
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

const bookings = [];
// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    const userInput = prompt(
      "Ingrese el numero de habitacion a reservar: " +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${
              roomTypes.find((type) => type.id === room.roomTypeId).name
            })`;
          })
          .join(", ")
    );
    let idBooking = 0;
    const nameUSer = prompt(
      "Indica el nombre del propietario de la reserva"
    ).toLowerCase();
    const startDate = prompt("Indica la fecha de llegada");
    const endDate = prompt("Indica la fecha de salida");
    const numberOfGuest = prompt("Indica la cantidad de huespedes");
    const newReservation = Object.assign(
      {},
      {
        idBooking: ++idBooking,
        nameUSer,
        startDate,
        endDate,
        numberOfGuest,
        userInput
      }
    );
    bookings.push(newReservation);
    bookings.map((room)=>{
        return rooms.find((number)=>number.number === room.number).availability;
    })
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

