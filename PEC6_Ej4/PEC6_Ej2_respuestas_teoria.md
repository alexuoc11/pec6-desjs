### PEC 6
## Alejandro Criado Gonzalez

# Ejercicio 2
¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule? Referencia: https://angular.io/guide/providers

El servicio en sí es una clase que generó la CLI y está decorada con @Injectable(). De forma predeterminada, este decorador tiene una propiedad provideIn, que crea un proveedor para el servicio. En este caso, provideIn: 'root' especifica que Angular debe proporcionar el servicio en el inyector raíz.
También es posible especificar que un servicio debe proporcionarse en un @NgModule en particular. Por ejemplo, si no desea que UserService esté disponible para las aplicaciones a menos que importen un UserModule que haya creado, puede especificar que el servicio se proporcione en el módulo.

¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones? Referencia: https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb

- 'platform' makes a service available between multiple apps or Angular Elements.
- 'any' creates isolated (not singleton) services for every child injector.