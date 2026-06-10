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

/*## 5. Média de notas*/
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