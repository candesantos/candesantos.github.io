// script.js
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
    
    // Función para mostrar la pestaña seleccionada
    function openTab(tabName) {
        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        
        if (tabName === "productos") {
            cargarProductos();
        }
    }
    
    // Función para abrir el menú lateral
    function openNav() {
        document.getElementById("mySidebar").style.width = "300px";
    }
    
    // Función para cerrar el menú lateral
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    
    // Al hacer clic en la opción "Productos" del menú lateral
    var productosLink = document.querySelector('.sidebar a[href="#productos"]');
    if (productosLink) {
        productosLink.addEventListener('click', function(e) {
            e.preventDefault();
            openNav(); // Abrir el menú lateral si no está abierto
            
            // Activar la pestaña de productos y cargar los productos
            openTab('productos/productos.html');
        });
    }
    
    // Mostrar la página de inicio por defecto
    document.getElementById("inicio").style.display = "block";
});
