const personaje = {
    nombre: 'Raymond',
    apellido: 'Reddington',
    profesion: 'Criminal',
    getDescripcion(){
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre= personaje.nombre;
const apellido= personaje.apellido;
const profesion= personaje.profesion;*/

const {nombre, apellido, profesion, edad=50} = personaje;

const imprimirPersonaje = ({nombre, apellido, profesion, edad=50})=>{
    console.log(nombre, apellido, profesion, edad);

}
imprimirPersonaje(personaje);
const personajes = ['Red', 'Liz', 'Dembe'];

const[p1, p2, p3] = personajes;

console.log(p3, p1, p2);
//console.log(nombre, apellido, profesion);