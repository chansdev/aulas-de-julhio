export default function verificacaoIdade() {
    document.querySelector("#atv7 button").addEventListener("click", () => {
        let idade = 15
        const comparando = setInterval(() => {
            if (idade <= 17) {
                document.querySelector("#atv7 p").innerHTML += `${idade} anos - Entrada negada.<br>`
                idade++
            } else if (idade >= 18 && idade <= 22) {
                document.querySelector("#atv7 p").innerHTML += `${idade} anos - Entrada permitida.<br>`
                idade++
            } else {
                document.querySelector("#atv7 p").innerHTML += `Todas idades comparadas.`
                clearInterval(comparando)
            }
        }, 500)
    })
}