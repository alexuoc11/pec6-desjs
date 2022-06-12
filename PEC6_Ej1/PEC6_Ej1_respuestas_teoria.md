### PEC 6
## Alejandro Criado Gonzalez

# Ejercicio 1 
¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)

Los componentes tienen como finalidad decidir qué datos mostrar y cómo mostrarlos en la UI. Es decir, en los componentes se relacionan los datos con la UI, se enlazan los eventos a los métodos y se permite la interacción del usuario con nuestra aplicación. Por tanto, los componentes en Angular se encuentran en la capa de presentación, y por consiguiente, sólo deberían centrarse en aspectos relacionados con la presentación de los datos.
Los servicios en Angular forman la capa que es común a toda la aplicación, es decir, los servicios pueden ser usados en varios componentes. El uso común de los servicios serían los siguientes:
• Necesitas recuperar/enviar datos al servidor. Esta tarea puede incluir el procesamiento o no de los datos mientras estos son transferidos.
• Necesitas encapsular la lógica de la aplicación que no es específica de un componente, o la lógica puede ser reutilizada por varios componentes.
• Necesitas compartir datos entre componentes, especialmente entre componentes que pueden (o no) conocerse entre ellos.

¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
La inyección de dependencias,o DI,es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
El decorador @Injectable() especifica que Angular puede usar esta clase en el sistema DI.

Observa que se ha utilizado el decorador @Injectable, el cual nos va a permitir transformar cualquier clase a un servicio, que podrá ser inyectado a través de los constructores de cualquier componente o servicio. 

Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:
- Observable: El patrón observable no es más que un modo de implementación de la programación reactiva, que básicamente pone en funcionamiento diversos actores para producir los efectos deseados, que es reaccionar ante el flujo de los distintos eventos producidos. Mejor dicho, producir dichos eventos y consumirlos de diversos modos.
- Subscription: Subscribe() es un método en Angular que conecta el observer con eventos observable. Siempre que se realiza algún cambio en estos observables, se ejecuta un código y observa los resultados o cambios mediante el método subscribe. Subscribe() es un método de la biblioteca rxjs, utilizado internamente por Angular.
- Operators: Función para manipular los eventos siguiendo los principios de la programación funcional.
- Subject: Los subjects de RxJs son un tipo de Observable especial que nos permiten realizar diversas tareas como el multicasting, es decir, compartir exactamente el mismo stream de datos con todas las subscripciones sin preocuparnos del tipo de Observable que estamos manejando.
- Schedulers: Los Schedule controlan cuando se inicia una suscripción y cuando se publican las notificaciones ya que el deber de este es agendar estos llamados estableciendo en los observable el tipo de task que este formara parte (microTask o macroTask) para que así puedan establecer el momento en que este deba actuar. 

¿Cuál es la diferencia entre promesas y observables?

¿Cuál es la función de la tubería (pipe) async?