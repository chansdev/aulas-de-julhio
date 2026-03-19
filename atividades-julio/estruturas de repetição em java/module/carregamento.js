export default function carregamento() {
    document.querySelector("#atv3 button").addEventListener("click", () => {
            let carregamento = 0
            const carregando = setInterval(() => {
                if (carregamento < 100) {
                    document.querySelector("#atv3 p").innerHTML = `${carregamento}% carregado...<br>`
                    carregamento += 10
                } else {
                    document.querySelector("#atv3 p").innerHTML = `${carregamento}% carregado!`
                    clearInterval(carregando)
                }
            }, 2000)
    })
}