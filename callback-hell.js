const empleados = [
    {   
        id: 1,
        nombre: 'Raymond'
    },
    {
        id: 2,
        nombre:'Dembe'
    },
    {
        id:3,
        nombre:'Liz'
    }
]

const sueldos = [
    {
        id:1,
        sueldo:100000
    },
    {
        id:2,
        sueldo: 40000
    }

]

const getEmpleadoByID = (id, callback) => {

    const empleado = empleados.find((e)=>e.id === id);
    
    if(empleado){
        callback(null, empleado);
        return;
    }
    callback(new Error("El empleado no existe"))


}

const id  = 1;

getEmpleadoByID(id, (error, empleado) =>{
    
    
    if(error){
        console.log('ERROR!!!!!!!!!!!');
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`);
});