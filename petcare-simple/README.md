# Refugio PetCare - version simple

Sistema de apelacion para adopcion. 3 componentes, logica separada en un
archivo aparte, comentarios marcando de que clase salio cada concepto.

## Instalar y correr

```bash
npm install
npm run dev
```

## Estructura

```
src/
  App.jsx                        -> componente raiz, guarda el estado y arma todo
  App.css                        -> estilos simples
  main.jsx                       -> punto de entrada

  components/
    FormularioApelacion.jsx       -> componente del formulario
    TablasAnimales.jsx            -> componente con las dos tablas

  utils/
    logicaApelacion.js            -> toda la logica (if, switch, for, while, etc.)
```

## Mapeo rapido a las clases

- Clase 2: variables, valores iniciales de formulario y de datos de ejemplo
- Clase 3: if simple, compuesto y anidado en `evaluarApelacion`
- Clase 4: operadores `&&` y `||`, y `switch` en `obtenerRangoPeso`
- Clase 5: `for` en `contarAptos`, `while` en `calcularPesoPromedio` (ambas con acumulador)
- Clase 6: funciones con parametros que retornan un valor
- Clase 7: `Date` y `Math` en `generarId`, `String` en `formatearNombre`
- Clase 10/11: eventos (`onChange`, `onSubmit`), `e.preventDefault()`
- Clase 12/13: `useState`, `.map()` para pintar las tablas
- Clase 14: props entre componentes, operador spread para agregar al arreglo
