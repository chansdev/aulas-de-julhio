export default function verificarIdadeDirigir() {
    document.querySelector("#btAtv4").addEventListener("click", () => {
        let idade = prompt("Informe sua idade:")
        idade >= 18 ? console.log("Você pode dirigir") : console.log("Você ainda não tem idade para dirigir...")
    })
}