for( let i = 0; i < 5; i++){
    console.log("bom dia")
}
//----------------------------------
let soma = 0
for( let i = 0; i < 5; i++){
soma = soma + 2
console.log(soma)
} 
//------------------------------------

for(let i = 0; i < 5; i++){
    if(i % 2 == 0){
        continue
    }
    else{
        console.log("numero par:"+ i)
    }
}
//---------------------------------------
let opcao = "sim"
while(opcao != "sim"){
    console.log("ola, seja bem vindo")
}