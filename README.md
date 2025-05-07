#<b>Api Cursos Bootcamp</b>

Este proyecto permite gestionar usuarios e inscripciones a bootcamps. Los datos son manejados mediante peticiones HTTP con payload en formato JSON. Además he creado el frontend correspondiente y he realizado el despliegue de la app y la base de datos utilizando el servicio de alojamiento de Render.

La aplicación se encuentra completamente funcional en el servidor y se puede acceder a través de la siguiente URL: https://bootcamp-app.onrender.com/

La vista web solo permite registrar usuarios. La creación y asociación de bootcamps debe hacerse por la API.


##<b>✨ Funciones principales:</b> 

- Crud completo de usuarios.
- Asociación de usuarios a bootcamps.
- Visualización de usuarios y cursos disponibles en formato JSON.
- Formulario web funcional para registrar nuevos usuarios.

##<b>🛠️ Técnologias utilizadas:</b>

- Node.js
- Express
- Sequelize
- PostgreSQL
- Handlebars 
- Render (para el despliegue, actualmente fuera de línea)


## 📦 Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jasSalvador/app_bootcamp.git

2. Entra al directorio del proyecto:
   app_bootcamp

3. Instala las dependencias:
   npm install

4. Ejecuta el servidor:
   npm run dev

5- Accede a la app en tu navegador:
   http://localhost:3000
   
*Asegurate de que el puerto 3000 esté libre.


## Ejemplo de serialización de un Usuario:

{ "firstName": "Leandro", "lastName": "Pérez", "email": "leando.perez@gmail.com" }


## Ejemplo de serialización de un Bootcamp:

{ "title": "Introduciendo El Bootcamp De React.", "cue": 10, "description": "React es la librería más usada en JavaScript para el desarrollo de interfaces." }


## Ejemplo de asociación:

{  "userId": 4,  "bootcampId": 3 }


## Métodos soportados:

<b>GET:</b> obtener información de un usuario o todos los usuarios/Bootcamp

<b>POST:</b> crear un nuevo Usuario/Bootcamp

<b>PUT:</b> actualizar la información de un Usuario/Bootcamp

<b>DELETE:</b> eliminar un Usuario/Bootcamp


## Rutas:

### Ejemplos de requests

#### <b>Para los usuarios</b>

<b>Obtener información de todos los usuarios:</b>

GET http://localhost:3000/api/users


<b>Obtener información de un usuario en particular (ID):</b>

GET http://localhost:3000/api/users/2


<b>Crear un nuevo Usuario</b>

POST http://localhost:3000/api/users


<b>Actualizar la información de un usuario existente</b>

PUT http://localhost:3000/api/users/2


<b>Eliminar un Usuario</b>

DELETE http://localhost:3000/api/users/2


#### <b>Para los bootcamp</b>

<b>Obtener información de todos los Bootcamp:</b>

GET http://localhost:3000/api/bootcamp


<b>Obtener información de un Bootcamp en particular (ID):</b>

http://localhost:3000/api/bootcamp/1


<b>Crear un nuevo Bootcamp</b>

POST http://localhost:3000/api/bootcamp


#### <b>Asociación</b>

<b>Asociar un Usuario a un bootcamp</b>

http://localhost:3000/api/bootcamp/asociar