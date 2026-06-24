function alterarTitulo() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
}

function mostrarMensagem() {
    alert("você clicou no botão!")
};

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "ola," + nome + "!";
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado1").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultado1").innerText = "Você é menor de idade.";
    }
}

function trocarImagem() {
    document.getElementById("imagem").src = "img/image2.jpg";
}

function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}

function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}

function removerAviso() {
    document.getElementById("aviso").remove();
}

function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
}




 function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            if (textoTarefa === "") {
                alert("Digite uma tarefa antes de adicionar.");
                return;
            }

            let item = document.createElement("li");
            item.innerText = textoTarefa + " ";

            let botaoExcluir = document.createElement("button");
            botaoExcluir.innerText = "Excluir";

            botaoExcluir.onclick = function() {
                item.remove();
            };

            item.appendChild(botaoExcluir);
            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";}