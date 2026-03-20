export default function notas() {
    document.querySelector("#atv9 button").addEventListener("click", () => {
        let nota = 0
        const comparando = setInterval(() => {
            if (nota <= 10) {
                if (nota < 7) {
                    document.querySelector("#atv9 p").innerHTML += `Nota ${nota} não passa<br>`
                    nota++
                } else if (nota >= 7 && nota <= 10) {
                    document.querySelector("#atv9 p").innerHTML += `Nota ${nota} passa<br>`
                    nota++
                }
                } else {
                    document.querySelector("#atv9 p").innerHTML += `Todas notas comparadas.`
                    clearInterval(comparando)
                }
        }, 500)
    })
}