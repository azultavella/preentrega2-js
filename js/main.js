// Clase Turno
class Turno {
    constructor(nombreApellido, telefono, correo, fecha) {
        this.nombreApellido = nombreApellido;
        this.telefono = telefono;
        this.correo = correo;
        this.fecha = fecha;
    }
}

// Array para almacenar los turnos
const turnos = [];

// Función para obtener un turno
function obtenerTurno() {
    while (true) {
        const nombreApellido = prompt("Ingrese su nombre y apellido:");
        const telefono = prompt("Ingrese su teléfono:");
        const correo = prompt("Ingrese su correo electrónico:");
        const fecha = prompt("Ingrese la fecha de turno (DD/MM/AAAA):");

      // Función de orden superior para verificar si el turno ya fue asignado
        const turnoYaAsignado = turnos.some((t) => t.fecha === fecha);
    
        if (turnoYaAsignado) {
            alert("El turno para esa fecha ya fue asignado.");
        } else {
            const turno = new Turno(nombreApellido, telefono, correo, fecha);
            turnos.push(turno);
            alert("¡Turno asignado exitosamente!");
        }
    
        const continuar = prompt("¿Desea obtener otro turno? (S/N)").toLowerCase();
        if (continuar !== "s") {
            break;
        }
    }
}

// Función para buscar un turno por fecha
function buscarTurnoPorFecha(fecha) {
    return turnos.find((t) => t.fecha === fecha);
}

// Llamada a la función principal
obtenerTurno();
