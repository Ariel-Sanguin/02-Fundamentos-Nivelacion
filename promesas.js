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

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject)=>{
        const empleado = empleados.find((e)=>e.id === id);
    
         if(empleado){
            resolve(empleado);
            return;
        }
        reject(`El empleado con id: ${id} no existe`);

    });

}
const getSueldoById = (id)=> {

    return new Promise((resolve, reject)=>{
        const sueldo = sueldos.find((s)=>s.id === id);
    
        if(sueldo){
            resolve(sueldo);
            return;
        }
        reject(`El sueldo con id ${id} no existe`);
    });
    


}

const id = 1;

/*getEmpleadoByID(id).then(empleado=>{
    console.log(`El empleado con id ${id} es ${empleado.nombre}`);
}).catch(err=>console.log(err));

getSueldoById(id).then(sueldo=>{
    console.log(`El sueldo del empleado con id ${id} es ${sueldo.sueldo}`);
}).catch(err=>console.log(err));*/
let nombre;

getEmpleadoById(id)
    
    .then(empleado=>{
        nombre = empleado.nombre;
        return getSueldoById(id);
    })
    .then(sueldo=>{
        console.log(`El empleado ${nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })
    .catch(err => console.log(err));