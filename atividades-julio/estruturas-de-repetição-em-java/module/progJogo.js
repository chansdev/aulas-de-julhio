export default function progJogo() {
    document.querySelector("#atv4 button").addEventListener("click", () => {
        let fase = 1
        const faseando = setInterval(() => {
            if (fase <= 5) {
                document.querySelector("#atv4 p").innerHTML += `Entrando na fase ${fase}<br>`
                fase++
            } else {
                document.querySelector("#atv4 p").innerHTML += `Parabéns! Você chegou ao final do jogo.
    `
                clearInterval(faseando)
            }
        }, 2000)
    })
}