//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. 
//Luego, muestra la información de esa persona por la consola.
const Persona = {
    Nombre: "Claudia",
    Edad: 22,
    Genero: "F"
}

console.log("Informacion: ",Persona);

//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, 
//fotografías y indica el estado si esta en buen estado o no. 
//Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const Caja = {
    Cuadernos:5 ,
    Lapices: 9,
    Papel: 22,
    Fotografia: true,
    Estado: "Bueno"
} 

console.log("Informe de caja: ", Caja);

console.log(Caja,typeof Caja);
console.log(Caja.Cuadernos, typeof Caja.Cuadernos);
console.log(Caja.Lapices, typeof Caja.Lapices);
console.log(Caja.Papel, typeof Caja.Papel);
console.log(Caja.Fotografia, typeof Caja.Fotografia);
console.log(Caja.Estado, typeof Caja.Estado);
