export default function acessoCinema() {
    document.querySelector("#btAtv8").addEventListener("click", () => {
        let idade = prompt("Informe sua idade:")

    idade <= 12 ? console.log("Parabéns! Hoje o seu ingresso sai de graça") : console.log("Diriga-se ao caixa para pagar.")
    })
}