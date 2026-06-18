 import promptSync from 'prompt-sync';
 import boxen from 'boxen';
 const prompt = promptSync();
 function alert(mensagem) {
  console.log(
    boxen(mensagem, { 
      padding: 1, 
      borderStyle: 'double', 
      borderColor: 'red', 
      title: '🚨 ALERTA',
      titleAlignment: 'center'
    })
  );
}

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// //--------------------

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0)
//         console.log(i);
// }


// //-----------------

// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

// //-------------------------

// let numero = 7
// for (let i = 1; i <= 10; i++) {
//     console.log(numero + "x" + i + "=" + (numero * i));
// }

// //----------------------
// /*addEventListener('click', function(){
//     console.log("clicou")
// })*/


// let bateria = 100
// while (bateria > 0) {
//     console.log("Bateria: " + bateria + "%");
//     bateria -= 10;
// }

// //-------------------------------
// //do significa "faça algo", while significa enqaunto
// let credito = 0
// do {
//     console.log("tentando jogar...");
// } while (credito > 0);

//------------------
// let opcao = 0
// do {
//     opcao = Number(prompt("escolha a opção:"))
//     switch (opcao){
//         case 1: alert("jogar")
//             break;
//         case 2: alert("ranking")
//             break;
//         case 3: alert("sair")
//             break;
//             default: alert("opção invalida")
//     }
// }    while (opcao !== 3) 



//  let playlist = [
//     "musica 1",
//     "musica 2",
//     "musica 3",
// ];
// for(let i = 0; i < playlist.length; i++){
//   console.log(playlist,[i]);
// }
 
// notas = [7, 8, 10, 5]
// let soma = 0
// for(let i = 0; i < notas.length; i++){
//     soma = soma + notas[i]
// }
// alert("valor total:" + soma)

let filmes = ["filme1", "filme2", "filme3", "filme4", "filme5"]
for(let i = 0; i < filmes.length; i++){
    alert(filmes[i])
}