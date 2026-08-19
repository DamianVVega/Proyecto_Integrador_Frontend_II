import { contarAptos, calcularPesoPromedio } from '../utils/logicaApelacion';

function TablasAnimales({ apelaciones, aceptados }) {
  // Los recorridos con for/while estan dentro de estas dos funciones (Clase 5)
  const totalAptos = contarAptos(apelaciones);
  const pesoPromedio = calcularPesoPromedio(apelaciones);

  return (
    <div className="tablas">
      <section>
        <h2>Animales en apelacion</h2>
        <p>
          Aptos hasta ahora: {totalAptos} | Peso promedio: {pesoPromedio} kg
        </p>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Peso</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {/* Clase 12 - ES6 map: recorre el arreglo de apelaciones */}
            {apelaciones.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.nombre}</td>
                <td>{animal.peso} kg</td>
                <td className={animal.apto ? 'apto' : 'no-apto'}>
                  {animal.apto ? 'Apto' : 'No apto'} - {animal.motivo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Perros aceptados (ejemplo)</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {aceptados.map((perro) => (
              <tr key={perro.id}>
                <td>{perro.nombre}</td>
                <td>{perro.peso} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TablasAnimales;