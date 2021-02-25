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

const getEmpleadoByID = async (id) => {

   try {
        const empleado = empleados.find((e)=>e.id === id);
    
        if(empleado){
            return(empleado);
            
        } throw new Error(`El empleado con id ${id} no existe`)
    } catch(error){
        throw error;
    }
        
}
const getSueldoById = async (id) => {

    try {
        const sueldo = sueldos.find((e)=>e.id === id);
     
        if(sueldo){
            return(sueldo);
             
        } throw new Error (`El sueldo con id ${id} no existe`)
     } catch(error){
        throw error;
     }
         
 }
const id=1;

const getDatosCompletosEmpleados = async (id) => {
        
    try {    
        const empleado= await  getEmpleadoByID(id);
        const sueldo= await getSueldoById(id);
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }
    } catch (err) {
        throw err;
    }
}

getDatosCompletosEmpleados(id)
    .then(data=> console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
    .catch(err=>console.log(err.message));

/*const getSueldoById = (id)=> {

    return new Promise((resolve, reject)=>{
        const sueldo = sueldos.find((s)=>s.id === id);
    
        if(sueldo){
            resolve(sueldo);
            return;
        }
        reject(`El sueldo con id ${id} no existe`);
    });
    


}*/