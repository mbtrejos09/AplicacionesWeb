<<<<<<< HEAD
# AplicacionesWeb

Este es el curso de desarrollo ágil de aplicaciones web, en el que espero aprender varios frameworks tanto de frontend como de backend, así como tecnologías relevantes en el desarrollo web actual. Este es el repositorio de proyectos del curso. 
=======
Instituto Tecnológico de Costa Rica
Laboratorio  #2
Desarrollo Ágil de Aplicaciones 
Administración de Tecnologías de Información

Elaborado por: Mario Alberto Brenes Trejos -2020426280

Profesor:
Victor Vargas Ramírez
I Semestre 
2025


Parte 1 - Investigación
Realice una investigación sobre las diferentes herramientas existentes para realizar pruebas unitarias en el ecosistema de JavaScript.

Herramientas existentes para la realización de pruebas unitarias.

- Jest
Descripción:
    
    Framework de pruebas de JavaScript mantenido por Meta. Soporta pruebas unitarias, de integración y snapshots. Se integra fácilmente con TypeScript y NestJS.

Casos de uso:

    Testing de funciones puras.

    Testing de controladores y servicios en NestJS.

    Testing de lógica de negocio.

No recomendable para:

    Pruebas de UI o pruebas de rendimiento.

Ejemplo de prueba unitaria:
    
    describe('sum', () => {
      it('adds two numbers', () => {
        expect(1 + 2).toBe(3);
      });
    });


- Mocha

Descripción:

    Un framework de pruebas flexible para JavaScript, basado en Node.js. Necesita bibliotecas externas como Chai para las aserciones.

Casos de uso:

    Testing en backend con Node.js.

    Proyectos que requieren configuración personalizada de pruebas.

    Funciona tanto para frontend como para backend

    Soporta cualquier navegador incluyendo headless chrome library

    Soporta object mocking para realizar pruebas backend flexibles

No recomendable para:

    Proyectos donde se desea una solución todo-en-uno.

Ejemplo de prueba unitaria:

    const assert = require('assert');

    describe('Array', () => {
      it('should return -1 if value is not present', () => {
        assert.strictEqual([1, 2, 3].indexOf(4), -1);
      });
    });



- Jasmine

Descripción:

    Jasmine es un imitador del comportamiento del usuario que le permite realizar casos de prueba similares al comportamiento del usuario en su sitio web. Es un framework completo de testing con su propia sintaxis de aserciones y mocks. No requiere otras bibliotecas.


Casos de uso:

    Jasmine es útil para un frontend de pruebas para la visibilidad, la claridad de clic, así como la capacidad de respuesta de la interfaz de usuario en diferentes resoluciones.


No recomendable para: 

    Proyectos donde se necesite alta personalización de configuración.


Ejemplo de una prueba unitaria con esta herramineta

      describe('Calculator', () => {
      it('should add two numbers', () => {
        expect(1 + 2).toBe(3);
      });
    });


- Chai

Descripción:

    Centrado en las pruebas basadas en el comportamiento. Puede utilizarse en paralelo con cualquier otro framework. Existe desde hace bastante tiempo y ha evolucionado con la evolución de los estándares Javascript.
    ChaiJS funciona con Node, browser, rail y cuenta con una gran comunidad de soporte y documentación.

Casos de uso:
    
    Biblioteca que se suele usar junto con Mocha. Soporta estilos assert, expect, y should.

No recomendable para: 

    Uso como framework completo de testing por sí solo.

Ejemplo de una prueba unitaria con esta herramineta

    const expect = require('chai').expect;

    describe('Math test', () => {
      it('should return 4', () => {
        expect(2 + 2).to.equal(4);
      });
    });



- Mongoose


Descripción:
    ODM (Object Document Mapper) para MongoDB. No es una herramienta de testing per se, pero se puede mockear en pruebas unitarias.

Casos de uso:

    Mockear operaciones de base de datos en pruebas.
    Validar esquemas.

