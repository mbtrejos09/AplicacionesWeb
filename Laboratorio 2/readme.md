Instituto Tecnológico de Costa Rica
Laboratorio  #2
Desarrollo Ágil de Aplicaciones 
Administración de Tecnologías de Información

Elaborado por: Mario Alberto Brenes Trejos -2020426280

Profesor:
Victor Vargas Ramírez
I Semestre 
2025


1. CSS tradicional / externo


Descripción: 

	Se enlazan archivos .css al proyecto como se hace normalmente en HTML.

Ventajas: 

	Separación clara de estilos y lógica.
	
	Muy fácil de usar y comprender.

	Compatible con cualquier herramienta de desarrollo web.

	Permite usar bibliotecas como Bootstrap directamente.

Desventajas: 

	Todos los estilos son globales, por lo que hay riesgo de conflictos entre clases.

	No ofrece encapsulamiento de estilos por componente.

	Menos mantenible en aplicaciones grandes.



Perspectiva personal: 

	Útil en proyectos simples. No lo usaría en apps grandes por falta de modularidad lo que puede ser perjudicial ante una expansión del proyecto.



2. CSS Modules

Descripción: 

	Archivos .module.css permiten aplicar estilos que solo afectan al componente donde se usan.

Ventajas: 

	Aislamiento de estilos por componente.

	No requiere aprender nuevas sintaxis.

	Buen balance entre organización y simplicidad.

Desventajas: 

	Puede ser confuso si se mezclan con otros estilos.
	Si se combinan muchos estilos dinámicos con JS, puede volverse limitado.
	No permite lógica condicional directamente en los estilos.


Perspectiva personal: 

	Lo usaría si no necesito lógica dentro de los estilos. Tiene buena organización y seguridad contra conflictos.



3. Inline styles 

Descripción: 
	
	Se definen como objetos en JavaScript, aplicándolos directamente en los componentes.

Ventajas: 

	Dinámicos, simples de usar para estilos pequeños o condicionales.
	Permite usar condiciones y valores dinámicos con facilidad.
	Rápido de implementar para estilos simples.
	Muy útil para cambiar estilos en tiempo real.


Desventajas: 

	No permite pseudoclases (:hover, :focus, etc.).
	Puede complicarse visualmente el código si los estilos crecen.
	No hay separación entre lógica y presentación.


Perspectiva personal: Lo usaría para estilos rápidos o dinámicos, pero no como única solución.




4. styled-components

Descripción:

	Biblioteca que permite escribir CSS dentro de JavaScript utilizando template literals.

Ventajas: 

	Estilos totalmente aislados, dinámicos, soporta lógica de JS.

Desventajas: 

	Añade dependencia, puede aumentar complejidad.

Perspectiva personal: 
	
	Me parece la opción más moderna y escalable. Ideal para aplicaciones donde la reutilización de componentes y la personalización sean clave.




5. Frameworks con estilo predefinido (como Tailwind CSS)
Descripción: 

	Tailwind permite aplicar estilos mediante clases utilitarias en el JSX directamente, sin escribir archivos .css.

Ventajas: 

	Muy rápido para prototipar. 
	Menos necesidad de archivos CSS separados.

Desventajas: 

	JSX puede verse saturado. 
	Curva de aprendizaje de las clases de utilidad.

Perspectiva: Buena si ya se está familiarizado, pero no lo incluiría en un proyecto si el objetivo es entender los fundamentos de los estilos.


