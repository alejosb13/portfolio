# Portafolio

Este proyecto es una página web personal de tipo portafolio realizada con Nodejs.

---
## Requerimientos

Para el desarrollo, solo necesitará Node.js, Mysql y configurar las variables de entorno que desea utilizar en un archivo .env . 

## Instalar

    $ git clone https://github.com/alejosb13/portfolio.git
    $ cd portfolio
    $ npm install

## Configurar

Crear un archivo .env en el directorio raíz con las siguientes variables:

```bash
    DB_HOST     : localhost
    DB_USER     : root
    DB_PASSWORD : 
    DB_NAME     : base_project
    APP_PORT    : 3001
```

## Iniciar el servidor en desarrollo
    $ npm run desarrollo


## Iniciar el servidor en Produccion

    $ npm run produccion
## Pasos Generar crear Base de datos, Tablas y datos 

### Paso 1: Crear base de datos
- npx sequelize-cli db:create

### Paso 2: Ejecutar Migracion
- npx sequelize-cli db:migrate

### Paso 3: Ejecutar Seeders
- npx sequelize-cli db:seed:all


