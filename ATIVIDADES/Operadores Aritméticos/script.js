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

let x = 20;
let y = "20";
console.log(x == y); // o == compara apenas o valor, sem se importar com o tipo
console.log(typeof y); // o typeof mostra o tipo da variável, e o y é do tipo string
console.log(x === y); // o === compara o valor e o tipo, e o y esta como string, entao o resultado é false.

//Maior ou menor?
let a = 5;
let b = 15;
console.log(`O número ${a} é maior que o número ${b}?`);
console.log(a > b); //aqui fala que o "a" é maior que o "b", mas o "a" é menor, entao o resultado é false

//Aprovado ou reprovado?
let mediaAluno = 7;
if (mediaAluno >=7){ 
  console.log("Aluno aprovado")
} 
else{console.log("Aluno reprovado")
};

//Verificação de idade
let idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18){
  alert("Maior de idade");
}
else{alert("menor de idade")};
