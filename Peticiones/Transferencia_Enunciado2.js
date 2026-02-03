/*  Enunciado 2: (Publicaciones con y sin comentarios)
    El área de contenido necesita identificar qué publicaciones han generado interacción y
    cuáles no. Para ello, se requiere analizar las publicaciones y sus comentarios asociados.

    Requerimientos:
    • Consultar todas las publicaciones.
    • Consultar todos los comentarios.
    • Relacionar comentarios con sus publicaciones.
    • Identificar publicaciones sin comentarios.
    • Clasificar publicaciones según tengan o no comentarios.
    Datos de entrada:
    • Endpoint de publicaciones (posts)
    • Endpoint de comentarios (comments)
    • Identificador de la publicación (postId)
    Datos de salida:
    • Listado de publicaciones con:
    o Título
    o Número de comentarios
    o Estado: “Con comentarios” o “Sin comentarios” */

const PublicacionesConComentarios = async () => {
    // Consultar todas las publicaciones
    const respuestaPosts = await fetch('http://localhost:8000/posts');
    const posts = await respuestaPosts.json();
    
    // Consultar todos los comentarios
    const respuestaComments = await fetch('http://localhost:8000/comments');
    const comments = await respuestaComments.json();
    
    console.log("Publicaciones y sus comentarios\n");
    
    // Recorrer cada publicación
    for (let i = 0; i < posts.length; i++) 
    {
        let contador = 0;
        
        // Contar cuántos comentarios tiene esta publicación
        for (let j = 0; j < comments.length; j++) 
        {
            if (comments[j].postId == posts[i].id) 
            {
                contador++;
            }
        }
        
        // Determinar el estado
        let estado = "";
        if (contador > 0) 
        {
            estado = "Con comentarios";
        } 
        else 
        {
            estado = "Sin comentarios";
        }
        
        // Imprimir resultado
        console.log(`Título: ${posts[i].title}`);
        console.log(`Comentarios: ${contador}`);
        console.log(`Estado: ${estado}`);
        console.log("\n");
    }
}

PublicacionesConComentarios();