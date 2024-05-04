// Variables para almacenar los datos
let habitaciones = [];
let tiposHabitaciones = [];
let reservas = [];

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        return response.json();
      })
      .then((data) => {
          habitaciones = data.rooms.map((room) => ({
          number: room.number,
          type: room.roomTypeId,
          pricePerNight: room.priceNight,
          available: room.availability,
        }));
        tiposHabitaciones = data.roomTypes;
        console.log("Habitaciones:", habitaciones);
        console.log("Tipos de Habitaciones:", tiposHabitaciones);
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

// Función para verificar la disponibilidad de habitaciones
function verificarDisponibilidad(cantidadPersonas) {
  return habitaciones.filter((habitacion) => {
    const tipoHabitacion = tiposHabitaciones.find(
      (tipo) => tipo.id === habitacion.type
    );
    return (
      tipoHabitacion.capacity >= cantidadPersonas && habitacion.available 
    );
  });
}

// Función para realizar una reserva
function reservarHabitacion() {
  const cantidadPersonas = parseInt(prompt("¿Cuántas personas se alojarán?"));
  const habitacionesDisponibles = verificarDisponibilidad(cantidadPersonas);

  if (habitacionesDisponibles.length === 0) {
    console.log("Lo sentimos, no hay habitaciones disponibles.");
    return;
  }

  console.log("Habitaciones disponibles:");
  habitacionesDisponibles.forEach((habitacion) => {
    const tipoHabitacion = tiposHabitaciones.find(
      (tipo) => tipo.id === habitacion.type
    );
    console.log(
      `Habitación ${habitacion.number} (${tipoHabitacion.name}): $${habitacion.pricePerNight} por noche`
    );
  });

  const numeroHabitacion = parseInt(prompt("Ingrese el número de habitación:"));
  const habitacionSeleccionada = habitacionesDisponibles.find(
    (habitacion) => habitacion.number === numeroHabitacion
  );

  if (!habitacionSeleccionada) {
    console.log("El número de habitación ingresado no es válido.");
    return;
  }

  const fechaInicio = new Date(prompt("Ingrese la fecha de inicio (YYYY-MM-DD):"));
  const fechaFin = new Date(prompt("Ingrese la fecha de fin (YYYY-MM-DD):"));

  const nombreCompleto = prompt("Ingrese su nombre completo:").toLowerCase();

  const reserva = {
    numero: reservas.length + 1,
    habitacion: numeroHabitacion,
    fechaInicio,
    fechaFin,
    nombreCompleto,
    cantidadPersonas,
  };

  reservas.push(reserva);
  habitacionSeleccionada.available = false;

  console.log("Reserva exitosa. Detalles de la reserva:", reserva);
}

// Lógica principal
cargarYMostrarData()
  .then(() => {
    reservarHabitacion();
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });