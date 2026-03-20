export default function numerosPares() {
    document.querySelector("#atv6 button").addEventListener("click", () => {
        let numero = 1
        const comparando = setInterval(() => {
            if (numero <= 20) {
                if (numero % 2 == 0) {
                    document.querySelector("#atv6 p").innerHTML += `${numero} é par<br>`
                    numero++
                } else {
                    document.querySelector("#atv6 p").innerHTML += `${numero} é impar<br>`
                    numero++
                }
            } else {
                document.querySelector("#atv6 p").innerHTML += `Todos numeros comparados.`
                clearInterval(comparando)
            }
        }, 500)
    })
}