let n1 = 8;
let n2 = 9;
let n3 = 5;
let soma = (n1 + n2 + n3) / 3;
let media = soma / 3;
console.log(media);

let numero = 10;
let resto = numero % 2;
let resultado = resto === 0;
console.log(resultado);

let maiorIdade = true;
let temIngresso = true; 
let podeEntrar = maiorIdade && temIngresso; 
console.log(podeEntrar);

let nome = "";
let usuario = nome || "visitante";
console.log(usuario);

let temperatura = 30;
let clima = temperatura > 25 ? "quente": "frio"; 
console.log(clima);

let semparentese = 5 + 3 * 2;
let comparentese = (5 + 3) * 2;
console.log(semparentese , comparentese);

var idade = 18;
if (idade >= 18) {
    console.log(true);
} else {
    console.log(false);
}