/*Lista de Exercícios - Estruturas Condicionais

let numero1 = Number(prompt("digite um numero"))
let numero2 = Number(prompt("digite outro numero"))
if(numero1 >= numero2){
    alert(numero1)
}else{
    alert(numero2)
}*/

/*2. Número positivo ou negativo
let valor = Number(prompt("digite um valor positivo ou negativo "))
if(valor >=0){
    alert("positivo")
}else{
    alert("negativo")
}*/

/* 3. Identificação de sexo
let sexo = prompt("digite F para feminino ou M para masculino").toLocaleUpperCase()
const sexoF = "F"
const sexoM = "M"
if(sexo === sexoF){
    alert("Feminino")
} else if(sexo === sexoM){
    alert("masculino")
}else{
    alert("invalido")
}*/

/* 4. Vogal ou consoante
const vogalA = "a"
const vogalE = "e"
const vogalI = "i"
const vogalO = "o"
const vogalU = "u"
let vogalConsoante = prompt("digite uma letra do alfabeto para saber se é vogal ou consoante")
if(vogalConsoante === vogalA || vogalConsoante === vogalE || vogalConsoante === vogalI || vogalConsoante === vogalO ||  vogalConsoante === vogalU){
    alert("vogal")
}else{
    alert("consoante")
}
*/

/*## 5. Média de notas
let nota1 = Number(prompt("digite sua primeira nota"))
let nota2 = Number(prompt("digite sua segunda nota"))
let soma = (nota1 + nota2) / 2 
if(soma === 10){
    alert("Aprovado com Distinção")
} else if(soma >=7 && soma <= 9.99){
    alert("Aprovado")
}else{
    alert("reprovado")
}
*/
/*6. Maior de três números
let numero1 = Number(prompt("digite o primeiro numero:"))
let numero2 = Number(prompt("digite o segundo numero:"))
let numero3 = Number(prompt("digite o terceiro numero:"))
if(numero1 >= numero2 && numero1 >= numero3){
    alert(numero1)
}else if(numero2 >= numero1 && numero2 >= numero3){
    alert(numero2)
}else if(numero3 >= numero1 && numero3 >= numero2){
    alert(numero3)
}*/

/* 7. Maior e menor de três números
let numero1 = Number(prompt("digite o primeiro numero:"))
let numero2 = Number(prompt("digite o segundo numero:"))
let numero3 = Number(prompt("digite o terceiro numero:"))
let maior;
let menor;
if(numero1 >= numero2 && numero1 >= numero3){
   maior = numero1
}else if(numero2 >= numero1 && numero2 >= numero3){
    maior = numero2
}else{
    maior = numero3
}

if(numero1 <= numero2 && numero1 <= numero3){
   menor = numero1
}else if(numero2 <= numero1 && numero2 <= numero3){
    menor = numero2
}else{
    menor = numero3}

alert(`numero  maior é ${maior}, e o numero menor é ${menor}`)
*/

/*8. Produto mais barato
let produto1 = Number(prompt("preço do produto 1:"))
let produto2 = Number(prompt("preço do produto 2:"))
let produto3 = Number(prompt("preço do produto 3:"))
if(produto1 <= produto2 && produto1 <= produto3){
    alert(`o produto ${produto1} é mais barato`)
}
else if(produto2 <= produto1 && produto2 <= produto3){
    alert(`o produto ${produto2} é mais barato`)
}
else{
    alert(`o produto ${produto3} é mais barato`)
}
*/
/*Ordem decrescente
let n1 = Number(prompt("numero 1"))
let n2 = Number(prompt("numero 2"))
let n3 = Number(prompt("numero 3"))
let maior;
let menor;
let meio;

if(n1 >= n2 && n1 >= n3){
maior = n1
}
else if(n2 >= n1 && n2 >= n3){
    maior = n2
}
else{
    maior = n3
}
 //--------
if(n1 >= n2 && n2 <= n3){
menor = n2
}
else if(n2 <= n1 && n1 <= n3){
    menor = n1
}
else{
    menor = n3
}

//----
if(n1 !== maior && n1 !==menor){
    meio = n1
}
else if(n2 !== maior && n2 !== menor){
    meio = n2
}
else{
    meio = n3
}
alert(`${maior} ${meio} ${menor}`)*/

/*10. Turno de estudo
let turno = prompt("em quem turno você estuda?").toLocaleUpperCase()

switch (turno) {
    case "M": alert("Bom dia!")
        break;

    case "V": alert("Boa tarde!")
        break;
       
    case "N": alert("Boa noite!")
        break;

    default: alert("inválido")
    }*/

/* 11. Reajuste salarial
    let salario = Number(prompt("digite seu salario:"))
    let percentual;
    if (salario <= 280){
        percentual = 20;
    } else if( salario <= 700){
        percentual = 15;
    } else if(salario <= 1500){
        percentual = 10;
    }else{
        percentual = 5;
    } 
    let aumento = (salario * percentual)/ 100
    let novoSalario = aumento + salario
alert(`Seu salario é ${salario}, o percentual aplicado é ${percentual}%, o valor do aumento será ${aumento}, e seu novo salario será ${novoSalario} `)*/


