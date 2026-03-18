export default function comparacaoPreco() {
    document.querySelector("#btAtv9").addEventListener("click", ()=>{ 
        let loja1 = prompt("Qual preco da primeira loja")
        let loja2 = prompt("Qual o preco da seunda loja")

        loja1 > loja2 ? console.log("Loja 2 ta mais em conta") : console.log("Loja 1 ta mais em conta")
    })
}