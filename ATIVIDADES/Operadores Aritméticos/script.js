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
if (verificador >= 1) { console.log("impar") }
else {
  console.log("par")
};


//potência
let numero = 10;
let cubo = numero ** 3;
let quadrado = numero ** 2;
console.log(`o cubo do numero ${numero} é ${cubo},
o quadrado do numero ${numero} é ${quadrado}`);

//Conversão de temperatura
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

//Média aritmética
let nota1 = 5;
let nota2 = 6;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
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
if (mediaAluno >= 7) {
  console.log("Aluno aprovado")
}
else {
  console.log("Aluno reprovado")
};

//Verificação de idade
let idade = 20;
if (idade >= 18) {
  console.log("Maior de idade");
}
else {
  console.log("menor de idade");
}

//Comparação de strings
let string = "amor";
let string2 = "Amor";
let string3 = "odio";
console.log(`strings iguais ususando === é: ${string === string}`);
console.log(`strings com iniciais maiuscula e minuscula usando === é: ${string === string2}`);
console.log(`strings diferentes usando === é: ${string === string3}`);
//
console.log(`strings iguais ususando !== é: ${string !== string}`);
console.log(`strings com iniciais maiuscula e minuscula usando !== é: ${string !== string2}`);
console.log(`strings diferentes usando !== é: ${string !== string3}`);


//Faixa de preço
let preço = 40;
if (preço >= 10 && preço <= 100) {
  console.log("O produto está na faixa de preço permitida!");
}
else {
  console.log("Produto fora da faixa de preço.");
}

//Operadores Lógicos

//E lógico 
let numeroLogico = 10;
let verificadorDePar = numeroLogico % 2;
console.log(numeroLogico > 0 && verificadorDePar === 0);

//Ou lógico
let nomeUsuario = "admin";
console.log(nomeUsuario === "admin" || nomeUsuario === "root");

//NÃO lógico
let logado = false;
console.log(!logado);

//Validação de formulário
let idadeUsuario = 25;
let email = "usuario@example.com";
console.log(idadeUsuario >= 18 && email !== "");

//Desconto especial
let assinante = false;
let totalCompra = 200;
console.log(assinante === true || totalCompra >= 200);

//Acesso restrito
let idadeAcesso = 22;
let contaAtiva = true;
let banido = true;
console.log(idadeAcesso >= 18 && contaAtiva && !banido);

//Desafios Combinados

//Par e dentro do intervalo
let numeroPar = 86;
console.log(numeroPar % 2 === 0 && numeroPar >= 1 && numeroPar <= 100);

//Classificação de nota
let nota = 7;
if (nota >= 9) {
  console.log("exelente");
}
if (nota >= 7 && nota < 9) {
  console.log("Aprovado");
}
if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
}
if (nota < 5) {
  console.log("Reprovado");
};

//Calculadora de IMC
let peso = 63;
let altura = 1.62;
let imc = peso / (altura ** 2);
console.log(`O imc é: ${imc.toFixed(2)}`);
if (imc < 18.5) {
  console.log("Abaixo do peso");
}
if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
}
if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
}
if (imc >= 30) {
  console.log("Obesidade");
};

//Jogo de adivinhar o número
const numerofixo = 10;
let numeroJogo = 25;
console.log(`O numero do usuario é igual ao numero fixo?: ${numerofixo === numeroJogo}
O numero é maior que o fixo?: ${numeroJogo > numerofixo}
`);

//function
function saudacao(x, b) {
  soma = x + b
  console.log(soma)
}
saudacao(1, 3)
saudacao(17, 8)
saudacao(6, 6)
saudacao(1, 1)
//Operadores Aritméticos com function

//calculadora
function numeroSoma(n1, n2, n3) {
  conta = n1 * n2 * n3
  console.log(conta)
}
numeroSoma(80, 90, 2)

//resto da divisão
function numeroUsuarioVerificador(usuario, resto) {
  verificador = usuario % resto
  console.log(verificador);
}
numeroUsuarioVerificador(4, 2)
console.log(verificador);
if (verificador >= 1) {
  console.log("impar")
}
else {
  console.log("par")
};

//potência com function
function potenciaNumero(numero, cubo) {
  potenciaCubo = numero ** cubo
  console.log(` o cubo do numero é ${potenciaCubo}`)
}
potenciaNumero(10, 3)

let aluno = false;
if (aluno == true) {
  console.log("presença");
}
else {
  console.log("falta");
}
// media
function situacaoAluno() {
  let nota1 = Number(prompt("informe a primeia nota:"))
  let nota2 = Number(prompt("informe a segunda nota:"))
  let nota3 = Number(prompt("informe a terceira nota:"))
  let media = (nota1 + nota2 + nota3) / 3
  if (media < 6) {
    alert("aluno reprovado")
  }
  else if (media >= 6 && media < 7) {
    alert("aluno em exame")
  } else {
    alert("aluno aprovado")
  }
}
situacaoAluno()
// função
function parEIntervalo() {
  let numeroParImpar = Number(prompt("informe um valor"))
  if (numeroParImpar > 0 && numeroParImpar <= 100) {
    if (numeroParImpar % 2 == 0) {
      alert("o numero está no intervalo de 1 a 100, e é par")
    }
    else {
      alert("fora do intervalo! de 1 a 100, e é impar")
    }
  }
  else {
    alert("fora do intervalo! de 1 a 100")
  }
}
parEIntervalo()

//classificação de nota
function classificacaoNota() {
  let notaClassificacao = Number(prompt("informe a nota:"))
  if (notaClassificacao >= 0 && notaClassificacao <= 10) {
      if(notaClassificacao >= 9){
        alert("exelente")
      }else if(notaClassificacao >= 7){
        alert("aprovado")
      }else if(notaClassificacao >= 5){
        alert("recuperação")
      }
      else{
        alert("Reprovado")
      }
  }
  else {
     alert("nota invalida!")
  }
}
classificacaoNota()

//calculadora de imc 
function calculadoraIMC(){
  let peso = Number(prompt("informe seu peso:"))
  let altura = Number(prompt("informe sua altura"))
  let imc = peso/(altura ** 2)
  if (imc < 18.5) {
   alert("Abaixo do peso")
}
else if(imc >= 18.5 && imc < 25) {
  alert("Peso normal")
}
else if(imc >= 25 && imc < 30) {
  alert("Sobrepeso")
}
else if(imc >= 30) {
   alert("Obesidade")
}
} calculadoraIMC()