/*12. Folha de pagamento
let valorHoraTrabalhada = Number(prompt("Valor da hora trabalhada:"))
let horasTrabalhadaMes = Number(prompt("Quantidade de horas trabalhadas no mês:"))
let horaEValor = valorHoraTrabalhada * horasTrabalhadaMes
let descontoIr;

if(horaEValor > 2500){
    descontoIr = 20/100
}
else if(horaEValor >= 1500){
    descontoIr = 10/100
}

else if(horaEValor >= 900){
  descontoIr = 5/100
}
else{
   descontoIr = 0
}

const descontoINSS = 10/100
const descontoSindicato = 3/100
const descontoFGTS = 11/100
const valorIr = horaEValor * descontoIr
const valorINSS = horaEValor * descontoINSS
const valorFGTS = horaEValor * descontoFGTS
const valorSindicato = horaEValor * descontoSindicato
let totalDescontosSemFGTS = valorINSS + valorIr
let salarioLiquido =  horaEValor - totalDescontosSemFGTS 
alert(`total de descontos: ${totalDescontosSemFGTS}, salario líquido: ${salarioLiquido}, salario bruto: ${horaEValor}`)*/


/*13. Dia da semana
let dias = Number(prompt("digite um numero de 1 a 7:"));
switch (dias) {
  case 1:
    alert("Domingo");
    break;
  case 2:
    alert("Segunda");
    break;
  case 3:
    alert("terça");
    break;
  case 4:
    alert("quarta");
    break;
  case 5:
    alert("quinta");
    break;
  case 6:
    alert("sexta");
    break;
  case 7:
    alert("Sábado");
    break;
  default:
    alert("invalido");
}
*/


/*14. Conceito por média
let n1 = Number(prompt("digite sua primeira nota:"))
let n2 = Number(prompt("digite sua segunda nota:"))
let media = (n1 + n2)/2
if(media >= 9.0){
    alert(`aprovado. suas notas são ${n1} e ${n2}, sua média é ${media}. Tirou A. `)
}else if(media >= 7.5){
    alert(`aprovado . suas notas são ${n1} e ${n2}, sua média é ${media}. Tirou B.`)
}
else if(media >= 6.0){
    alert(`aprovado. suas notas são ${n1} e ${n2}, sua média é ${media}.Tirou C.`)
}
else if(media >= 4.0){
    alert(`reprovado. suas notas são ${n1} e ${n2}, sua média é ${media}. Tirou D.`)
}
else{
    alert(`reprovado. suas notas são ${n1} e ${n2}, sua média é ${media}. Tirou E.`)
}*/

/*15. Tipos de triângulo
let trianguloLado1 = Number(prompt("digite um lado do triangulo"))
let trianguloLado2 = Number(prompt("digite o outro lado do triangulo:"))
let trianguloLado3 = Number(prompt("digite o proximo lado do triangulo:"))
let triangulo;
if(trianguloLado1 + trianguloLado2 > trianguloLado3 && trianguloLado2 + trianguloLado3 > trianguloLado1 && trianguloLado1 + trianguloLado3 > trianguloLado2){
    triangulo = true
}
else{
    triangulo = false
}

if(triangulo && trianguloLado1 === trianguloLado2 && trianguloLado2 === trianguloLado3){
    alert(`triangulo Equilátero`)
}
else if( triangulo && trianguloLado1 !== trianguloLado2 && trianguloLado2 !== trianguloLado3 && trianguloLado1 !== trianguloLado3){
    alert(`triangulo escaleno`)
}
else if((trianguloLado1 === trianguloLado2 && trianguloLado2 !== trianguloLado3) || (trianguloLado3 === trianguloLado2 && trianguloLado2 !== trianguloLado1)){
    alert(`triangulo Isósceles`)
}
else{
    alert("não é triangulo")
}*/


/*16. Equação do segundo grau
let a = Number(prompt("Digite o valor de A:"));
if (a === 0) {
    alert("Como o A é igual a zero, isso não é uma equação de segundo grau.");
} 
else {
    let b = Number(prompt("Digite o valor de B:"));
    let c = Number(prompt("Digite o valor de C:"));
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        alert(`O Delta deu ${delta} (negativo). A equação não possui raízes reais.`);
    } 
    else if (delta === 0) {
        let raizUnica = -b / (2 * a);
        alert(`O Delta é zero. A equação possui apenas uma raiz real: ${raizUnica}`);
    } 
    else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        
        alert(`O Delta deu ${delta}. A equação possui duas raízes reais:
        X'  = ${raiz1}
        X'' = ${raiz2}`);
    }
}*/
/*17. Ano bissexto
let ano = Number(prompt("digite o ano:"))
if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    alert("Ano bissexto")
}
else{
    alert("não é bissexto")
}*/

/*18. Par ou ímpar*/
let numero = Number(prompt("digite um numero"))
let verificador = numero % 2
if(verificador === 0){
    alert("par")
}