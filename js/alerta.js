const botonAlerta = document.getElementById('aceptarAlerta');
const avisoAlerta = document.getElementById('alerta');

botonAlerta.addEventListener('click', () => {
    
    avisoAlerta.classList.remove('activo');
    location.href = "buscar.html"
})

