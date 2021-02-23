/*setTimeout(()=> {
    console.log('Hola mundo');
}, 2000);

const saludar = ()=>{
    console.log('Hola Mundo con la funcion "saludar"');
}

setTimeout(saludar, 2000);*/

/*const getUsuarioByID = (id)=>{

    const user = {
        id,
        nombre: 'Ariel'
    }

    setTimeout(()=>{
        console.log(user.nombre);
    },1000);
}

 getUsuarioByID(10);*/

 const getUsuarioByID = (id, callback)=>{

    const user = {
        id,
        nombre: 'Ariel'
    }

    setTimeout(()=>{
        callback(user);
        return user;
    },1000);
}


 getUsuarioByID(10, (usuario)=>{
    console.log(usuario.nombre)
});

const getUsuarioByID2 = (id, callback)=>{

    const user = {
        id,
        nombre: 'Ariel'
    }

    setTimeout(()=>{
        callback(user);
        return user;
    },1000);
}


 getUsuarioByID2(10, ({nombre, id})=>{
    console.log(`Nombre: ${nombre.toUpperCase()} .ID: ${id}`);
});