No recomendable para:

    Testing como herramienta principal. No es un framework de pruebas.

Ejemplo de una prueba unitaria con esta herramineta

    jest.mock('mongoose');

    it('should save a new user', async () => {
      const user = new UserModel({ name: 'Ana' });
      await user.save();
      expect(user.name).toBe('Ana');
    });


- Ava

Descripción:

    Framework de pruebas minimalista y rápido. Soporta tests paralelos y async por defecto.

Casos de uso:

    Testing de alto rendimiento.

    Funciones async/await.


No recomendable para: 

    Proyectos grandes que requieran features integrados como mocking.


Ejemplo de una prueba unitaria con esta herramineta

    import test from 'ava';

    test('addition', t => {
      t.is(1 + 1, 2);
    });

- Karma


Descripción:

    Test runner para ejecutar pruebas en múltiples navegadores. Utilizado frecuentemente con Jasmine.

Casos de uso:

    Pruebas de frontend en Angular.

    Compatibilidad cross-browser.

No recomendable para: 

    Testing en backend.

    Proyectos sin requerimientos de navegador.

Ejemplo: Se escribe igual a Jasmine


- Tape


Descripción:

    Framework de testing minimalista para Node.js, sin necesidad de dependencias externas.

    Soporta los estándares ES6, Typescript y coffee script

    Admite la ejecución de pruebas en la mayoría de los navegadores modernos

Casos de uso:

    Proyectos pequeños.

    Testing rápido en Node.js.

No recomendable para: 

    Proyectos grandes o complejos.
    Cuando se tienen herramientas avanzadas integradas.

Ejemplo de una prueba unitaria con esta herramineta

    const test = require('tape');

    test('sum test', t => {
      t.equal(2 + 3, 5);
      t.end();
    });


- Cypress.io


Descripción:

    Herramienta de pruebas end-to-end (E2E) para aplicaciones web modernas.

Casos de uso:

    Simulación de interacción del usuario.

No recomendable para: 

    Pruebas unitarias de funciones internas.

Ejemplo de una prueba unitaria con esta herramineta

    describe('My First Test', () => {
      it('visits the app', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Bienvenido');
      });
    });

- QUINT


Descripción:

    Marco de pruebas dedicado al uso con un frontend. 

    Proporciona una interfaz web lista para su despliegue que permite visualizar los resultados de los casos de prueba.
    Un conjunto de plugins construidos sobre él permite un desarrollo más rápido de casos de prueba

Casos de uso:

    Puede escribirse como un archivo JS independiente y ejecutarse en cualquier página web. 

    Puede utilizarse para construir scripts de prueba reutilizables.

No recomendable para: 

    Aplicaciones modernas con frameworks como Angular o React.



Ejemplo de una prueba unitaria con esta herramineta

    QUnit.test('sum test', function (assert) {
      assert.equal(1 + 1, 2, '1 + 1 should be 2');
    });



- Sinon


Descripción:

    Biblioteca de spies, mocks y stubs para JavaScript. Generalmente se usa junto a Mocha o Jest.

Casos de uso:

    Simular llamadas a funciones externas.

    Verificar interacciones.

No recomendable para: 

    Usarse como framework de pruebas por sí solo.


Ejemplo de una prueba unitaria con esta herramineta

    const sinon = require('sinon');

    const obj = {
      hello: () => 'world',
    };

    const spy = sinon.spy(obj, 'hello');

    obj.hello();

    console.log(spy.called); // true

Nota: 
    Para los ejemplos se utilizó la IA generativa. 

Fuentes: 

    - https://geekflare.com/es/javascript-unit-testing/
    - https://dev.to/niemet0502/writing-unit-tests-for-your-nestjs-rest-api-3cgg
    - https://ualmtorres.github.io/SeminarioTesting/
>>>>>>> df68867c9664ff868c7bcc1370b8082a34ec9f84
