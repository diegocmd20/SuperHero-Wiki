# SuperHero API

**Objetivo:** Implementar el uso de la Superhero API en nuestro buscador con la información y las estadísticas de nuestros héroes.

📍 Puedes visualizar tu proyecto haciendo click aquí: https://super-hero-wiki.vercel.app/

👉 Si deseas la lista de los id para tener la información de Superhéroes haz clic aquí: https://www.superheroapi.com/ids.html

## Descripción:

1. HTML:

   - Navbar
   - Formulario con un input `type="number"` para buscar nuestros héroes por id.

2. JavaScript / jQuery:

   - Validación del tipo de dato ingresado en el `<input>`
   - Llamada a la API mediante Ajax condicionando que si la respuesta es favorable ejecute las funciones `cardLoaded(data)` y `chartLoaded(data)` en caso contrario con una alerta declarando qué llamada tuvo un error.
   - Función `cardLoaded(data)` que renderiza como card los datos solicitados del héroe mediante el método `.html()`. 
   - Función `cardLoaded(data)` que renderiza la gráfica con las estadísticas del superhéroe consultado teniendo de referencia la librería CanvaJS.
