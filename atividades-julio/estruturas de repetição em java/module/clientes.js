export default function clientes() {
    document.querySelector("#atv10 button").addEventListener("click", () => {
        let nota = 0
        let aprovados = 0

        const comparando = setInterval(() => {
            if (nota <= 10) {
                if (nota < 7) {
                    document.querySelector("#atv10 p").innerHTML += `Client que tirou ${nota} não passa<br>`
                    nota++
                } else if (nota >= 7 && nota <= 10) {
                    document.querySelector("#atv10 p").innerHTML += `Cliente que tirou ${nota} passa<br>`
                    nota++
                    aprovados++
                }
                } else {
                    document.querySelector("#atv10 p").innerHTML += `Todas notas comparadas.<br> ${aprovados} clientes aprovados.`
                    clearInterval(comparando)
                }
        }, 500)
    })
}