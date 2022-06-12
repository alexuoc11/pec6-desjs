### PEC 6
## Alejandro Criado Gonzalez

# Ejercicio 3
¿Qué son los interceptores?

Los interceptores nos permiten interceptar solicitudes HTTP entrantes o salientes utilizando HttpClient. Pueden manejar tanto HttpRequest como HttpResponse.
Al interceptar la solicitud Http, podemos modificar o cambiar el valor de la solicitud, y al interceptar la respuesta, podemos realizar algunas acciones predefinidas en un código de estado o mensaje en particular.
La mayoría de los interceptores transforman la solicitud saliente antes de pasarla al siguiente interceptor de la cadena (si hay varios interceptores), llamando a: 
next.handle(transformedReq).

Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:

this.wines$ = this.searchSubject
    .startWith(this.searchTerm)
    .debounceTime(300)
    .distinctUntilChanged()
    .merge(this.reloadProductsList)
    .switchMap((query) =>
    this.wineService.getWine(this.searchTerm));

