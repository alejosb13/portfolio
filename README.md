# Portafolio

Este proyecto es una página web personal de tipo portafolio realizada con Nodejs.

## Construido Con

* [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - Framework CSS
* [Sequelize](https://sequelize.org/master/) - ORM (Object-Relational mapping)
* [Twig](https://twig.symfony.com/doc/3.x/) - Sistema de plantillas
* [Express](https://expressjs.com/es/) - Framework de Nodejs
* [Jquery](https://jquery.com/) - Framework JS
* [Nodejs](https://nodejs.org/es/docs/) - Lenguaje de programación


---
## Requerimientos

Para el desarrollo, solo necesitará Node.js, Mysql y configurar las variables de entorno que desea utilizar en un archivo .env . 

## Instalar
    Nota: En el archivo package.json encontrara devDependencies (asegurese de instalarlas)
```bash
    $ git clone https://github.com/alejosb13/portfolio.git
    $ cd portfolio
    $ npm install
```

## Configurar

Crear un archivo .env en el directorio raíz con las siguientes variables:

```bash
    DB_HOST     = localhost
    DB_USER     = root
    DB_PASSWORD = 
    DB_NAME     = base_project
    APP_PORT    = 3001
    APP_KEY     = KEYTEST
```

## Iniciar el servidor en desarrollo

```bash
    $ npm run desarrollo
```


## Iniciar el servidor en Produccion
```bash
    $ npm run produccion
```
## Pasos Generar crear Base de datos, Tablas y datos 

### Paso 1: Crear base de datos
```bash
    $ npx sequelize-cli db:create
```

### Paso 2: Ejecutar Migracion
```bash
    $ npx sequelize-cli db:migrate
```

### Paso 3: Ejecutar Seeders
```bash
    $ npx sequelize-cli db:seed:all
```


