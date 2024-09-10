//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function SumaArray(Cadena){
    let suma = 0;
    for (let i = 0; i < Cadena.length; i++) {
        suma += Cadena[i];
    }
    return suma;
}

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function PromedioArray(cad_Numeros){
    if (cad_Numeros.length === 0)
     return 0;
    let suma = 0;
    for (let i = 0; i < cad_Numeros.length; i++) {
        suma += cad_Numeros[i];
    }
    return suma / cad_Numeros.length;
}

//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings 
//pero con todas las letras en mayúsculas.
function MayusculasArray(Textito){
    const Mayusculas = [];
    for (let i = 0; i < Textito.length; i++) {
        Mayusculas.push(Textito[i].toUpperCase());
    }
    return Mayusculas;
}
//ejemplo
const Palabritas = ['Vida', 'Campo', 'Animales', 'Familia']
const Palabrotas = MayusculasArray(Palabritas);
console.log(Palabrotas);

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function ParesArray(Numeritos){
    const pares = [];
    for (let i = 0; i < Numeritos.length; i++) {
        if (Numeritos[i] % 2 === 0) {
            pares.push(Numeritos[i]);
        }
    }
    return pares;
}

//Ejemplo para ejrcicio 1-2-4
const Numeros = [4, 5, 9, 10, 22];
const pares = ParesArray(Numeros);
console.log("La suma total es: ", SumaArray(Numeros));
console.log("El promedio es: ", PromedioArray(Numeros));
console.log("Numeros pares: ", pares);
