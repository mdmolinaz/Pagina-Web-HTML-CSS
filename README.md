# Mi Sitio Web

Este es un sitio web que utiliza Node.js y MongoDB como base de datos. Sigue las instrucciones a continuación para configurar el proyecto localmente y conectar la base de datos.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB (instalado y corriendo en tu sistema)
- Git

## Instrucciones para configurar el proyecto localmente

    1. Clona este repositorio en tu computadora:

    git clone https://github.com/mdmolinaz/Pagina-Web-HTML-CSS.git

    2. Navega a la carpeta del proyecto:

        cd mi-sitio-web

    3. Instala las dependencias necesarias con npm:

        npm install

    4. Configura el archivo .env para incluir tus credenciales de MongoDB y cualquier otra configuración:

        Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

            MONGO_URI=mongodb://localhost:27017/mi-base-de-datos
            PORT=3000
            EMAIL_USER=tu-email@gmail.com
            EMAIL_PASS=tu-contraseña-de-aplicacion

    5. Asegúrate de que MongoDB esté corriendo localmente:

        Abre una terminal y ejecuta:

            mongod

    6. Inicia el servidor Node.js:

        node app.js

    7. Abre tu navegador y navega a:

        http://localhost:3000

## Funcionalidades

    -Página de contacto con envío de datos.
    -Conexión con MongoDB para almacenar los datos.

