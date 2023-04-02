class validarComentario{
    constructor(nombre, pais, comentario){
        this.nombre = nombre;
        this.pais = pais;
        this.texto = comentario;

        if(this.nombre =="" || this.pais =="" || this.texto =="" ){

            alert("Porfavor introduce la informacion requerida!");
    
        }else{
            return ;
        }    
            

    } 



}