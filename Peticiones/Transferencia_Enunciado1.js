/* Enunciado 1: (Usuarios activos y sus publicaciones)
    Una aplicación web requiere mostrar un listado de usuarios activos junto con la cantidad
    de publicaciones que han realizado. Sin embargo, no todos los usuarios han creado
    publicaciones. El sistema debe identificar correctamente estos casos.
    Requerimientos
    • Consultar la lista completa de usuarios.
    • Consultar la lista de publicaciones.
    • Identificar cuáles usuarios tienen publicaciones asociadas.
    • Calcular la cantidad de publicaciones por usuario.
    • Mostrar también los usuarios que no tienen publicaciones.
    Datos de entrada
    • Endpoint de usuarios (users).
    • Endpoint de publicaciones (posts).
    • Identificador del usuario (userId)
    Datos de salida
    • Listado de usuarios con:
    o Nombre del usuario
    o Cantidad de publicaciones asociadas (puede ser 0) */


const UsuariosActivosYPublicaciones = async () => {
    // Consultar todos los usuarios
    const respuestaUsuarios = await fetch('http://localhost:8000/users');
    const usuarios = await respuestaUsuarios.json();
    
    // Consultar todas las publicaciones
    const respuestaPosts = await fetch('http://localhost:8000/posts');
    const posts = await respuestaPosts.json();
    
    console.log("Usuarios y sus publicaciones\n");
    
    // Recorrer cada usuario
    for (let i = 0; i < usuarios.length; i++) 
    {
        // Verificar si el usuario está activo
        if (usuarios[i].active === true)
        {
            let contador = 0;
            // Contar cuántos posts tiene este usuario
            for (let j = 0; j < posts.length; j++) 
            {
                if (posts[j].userId == usuarios[i].id) 
                {
                    contador++;
                }
            }
            // Imprimir resultado
            if (contador > 0)
            {
                console.log(`Usuario: ${usuarios[i].name}`);
                console.log(`Activo: True`);
                console.log(`Publicaciones: ${contador}`);
                console.log("\n");
                
            }
        }
    }
}

UsuariosActivosYPublicaciones();