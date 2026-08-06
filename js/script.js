// Funcion que controla que seccion se muestra (navegacion tipo SPA)
// Se ejecuta al hacer click en cualquier link del menu
function mostrarSeccion(idSeccion) {
  // Ocultamos todas las secciones quitando la clase "activa"
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach(function (seccion) {
    seccion.classList.remove("activa");
  });

  // Mostramos solo la seccion pedida
  document.getElementById(idSeccion).classList.add("activa");

  // Marcamos el link del menu correspondiente como activo (estilo visual)
  let links = document.querySelectorAll(".menu a");
  links.forEach(function (link) {
    link.classList.remove("activo");
  });

  let linkActivo = document.querySelector('.menu a[href="#' + idSeccion + '"]');
  if (linkActivo) {
    linkActivo.classList.add("activo");
  }
}

// Al cargar la pagina, mostramos la seccion inicio y marcamos su link
document.addEventListener("DOMContentLoaded", function () {
  mostrarSeccion("inicio");
});

// Funcion necesaria porque el boton del HTML llama a registrarMascota()
function registrarMascota() {
  // Leemos los datos escritos en el formulario
  let nombreMascota = document.getElementById("mascotaNombre").value;
  let especie = document.getElementById("mascotaEspecie").value;
  let raza = document.getElementById("mascotaRaza").value;
  let edadTexto = document.getElementById("mascotaEdad").value;
  let pesoTexto = document.getElementById("mascotaPeso").value;

  // Leemos los datos del propietario
  let propietario = document.getElementById("propietarioNombre").value;
  let telefono = document.getElementById("propietarioTelefono").value;
  let direccion = document.getElementById("propietarioDireccion").value;

  // Validamos datos obligatorios con if y ||
  if (nombreMascota === "" || raza === "" || edadTexto === "" || pesoTexto === "" || propietario === "") {
    document.getElementById("resultadoRegistro").innerHTML =
      "Debe completar nombre de mascota, raza, edad, peso y propietario.";
  } else {
    // Convertimos edad y peso a numeros
    let edad = parseInt(edadTexto);
    let peso = parseFloat(pesoTexto);

    // Mostramos el resultado en pantalla
    document.getElementById("resultadoRegistro").innerHTML =
      "Mascota registrada correctamente.<br>" +
      "Nombre: " + nombreMascota + "<br>" +
      "Especie: " + especie + "<br>" +
      "Raza: " + raza + "<br>" +
      "Edad: " + edad + " años<br>" +
      "Peso: " + peso + " kg<br>" +
      "Propietario: " + propietario + "<br>" +
      "Telefono: " + telefono + "<br>" +
      "Direccion: " + direccion;
  }
}

// Funcion necesaria porque el boton Limpiar del HTML la llama
function limpiarRegistro() {
  // Borramos los campos de la mascota
  document.getElementById("mascotaNombre").value = "";
  document.getElementById("mascotaEspecie").value = "perro";
  document.getElementById("mascotaRaza").value = "";
  document.getElementById("mascotaEdad").value = "";
  document.getElementById("mascotaPeso").value = "";

  // Borramos los datos del propietario
  document.getElementById("propietarioNombre").value = "";
  document.getElementById("propietarioTelefono").value = "";
  document.getElementById("propietarioDireccion").value = "";

  // Borramos el resultado
  document.getElementById("resultadoRegistro").innerHTML = "";
}

// Funcion para registrar vacuna
function registrarVacuna() {
  // Leemos los datos del formulario de vacunas
  let mascota = document.getElementById("vacunaMascota").value;
  let tipoVacuna = document.getElementById("tipoVacuna").value;
  let aplicada = document.getElementById("vacunaAplicada").value;
  let fecha = document.getElementById("fechaVacuna").value;

  // Variable para mostrar el nombre de la vacuna
  let nombreVacuna = "";

  // Usamos switch para elegir el nombre de la vacuna
  switch (tipoVacuna) {
    case "rabia":
      nombreVacuna = "Rabia";
      break;

    case "multiple":
      nombreVacuna = "Multiple";
      break;

    case "desparasitacion":
      nombreVacuna = "Desparasitacion";
      break;

    default:
      nombreVacuna = "No especificada";
      break;
  }

  // Validamos campos obligatorios
  if (mascota === "" || fecha === "") {
    document.getElementById("resultadoVacuna").innerHTML =
      "Debe completar mascota y fecha.";
  } else {
    // Verificamos si la vacuna fue aplicada
    if (aplicada === "si") {
      document.getElementById("resultadoVacuna").innerHTML =
        "Vacuna registrada.<br>" +
        "Mascota: " + mascota + "<br>" +
        "Vacuna: " + nombreVacuna + "<br>" +
        "Estado: aplicada<br>" +
        "Proxima fecha: " + fecha;
    } else {
      document.getElementById("resultadoVacuna").innerHTML =
        "Vacuna pendiente.<br>" +
        "Mascota: " + mascota + "<br>" +
        "Vacuna: " + nombreVacuna + "<br>" +
        "Proxima fecha: " + fecha;
    }
  }
}

