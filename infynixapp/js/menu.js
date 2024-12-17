window.onload = function() {
    // Selecciona todos los enlaces del menú
    const menuItems = document.querySelectorAll('.menu-item');

    // Obtiene el nombre del archivo actual
    const currentPath = window.location.pathname.split('/').pop(); // Ejemplo: "index.html"

    // Itera sobre los enlaces del menú
    menuItems.forEach(item => {
        // Si el href del enlace coincide con el archivo actual, añade la clase 'active'
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
};
