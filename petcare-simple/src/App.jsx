import { useState, useEffect } from 'react';
import FormularioApelacion from './components/FormularioApelacion';
import TablasAnimales from './components/TablasAnimales';
import { evaluarApelacion, generarId, formatearNombre, obtenerHoraActual } from './utils/logicaApelacion';

// Clase 2 - Variables: datos de ejemplo, perros que ya fueron aceptados
const PERROS_ACEPTADOS = [
  { id: 1, nombre: 'Rocky', peso: 18 },
  { id: 2, nombre: 'Toby', peso: 12 },
  { id: 3, nombre: 'Firulais', peso: 22 },
];

function App() {
  // Clase 12/13 - useState: guarda la lista de animales que fueron apelados
  const [apelaciones, setApelaciones] = useState([]);

  // Clase 7 - Clase Date: guarda la hora actual para mostrarla en pantalla
  const [horaActual, setHoraActual] = useState(obtenerHoraActual());

  // useEffect: actualiza la hora cada 1 segundo mientras el componente esta montado
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(obtenerHoraActual());
    }, 1000);

    // se limpia el intervalo cuando el componente se desmonta, para no dejarlo corriendo
    return () => clearInterval(intervalo);
  }, []);

  // Clase 6 - Funcion con parametros
  function agregarApelacion(datosFormulario) {
    const resultado = evaluarApelacion(datosFormulario);

    const nuevaApelacion = {
      id: generarId(),
      nombre: formatearNombre(datosFormulario.nombre),
      peso: datosFormulario.peso,
      apto: resultado.apto,
      motivo: resultado.motivo,
    };

    // Clase 14 - Operador spread: agrega el nuevo animal sin modificar el arreglo original
    // (una alternativa mas basica hubiera sido usar apelaciones.push(nuevaApelacion))
    setApelaciones([...apelaciones, nuevaApelacion]);
  }

  return (
    <div className="contenedor">
      <h1>Refugio PetCare</h1>
      <p className="subtitulo">Formulario de apelacion para adopcion</p>
      <p className="reloj">Hora actual: {horaActual}</p>

      {/* Clase 14 - Componentes: paso de props (datos y funciones) */}
      <FormularioApelacion onApelar={agregarApelacion} />
      <TablasAnimales apelaciones={apelaciones} aceptados={PERROS_ACEPTADOS} />
    </div>
  );
}

export default App;