// Funcion para agendar consulta
function agendarConsulta() {
  // Leemos los datos del formulario de consultas
  let mascota = document.getElementById("consultaMascota").value;
  let fecha = document.getElementById("consultaFecha").value;
  let hora = document.getElementById("consultaHora").value;
  let motivo = document.getElementById("consultaMotivo").value;

  // Variable para mostrar el motivo en texto
  let textoMotivo = "";

  // Usamos switch para evaluar el motivo
  switch (motivo) {
    case "control":
      textoMotivo = "Control general";
      break;

    case "vacuna":
      textoMotivo = "Vacunacion";
      break;

    case "urgencia":
      textoMotivo = "Urgencia";
      break;

    default:
      textoMotivo = "No especificado";
      break;
  }

  // Validamos campos obligatorios
  if (mascota === "" || fecha === "" || hora === "") {
    document.getElementById("resultadoConsulta").innerHTML =
      "Debe completar mascota, fecha y hora.";
  } else {
    // Mostramos el resultado en pantalla
    document.getElementById("resultadoConsulta").innerHTML =
      "Consulta agendada correctamente.<br>" +
      "Mascota: " + mascota + "<br>" +
      "Fecha: " + fecha + "<br>" +
      "Hora: " + hora + "<br>" +
      "Motivo: " + textoMotivo;
  }
}

// Funcion para controlar el peso de la mascota
function controlarPeso() {
  // Leemos los datos del formulario de peso
  let mascota = document.getElementById("pesoMascota").value;
  let pesoActualTexto = document.getElementById("pesoActual").value;
  let pesoRecomendadoTexto = document.getElementById("pesoRecomendado").value;

  // Validamos que los campos no esten vacios
  if (mascota === "" || pesoActualTexto === "" || pesoRecomendadoTexto === "") {
    document.getElementById("resultadoPeso").innerHTML =
      "Debe completar mascota, peso actual y peso recomendado.";
  } else {
    // Convertimos los pesos a numeros decimales
    let pesoActual = parseFloat(pesoActualTexto);
    let pesoRecomendado = parseFloat(pesoRecomendadoTexto);

    // Comparamos el peso actual con el peso recomendado
    if (pesoActual > pesoRecomendado) {
      let diferencia = pesoActual - pesoRecomendado;

      document.getElementById("resultadoPeso").innerHTML =
        mascota + " esta por encima del peso recomendado.<br>" +
        "Peso actual: " + pesoActual + " kg<br>" +
        "Peso recomendado: " + pesoRecomendado + " kg<br>" +
        "Diferencia: " + diferencia + " kg";
    } else if (pesoActual < pesoRecomendado) {
      let diferencia = pesoRecomendado - pesoActual;

      document.getElementById("resultadoPeso").innerHTML =
        mascota + " esta por debajo del peso recomendado.<br>" +
        "Peso actual: " + pesoActual + " kg<br>" +
        "Peso recomendado: " + pesoRecomendado + " kg<br>" +
        "Diferencia: " + diferencia + " kg";
    } else {
      document.getElementById("resultadoPeso").innerHTML =
        mascota + " tiene el peso recomendado.<br>" +
        "Peso actual: " + pesoActual + " kg<br>" +
        "Peso recomendado: " + pesoRecomendado + " kg";
    }
  }
}
// Funcion para registrar el historial clinico de la mascota
function registrarHistorial() {
  // Leemos los datos del formulario de historial clinico
  let mascota = document.getElementById("clinicoMascota").value;
  let estado = document.getElementById("clinicoEstado").value;
  let observacion = document.getElementById("clinicoObservacion").value;

  // Validamos campos obligatorios
  if (mascota === "" || observacion === "") {
    document.getElementById("resultadoClinico").innerHTML =
      "Debe completar mascota y observaciones clinicas.";
    return;
  }

  // Variable para mostrar el estado de salud en texto
  let textoEstado = "";

  // Usamos switch para elegir el texto del estado
  switch (estado) {
    case "sano":
      textoEstado = "Sano";
      break;

    case "tratamiento":
      textoEstado = "En tratamiento";
      break;

    case "grave":
      textoEstado = "Grave";
      break;

    default:
      textoEstado = "No especificado";
      break;
  }

  // Mostramos el resultado en pantalla
  document.getElementById("resultadoClinico").innerHTML =
    "Historial clinico registrado.<br>" +
    "Mascota: " + mascota + "<br>" +
    "Estado de salud: " + textoEstado + "<br>" +
    "Observaciones: " + observacion;
}

