document.getElementById("carregando").style.display = "none"

async function cachorros() {
    try {
        document.getElementById("carregando").style.display = "block";
        document.getElementById("imagem").style.display = "none";

        const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
        const dados = await resposta.json();
        const imagem = document.getElementById('imagem');
        imagem.src = dados.message;
    } catch (erro) {
        console.error('Erro ao buscar imagem de cachorro:', erro);
    } finally {
        document.getElementById("carregando").style.display = "none";
        document.getElementById("imagem").style.display = "block";
    }
}

document.querySelector("button").addEventListener("click", cachorros);