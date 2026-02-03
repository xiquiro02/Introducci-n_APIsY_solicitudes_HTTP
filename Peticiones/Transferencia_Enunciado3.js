/*  Enunciado 3: (Búsqueda específica de información)
    Un usuario del sistema desea consultar información puntual sobre una publicación
    específica y conocer si existe interacción asociada a ella.
    Requerimientos:
    • Consultar todas las publicaciones.
    • Buscar una publicación específica por su identificador.
    • Consultar los comentarios relacionados con esa publicación.
    • Validar si existen o no comentarios asociados.
    Datos de entrada:
    • ID de la publicación a consultar
    • Endpoint de publicaciones (posts)
    • Endpoint de comentarios (comments)
    Datos de salida:
    • Información detallada de la publicación:
    o Título
    o Contenido
    o Número de comentarios asociados */

const BuscarPublicacion = async (id) => {
    // Consultar la publicación específica
    const respuestaPost = await fetch(`http://localhost:8000/posts/${id}`);
    const post = await respuestaPost.json();
    
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
    
    // Mostrar resultado
    console.log(`Título: ${post.title}`);
    console.log(`Contenido: ${post.body}`);
    console.log(`Comentarios: ${contador}`);
}

BuscarPublicacion(1);