// Funcion para verificar si una mascota esta en condiciones de ser adoptada
function verificarAdopcion() {
  // Leemos los datos del formulario de adopcion
  let nombre = document.getElementById("adopNombre").value;
  let edadTexto = document.getElementById("adopEdad").value;
  let vacunas = document.getElementById("adopVacunas").value;
  let salud = document.getElementById("adopSalud").value;

  // Validamos campos obligatorios
  if (nombre === "" || edadTexto === "") {
    document.getElementById("resultadoAdopcion").innerHTML =
      "Debe completar nombre y edad de la mascota.";
    return;
  }

  let edad = parseInt(edadTexto);

  // Vamos acumulando los motivos que impiden o condicionan la adopcion
  let apta = true;
  let motivos = [];

  if (salud === "grave") {
    apta = false;
    motivos.push("su estado de salud es grave y necesita tratamiento antes de ser adoptada");
  } else if (salud === "tratamiento") {
    motivos.push("esta en tratamiento, se recomienda seguimiento veterinario");
  }

  if (vacunas === "no") {
    apta = false;
    motivos.push("no tiene las vacunas al dia");
  }

  // Mostramos el resultado segun si es apta o no
  if (apta) {
    document.getElementById("resultadoAdopcion").innerHTML =
      nombre + " esta en condiciones de ser adoptada.<br>" +
      "Edad: " + edad + " años<br>" +
      (motivos.length > 0
        ? "Observacion: " + motivos.join(", ") + "."
        : "Sin observaciones.");
  } else {
    document.getElementById("resultadoAdopcion").innerHTML =
      nombre + " todavia no puede ser adoptada.<br>" +
      "Motivo: " + motivos.join(", ") + ".";
  }
}

// Funcion para limpiar el formulario de adopcion
function limpiarAdopcion() {
  document.getElementById("adopNombre").value = "";
  document.getElementById("adopEdad").value = "";
  document.getElementById("adopVacunas").value = "si";
  document.getElementById("adopSalud").value = "sano";
  document.getElementById("resultadoAdopcion").innerHTML = "";
}

// Funcion para cargar razas segun la especie elegida
function cargarRazas() {
  // Leemos la especie seleccionada
  let especie = document.getElementById("buscarEspecie").value;

  // Seleccionamos el campo de razas
  let raza = document.getElementById("buscarRaza");

  // Cargamos razas segun la especie
  if (especie == "perro") {
    raza.innerHTML =
      '<option value="labrador">Labrador Retriever</option>' +
      '<option value="pastor">Pastor Aleman</option>' +
      '<option value="beagle">Beagle</option>' +
      '<option value="mestizo">Mestizo</option>';
  } else if (especie == "gato") {
    raza.innerHTML =
      '<option value="siames">Gato Siames</option>' +
      '<option value="persa">Gato Persa</option>' +
      '<option value="mestizo">Mestizo</option>';
  } else {
    raza.innerHTML =
      '<option value="perico">Perico</option>' +
      '<option value="rata">Rata de laboratorio</option>';
  }
}

// Funcion para buscar mascotas por especie y raza
function buscarMascota() {
  // Leemos los valores elegidos por el usuario
  let especie = document.getElementById("buscarEspecie").value;
  let raza = document.getElementById("buscarRaza").value;

  // Recorremos todas las tarjetas de la seccion busqueda
  let tarjetas = document.querySelectorAll("#busqueda .tarjeta");
let encontrados = 0;

tarjetas.forEach(function (tarjeta) {
  // Leemos los datos guardados en cada tarjeta
  let dataEspecie = tarjeta.dataset.especie;
  let dataRaza = tarjeta.dataset.raza;

  // La especie y la raza deben coincidir exactamente
  let coincideEspecie = dataEspecie == especie;
  let coincideRaza = dataRaza == raza;

  if (coincideEspecie && coincideRaza) {
    tarjeta.style.display = "block";
    encontrados++;
  } else {
    tarjeta.style.display = "none";
  }
});

// Mostramos un mensaje segun la cantidad de resultados
if (encontrados == 0) {
  document.getElementById("resultadoBusqueda").innerHTML =
    "No se encontraron mascotas con esa combinacion de especie y raza.";
} else {
  document.getElementById("resultadoBusqueda").innerHTML =
    "Se encontraron " + encontrados + " resultado(s).";
  }
}