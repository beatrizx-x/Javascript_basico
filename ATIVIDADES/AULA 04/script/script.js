/*Crie uma variável com uma nota de 0 a 100. Use if/else para classificar: A (>= 90), B (>= 80), C (< 80). Exiba a classificação.
let nota = Number(prompt("informe uma nota"));
if(nota >= 90){
    alert("o conceito é A")
}
else if(nota >= 80){
    alert("o conceito é B")
}
else{
    alert("o conceito é C")
}
*/

/*Crie uma variável com número de 1 a 7. Use switch para exibir o nome do dia correspondente (1 = Domingo, 2 = Segunda...). Caso inválido, exiba "Dia inválido".
let numero = Number(prompt("informe um numero de 1 a 7:"));
switch (numero) {
    case 1: alert("domingo")
        break;
    case 2: alert("segunda")
        break;
    case 3: alert("terça")
        break; 
    case 4: alert("quarta")
        break; 
    case 5: alert("quinta")
        break; 
    case 6: alert("sexta")
        break; 
    case 7: alert("sabado")
        break;
        default: alert("dia inválido")
}*/

/* Crie uma variável com uma temperatura. Use o operador ternário para exibir "Quente" se maior que 25, ou "Frio" caso contrário.
let temperatura = Number(prompt("informe a temperatura:"))
let temp = temperatura > 25 ? "quente": "frio"
alert(temp)*/

 /*Crie duas variáveis: maior de idade (boolean) e tem carteira (boolean). Use if com && para verificar se a pessoa pode dirigir (maior de idade E tem carteira).
 let maiorIdade = (prompt("informe false para menor ou true se for maior de idade")) === "true"
 let carteira =(prompt("tem carteira de motorista")) ==="true"
 if(maiorIdade && carteira){
    alert("pode dirigir")
 }else{
    alert("não pode dirigir")
 }*/


/*Crie uma variável com um número. Verifique se ele está entre 10 e 20 (inclusive). Exiba "Dentro" ou "Fora" do intervalo.
let numero = Number(prompt("informe um numero"))
if(numero >=10 && numero <=20){
    alert("dentro do intervalo")
}else{
    alert("fora do intervalo")
}
*/


/*Você tem um if/else que verifica cores. Reescreva-o usando switch. Cores: "vermelho" → "Pare", "amarelo" → "Atenção", "verde" → "Siga"

let cor = prompt("escolha uma cor").toLocaleLowerCase()
switch(cor)
{ 
case "vermelho": alert("pare")
    break;
 case "amarelo": alert("atenção")
    break;
case "verde": alert("siga")
    break;
}
*/


//  -------------------> Desafio Autônomo


/* Crie uma variável com idade e use if/else para decidir se é maior de idade ou não
let idade = Number(prompt("digite sua idade:"));
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

/*Múltiplos casos com switch: Crie um switch que classifique um número de 1 a 3 como "Baixo", "Médio" ou "Alto"

let numero = Number(prompt("escolha um numero de 1 a 3:"))
switch(numero){
    case 1 : alert("baixo")
        break;
    case 2 : alert("médio")
        break;
    case 3 : alert("alto")
        break;
    default: alert("invalido");

}
*/
/*Ternário: Use operador ternário para verificar se um número é positivo ou negativo*/