const PeticionCompararRespuestas = async () => {
    // GET general
    const lista = await fetch('http://localhost:8000/posts');
    const todos = await lista.json();
    console.log("Lista completa:", todos);
}

PeticionCompararRespuestas();

const PeticionCompararRespuestas2 = async () => {
    // GET usuario individual 
    const individual = await fetch('http://localhost:8000/posts/1');
    const uno = await individual.json();
    console.log("Post individual:", uno);
}

PeticionCompararRespuestas2();

// En el primero el GET general trae todos los post mientras que en GET individual 
// solo trae un solo post el cual es el primero. 