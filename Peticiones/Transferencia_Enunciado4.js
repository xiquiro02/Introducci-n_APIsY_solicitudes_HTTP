/*  Enunciado 4: (Eliminación lógica y validación de datos)
    Antes de eliminar una publicación, el sistema debe validar si dicha publicación tiene
    comentarios asociados. Si tiene comentarios, no debe eliminarse; de lo contrario, puede
    proceder.
    Requerimientos:
    • Consultar las publicaciones.
    • Consultar los comentarios.
    • Verificar si una publicación específica tiene comentarios.
    • Si no tiene comentarios, ejecutar la eliminación.
    • Validar el resultado mediante una nueva consulta.
    Datos de entrada:
    • ID de la publicación
    • Endpoint de publicaciones (posts)
    • Endpoint de comentarios (comments)
    Datos de salida:
    • Mensaje de resultado:
    o “Publicación eliminada correctamente”
    o “No se puede eliminar la publicación porque tiene comentarios” */

const EliminarPublicacion = async (id) => {
    // Consultar las publicaciones
    const respuestaPosts = await fetch('http://localhost:8000/posts');
    const posts = await respuestaPosts.json();
    
    // Consultar todos los comentarios
    const respuestaComments = await fetch('http://localhost:8000/comments');
    const comments = await respuestaComments.json();
    
    let contador = 0;
    
    // Contar comentarios de esta publicación
    for (let i = 0; i < comments.length; i++) 
    {
        if (comments[i].postId == id) 
        {
            contador++;
        }
    }
    
    // Validar si tiene comentarios
    if (contador > 0) 
    {
        console.log("No se puede eliminar la publicación porque tiene comentarios");
    } 
    else 
    {
        // Eliminar la publicación
        const respuesta = await fetch(`http://localhost:8000/posts/${id}`, {
            method: 'DELETE',
        });
        
        console.log("Publicación eliminada correctamente");
        
        // Validar el resultado con nueva consulta
        const validacion = await fetch('http://localhost:8000/posts');
        const postsActualizados = await validacion.json();
        console.log("Total de publicaciones después de eliminar:", postsActualizados.length);
    }
}

EliminarPublicacion(4);