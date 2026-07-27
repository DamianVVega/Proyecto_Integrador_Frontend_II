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

  // Validamos datos obligatorios con if / else
  if (nombreMascota == "" || raza == "" || edadTexto == "" || pesoTexto == "" || propietario == "") {
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
  // Borramos los campos del formulario
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