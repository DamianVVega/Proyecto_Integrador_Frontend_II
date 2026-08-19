import { useState } from 'react';

// Clase 2 - Variables y estructura secuencial: valores iniciales del formulario
const DATOS_INICIALES = {
  nombre: '',
  especie: 'perro',
  peso: '',
  vacunas: 'si',
  salud: 'sano',
};

function FormularioApelacion({ onApelar }) {
  // Clase 12/13 - Hook useState: variable de estado del componente
  const [datos, setDatos] = useState(DATOS_INICIALES);

  // Clase 10/11 - Manejo de eventos y del DOM a traves de JSX (e.target)
  function manejarCambio(e) {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  }

  // Clase 11 - Evento submit del formulario, con e.preventDefault()
  function manejarEnvio(e) {
    e.preventDefault();

    // Clase 3 - Estructura condicional simple: validacion basica de campos vacios
    if (datos.nombre === '' || datos.peso === '') {
      alert('Completa el nombre y el peso del animal.');
      return;
    }

    onApelar(datos);
    setDatos(DATOS_INICIALES);
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <label>Nombre del animal:</label>
      <input type="text" name="nombre" value={datos.nombre} onChange={manejarCambio} />

      <label>Especie:</label>
      <select name="especie" value={datos.especie} onChange={manejarCambio}>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="otro">Otro</option>
      </select>

      <label>Peso (kg):</label>
      <input type="number" step="0.1" name="peso" value={datos.peso} onChange={manejarCambio} />

      <label>Tiene vacunas al dia?</label>
      <select name="vacunas" value={datos.vacunas} onChange={manejarCambio}>
        <option value="si">Si</option>
        <option value="no">No</option>
      </select>

      <label>Estado de salud:</label>
      <select name="salud" value={datos.salud} onChange={manejarCambio}>
        <option value="sano">Sano</option>
        <option value="tratamiento">En tratamiento</option>
        <option value="grave">Grave</option>
      </select>

      <button type="submit">Apelar</button>
    </form>
  );
}

export default FormularioApelacion;