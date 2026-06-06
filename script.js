const botonMostrar = document.getElementById('btnMostrar');
const contenedorVideos = document.getElementById('galeria');

botonMostrar.addEventListener('click', () => {
    
    const estaOculto = contenedorVideos.classList.toggle('oculto');
    
    
    if (estaOculto) {
        botonMostrar.textContent = 'Mostrar Videos';
    } else {
        botonMostrar.textContent = 'Ocultar Videos';
    }
});

