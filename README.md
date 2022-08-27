# Mini Desafio React - ABS-TI

## Descripción

En este desafio se desarrolló una aplicación en React.
Como problemática se planteó que debería contener 2 rutas distintas.
En una de ellas se muestra una lista de usuarios y en la otra, un formulario que al completarlo se agrega dicho usuario a la lista de usuarios.

## Como correr el proyecto

Para correrlo simplemente se debe correr el comando: `npm start`

## Dependencias utilizadas

Para resolver la problemática decidí usar las siguientes librerías:

- **React table**: tabla de usuarios, agregar filtros y tener la opción de poder ordenarla.
- **Sass**: estilos a componentes.
- **React hook form**: validación del formulario.
- **React testing library**: tests unitarios de componentes.

## Testing

Para correrlos simplemente se debe correr el comando: `npm run test`

Tests unitarios de componentes para verificar que las distintas acciones que pueda realizar un usuarios se ejecuten de forma apropiada. Mockeos de contextos y rutas.

## Mejoras disponibles

- **LocalStorage**: para guardar los nuevos usuarios que son agregados a la lista y poder tener una persistencia de los usuarios.
- **Cypress**: buena opción para testear los flujos de nuestra aplicación.

## Vista de usuarios

![Vista de usuarios](https://i.imgur.com/E8IXfBL.png)

## Vista del formulario

![enter image description here](https://i.imgur.com/XCRzgYO.png)
