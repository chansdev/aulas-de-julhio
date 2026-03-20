export default function verificacaoPar() {
    document.querySelector("#btAtv6").addEventListener("click", () => {
        let numero = prompt("Qual o número?")

        numero % 2 == 0 ? console.log("par") : console.log("ímpar")
    })
}