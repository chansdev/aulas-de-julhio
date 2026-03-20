export default function descontoEmLoja() {
    document.querySelector("#btAtv7").addEventListener("click", () => {
        let valor = 120
        let desconto = 20

        console.log(`Valor da compra: R$ ${valor},00\nDesconto: R$ ${desconto}\nValor final: R$ ${valor - desconto},00`)
    })
}