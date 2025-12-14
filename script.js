// Contenido de script.js

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
    
    // Cambiar el icono
    var icon = this.querySelector('i');
    if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // Icono de cerrar (X)
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar el menú al hacer clic en un enlace (solo en móviles)
document.querySelectorAll('.nav a').forEach(item => {
    item.addEventListener('click', () => {
        // Asumiendo que '1000' es el breakpoint de diseño móvil
        if (window.innerWidth <= 1000) { 
            document.getElementById('nav-menu').classList.remove('open');
            
            // Restablecer el icono a la hamburguesa (fa-bars)
            var icon = document.getElementById('menu-toggle').querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 1000) {
        if (window.scrollY > 60) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    } else {
        header.classList.remove('shrink'); // seguridad para desktop
    }
});


