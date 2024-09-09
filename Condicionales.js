const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Imprimir en consola el número mayor de los tres.
if(numero1 > numero2 && numero1>numero3 ){  
  console.log("El mayor es el número:", numero1)
}else if(numero2 > numero3 && numero2 > numero1){
  console.log("El mayor es le número:", numero2)
}else{
  console.log("El mayor es el número:", numero3)
}

//Imprimir en consola el número menor de los tres.
if(numero1 <numero2 && numero1 < numero3 ){  
  console.log("El menor es el número:", numero1)
}else if(numero2 < numero3 && numero2 < numero1){
  console.log("El menor es le número:", numero2)
}else{
  console.log("El menor es el número:", numero3)
}

//Imprimir en consola si el numero1 es par o impar.
if (numero1 % 2 === 0){
  console.log("Es par el número", numero1)
} else {
  console.log("Es impar el número", numero1)
}

//Imprimir en consola si el numero2 es par o impar.
if (numero2 % 2 === 0){
  console.log("Es par el número", numero2)
} else {
  console.log("Es impar el número", numero2)
}

//Imprimir en consola si el numero3 es par o impar.
if (numero3 % 2 === 0){
  console.log("Es par el número", numero3)
} else {
  console.log("Es impar el número", numero3)
}

//Imprimir en consola si el numero1 es múltiplo de 5.
if (numero1 % 5 === 0){
  console.log("Es múltiplo de 5", numero1)
} else {
  console.log("No es múltiplo de 5", numero1)
}

//Imprimir en consola si el numero2 es múltiplo de 5.
if (numero2 % 5 === 0){
  console.log("Es múltiplo de 5", numero2)
} else {
  console.log("No es múltiplo de 5", numero2)
}

//Imprimir en consola si el numero3 es múltiplo de 5.
if (numero3 % 5 === 0){
  console.log("Es múltiplo de 5", numero3)
} else {
  console.log("No es múltiplo de 5", numero3)
}
