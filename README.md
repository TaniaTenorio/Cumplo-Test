## Documentación

Para  levantar el proyecto en línea acceder al siguiente [link](https://taniatenorio.github.io/Cumplo-Test/)

## Proceso

1. Creación del proyecto mediante create-react-app
2. Deploy del proyecto en Github con la instalación de gh-pages
3. Creación de rutas para que el proyecto sea SPA.
4. Creación de vistas para bancos, sucursales y empleados
5. Creación de componentes para renderizar la información de sucursales, bancos y empleados
6. Comunicación entre componentes padres e hijos para mostrar la información de bancos, sucursales y empleados de forma dinámica.
7. Creación de formulario para añadir empleados nuevos.
8. Aplicación de estilos con CSS.
9. Validación de cmpos en formulario: Nombre y Apellido obligatoris.
10. Validación de texto en formulario: Aceptar únicamente, letras, acentos y espacios
11. Validación de formulario: No enviar formulario vacío.

### Procesos pendientes

12. Mostrar empleados únicamente de la sucursal seleccionada.
13. Agregar empleado a la sucursal seleccionada, ligado por el id.
10. Rutas en etiquetas Link dinámicas

empleados.forEach(empleado => {
    if(empleado.id === sucursal){
        this.setState ({empleados: empleado})
    }
})


