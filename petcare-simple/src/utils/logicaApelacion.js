// logicaApelacion.js
// Aca vive toda la logica del sistema, separada de los componentes visuales.

// Clase 4 - Estructura switch:
// devuelve el rango de peso esperado segun la especie del animal.
export function obtenerRangoPeso(especie) {
  switch (especie) {
    case 'perro':
      return { min: 3, max: 40 };
    case 'gato':
      return { min: 2, max: 8 };
    default:
      return { min: 0.1, max: 15 };
  }
}

// Clase 6 - Funcion con parametros que retorna un valor.
// Clase 3 - Estructuras condicionales simples, compuestas y anidadas.
// Clase 4 - Operadores logicos && y ||.
// Decide si el animal puede ser apelado o no, y por que.
export function evaluarApelacion({ especie, peso, vacunas, salud }) {
  const rango = obtenerRangoPeso(especie);
  const pesoNum = parseFloat(peso);

  // Condicional anidada: primero se descartan los motivos de rechazo mas graves
  if (salud === 'grave') {
    return { apto: false, motivo: 'el animal esta en estado de salud grave' };
  } else if (vacunas === 'no') {
    return { apto: false, motivo: 'no tiene las vacunas al dia' };
  } else if (pesoNum < rango.min || pesoNum > rango.max) {
    // Operador logico || : con que una de las dos condiciones se cumpla, ya no entra en rango
    return { apto: false, motivo: `el peso no esta dentro del rango esperado (${rango.min} a ${rango.max} kg)` };
  } else if (vacunas === 'si' && salud === 'sano') {
    // Operador logico && : las dos condiciones se tienen que cumplir a la vez
    return { apto: true, motivo: 'cumple con todos los requisitos' };
  }

  return { apto: true, motivo: 'cumple con los requisitos minimos' };
}

// Clase 5 - Estructura repetitiva for + acumulador.
// Cuenta cuantos animales de la lista quedaron aptos.
export function contarAptos(lista) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].apto) {
      contador = contador + 1;
    }
  }
  return contador;
}

// Clase 5 - Estructura repetitiva while + acumulador.
// Calcula el peso promedio de los animales apelados.
export function calcularPesoPromedio(lista) {
  let suma = 0;
  let i = 0;

  while (i < lista.length) {
    suma += parseFloat(lista[i].peso);
    i++;
  }

  return lista.length > 0 ? (suma / lista.length).toFixed(1) : 0;
}

// Clase 7 - Clase Date y clase Math de JavaScript.
// Genera un id unico para cada apelacion.
export function generarId() {
  return Date.now() + '-' + Math.floor(Math.random() * 1000);
}

// Clase 7 - Clase String de JavaScript.
// Deja el nombre con la primera letra en mayuscula.
export function formatearNombre(nombre) {
  const limpio = nombre.trim();
  return limpio.charAt(0).toUpperCase() + limpio.slice(1).toLowerCase();
}

// Clase 7 - Clase Date de JavaScript.
// Arma la hora actual en formato HH:MM:SS, agregando un cero adelante
// cuando el numero tiene un solo digito (String - padStart).
export function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  return `${horas}:${minutos}:${segundos}`;
}