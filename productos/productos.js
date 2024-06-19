// productos.js
document.addEventListener("DOMContentLoaded", function() {
    // Función para hacer la petición AJAX y cargar los productos
    function cargarProductos() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "productos.php", true);
      xhr.onload = function() {
        if (xhr.status == 200) {
          var productos = JSON.parse(xhr.responseText);
          var listaProductos = document.getElementById("lista-productos");
          listaProductos.innerHTML = ""; // Limpiar lista actual de productos
          
          // Iterar sobre cada producto y agregarlo a la lista
          productos.forEach(function(producto) {
            var item = document.createElement("li");
            item.innerHTML = `
              <h2>${producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <img src="${producto.imagen}" alt="${producto.nombre}">
            `;
            listaProductos.appendChild(item);
          });
        }
      };
      xhr.send();
    }
    
    // Cargar los productos al cargar la página de productos
    cargarProductos();
  });
  