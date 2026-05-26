//Operadores Aritméticos
// calculadora
let n1 = 150;
let n2 = 90;
let soma = n1 + n2;
let divisão = n1 / n2;
let multiplicação = n1 * n2;
let subtração = n1 - n2;
console.log(`a soma desses numeros: ${soma},
a divisão desses numeros: ${divisão}, 
a multiplicação desses numeros: ${multiplicação}, 
a subtração desses numeros: ${subtração}`);
// o /n serve para pular linha
// ${} template string

//resto da divisão
let numeroUsuario = 4;
let verificador = numeroUsuario % 2;
console.log(verificador);
if (verificador >= 1){console.log("impar")}
  else{
console.log("par")};


//potência
let numero = 10;
let cubo = numero ** 3;
let quadrado = numero ** 2;
console.log(`o cubo do numero ${numero} é ${cubo},
o quadrado do numero ${numero} é ${quadrado}`);

//Conversão de temperatura
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//Média aritmética
let nota1 = 5;
let nota2 = 6;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) /3;
console.log(media.toFixed(2));

//Cálculo de troco
let valorProduto = 150;
let valorPago = 200;
console.log(`O valor do troco é: ${valorPago - valorProduto}`);


//Operadores de Comparação
