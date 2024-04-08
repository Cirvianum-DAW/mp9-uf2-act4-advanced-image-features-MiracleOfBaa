(function() {
    // Función para abrir la lightbox
    function openLightbox(event) {
        event.preventDefault();
        var imageHref = event.target.parentNode.href;
        var lightboxImage = document.querySelector('.lightbox-image');
        lightboxImage.src = imageHref;
        lightbox.style.display = 'block';
    }

    // Función para cerrar la lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    var lightbox = document.querySelector('.lightbox');
    var images = document.querySelectorAll('.image-grid img');
    var closeButton = document.querySelector('.lightbox-close');

    // Agregar event listener a cada imagen
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', openLightbox);
    }

    // Agregar event listener al botón de cerrar
    closeButton.addEventListener('click', closeLightbox);
})();