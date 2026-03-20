export default function divisaoConta() {
    document.querySelector("#btAtv5").addEventListener("click", () => {
        let conta = prompt("Quanto deu a conta?")
        let pessoas = prompt("Quantas pessoas vão pagar?")

        console.log(`Dá R$ ${conta / pessoas},00 pra cada.`)
    })
}