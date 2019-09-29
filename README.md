### Como usar la API Beers

API beers disponibiliza servicios para crear, listar cervezas creadas y calcular cajas en diferentes monedas. Está sobre Node v8 con Express y MySQL.
Existe una colección POSTMAN con los serivicios funcionales: https://www.getpostman.com/collections/b506fdd6bb886103b8d0

## Docker

Los servicios se encuentran en la carpeta "backend" y contienen un Dockerfile que crea el contenedor del mismo y el código fuente en Express Framework que maneja las solicitudes y la conexión con la BD.
La base de datos se encuentra en la carpeta "database" y contiene un Dockerfile que crea el contenedor del mismo y crea las tablas cada vez que se inicia el docker.
No se usarion volumenes para hacer persistente la BD, cada vez que levante la App reiniciara los valores.

para levantar la aplicación se debe usar:
`docker-compose build`

Seguido de:
`docker-compose run`

Para detener ctrl+C o `docker-compose down`

## Ejecutar servicios

La aplicación se levanta por defecto en el puerto 3005. Así que podría acceder a los servicios por `localhost:3005/`

## Currencies

Se usó la API especificada: currencylayer.com para poder generar los box. La versión free de la API admite solo 250 solicitudes al mes, por ende al iniciar la aplicacion se hace la solicitud a la api y se guarda para usos posteriores y se verifica cambios en los valores cada hora (este valor puede cambiarse en la variable de ambiente del backend UPDATE_EVERY). De igual forma, la versión gratis de la API no permite conversión entre monedas asi que se implemento una conversión custom.