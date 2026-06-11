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


/*12. Folha de pagamento*/
