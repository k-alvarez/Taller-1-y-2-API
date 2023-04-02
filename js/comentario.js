function bcomentario(){
    const nombre = document.getElementById('fornombre').value;
    const pais = document.getElementById('forpais').value;
    const comentario = document.getElementById('forcoment').value;
    console.log(nombre); 
    console.log(pais); 
    console.log(comentario); 
    let comm = new validarComentario(nombre, pais, comentario); 
    console.log(comm); 
    console.log(comm.nombre); 
    const tableHeader = document.createElement('tr');
    const el_comentario = document.createElement('p');
    const el_nombre = document.createElement('th');
    const el_pais = document.createElement('th');
    el_comentario.innerText = comm.texto;
    el_nombre.innerText = comm.nombre;
    el_pais.innerText = comm.pais;
    tableHeader.appendChild(el_nombre);
    tableHeader.appendChild(el_pais);
    result.appendChild(tableHeader);
    result.appendChild(el_comentario);
    
}
