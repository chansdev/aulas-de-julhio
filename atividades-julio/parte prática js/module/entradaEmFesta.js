export default function entradaEmFesta() {
    document.querySelector("#btAtv1").addEventListener("click", () => {
        let idade = prompt("Por favor nos informe sua idade:")
        idade >= 18 ? console.log("Bem vindo a festa!") : console.log("Desculpe mas você ainda não tem idade para entrar aqui...")
    })
}