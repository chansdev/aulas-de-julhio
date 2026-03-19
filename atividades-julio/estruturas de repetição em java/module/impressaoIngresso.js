export default function impressaoIngresso() {
    document.querySelector("#atv5 button").addEventListener("click", () => {
            let ingresso = 1
            const carregando = setInterval(() => {
                if (ingresso <= 8) {
                    document.querySelector("#atv5 p").innerHTML += `Impresso ingresso ${ingresso}<br>`
                    ingresso++
                } else {
                    document.querySelector("#atv5 p").innerHTML += `Todos foram impressos!`
                    clearInterval(carregando)
                }
            }, 2000)
    })
}