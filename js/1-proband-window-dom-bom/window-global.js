/* Window Object Model */

console.log("window-global");

/* Las funciones globales pasan a ser parte del objeto global windows */
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

window.saludar("Mat33");

/* Usando var la variable queda en el objeto global windows
y puede ser accedida en cualquier lugar */
var nombre = "Mat";

/* Este comportamiento no funciona con let ni const */
let miNombre = "Matias";
const miApellido = "Pascual";

console.log(window.miNombre); // undefined
console.log(window.miApellido); // undefined

/* Se aconseja que: 
			Si un valor es tan importante que desea que esté disponible globalmente, 
			escríbalo directamente como una propiedad.
*/

window.usuarioActual = {
  name: "Mat",
  number: 33,
};

console.log(window.usuarioActual);
