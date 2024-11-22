// typeof operator
console.log("Typeof")
let bol = true;
let num = 12;
let text= "Hola";

console.log(typeof(text));
//operadores matematicos
console.log("operadores matematicos")
let y2 = 12;
//y2 +=4;
//y2 -=1;
//y2 *=2;
//y2 %=7;  es lo mismo que y2 = y2 % 7
//y2 **=2; elevar al cuadrado
y2 ++;
y2--;

console.log(y2);
let text1 = "A";
let text2 = "B";
let result = text1>text2;
console.log("la rstpa es: "+result);

// practica de variables var, let y const
console.log("primera practica")
var y = 8;
let a = 6;
const u = 9;
x = 5;
let m = a + y;
m = 12; //no se puede cambiar el valor de la constante
console.log(u);
y= 13;//las otras variables si se pueden cambiar
console.log(y);

//Funciones+
console.log("//Funciones:")

function sumaNumeros(a,b){
    return a+b;
}
console.log("La suma de 2+ 3 es igual a " + sumaNumeros(2,3));

//Objetos
console.log("//Objetos");


