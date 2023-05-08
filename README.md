# PlantAPP

Este proyecto es un registro de plantas hecho con React y Redux, que permite a los usuarios crear, editar, ver y eliminar registros tanto de plantas de interior como de exterior. Además, los usuarios pueden registrarse y deben estar logueados para acceder a todas las funciones de la página. El proyecto depende de una base de datos MongoDB alojada en un backend, lo que permite una gestión eficiente y segura de los registros de plantas.

## Características

- Permite a los usuarios crear registros de plantas, incluyendo información como el nombre y la ubicación.
- Los usuarios pueden ver una lista de todos los registros de plantas existentes.
- Los usuarios pueden editar y eliminar sus propios registros de plantas.
- Los usuarios deben registrarse y estar logueados para acceder a todas las funciones de la página.
- El proyecto está disponible en formatos móviles y de escritorio.
- El proyecto depende de una base de datos MongoDB alojada en un backend, lo que permite una gestión eficiente y segura de los registros de plantas.

## Mejoras futuras

- Implementación de filtros y búsqueda para que los usuarios puedan encontrar registros de plantas basados en diferentes criterios.
- Crar una página de detalles de cada planta, como la ubicación geográfica, el clima óptimo para el crecimiento, imágenes y comentarios de otros usuarios.
- Mejorar el diseño y la usabilidad de la aplicación, con el objetivo de hacerla más intuitiva y fácil de usar para los usuarios.
- Implementación de la versión de escritorio de la aplicación.

## Tecnologías

- React
- Redux
- Jest
- MongoDB

## Instalación

Para instalar el proyecto, sigue estos pasos:

1.  Clona el repositorio en tu ordenador.
2.  Ejecuta `npm install` para instalar las dependencias del proyecto.
3.  Crea un archivo `.env` con la información de conexión de la base de datos MongoDB. Para hacer esto, sigue el siguiente formato:

                  MONGO_URI=<URL de conexión de la base de datos>

4.  Ejecuta `npm start` para iniciar la aplicación.

## Pruebas

El proyecto ha sido probado con Jest. Para ejecutar las pruebas, utiliza el siguiente comando:

'npm test'

## Contribución

Si quieres contribuir al proyecto, puedes bifurcar el repositorio, hacer tus cambios y enviar una solicitud de extracción.

                                            --------------------------

# PlantApp

This project is a plant registry made with React and Redux, which allows users to create, edit, view, and delete records of both indoor and outdoor plants. Users can access a detail page where they can find more information about the plants, such as their height, need for light and water, difficulty of care, and whether or not they are pet-safe. In addition, users can register and must be logged in to access all of the page's features. The project relies on a MongoDB database hosted on a backend, allowing for efficient and secure management of plant records.

## Features

- Allows users to create plant records, including information such as name and location.
- Users can view a list of all existing plant records.
- Users can view a detail page for each plant where they can find more information, such as their height, need for light and water, difficulty of care, and whether or not they are pet-safe.
- Users can edit and delete their own plant records.
- Users must register and be logged in to access all of the page's features.
- The project is available in both mobile and desktop formats.
- The project relies on a MongoDB database hosted on a backend, allowing for efficient and secure management of plant records.

## Future Improvements

- Implementation of filters and search so that users can find plant records based on different criteria.
- Adding more information in a detail page for each plant, such as geographic location, optimal climate for growth, images, and comments from other users.
- Improving the design and usability of the application, with the goal of making it more intuitive and easy to use for users.
- Implementation of the desktop version of the application.

## Technologies

- React
- Redux
- Jest
- MongoDB

## Installation

To install the project, follow these steps:

1.  Clone the repository to your computer.
2.  Run `npm install` to install the project's dependencies.
3.  Create a `.env` file with the MongoDB database connection information. To do this, follow this format:

                        MONGO_URI=<database connection URL>

4.  Run `npm start` to start the application.

## Testing

The project has been tested with Jest. To run the tests, use the following command:

## Contribution

If you would like to contribute to the project, you can fork the repository, make your changes, and submit a pull request.

Este documento ha sido redactado en colaboración con ChatGPT, un modelo de lenguaje grande entrenado por OpenAI.
