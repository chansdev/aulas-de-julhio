export default function promocao() {
    document.querySelector("#atv8 button").addEventListener("click", () => {
        let produto = 1
        const comparando = setInterval(() => {
            if (produto <= 20) {
                if (produto % 2 == 0) {
                    document.querySelector("#atv8 p").innerHTML += `Produto ${produto} está em promoção<br>`
                    produto++
                } else {
                    document.querySelector("#atv8 p").innerHTML += `Produto ${produto} não está em promoção<br>`
                    produto++
                }
            } else {
                document.querySelector("#atv8 p").innerHTML += `Todos produtos comparados.`
                clearInterval(comparando)
            }
        }, 500)
    })
}