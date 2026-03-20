export default function contadorCurtidas() {
    
    document.querySelector("#atv2 button").addEventListener("click", () => {
        for (let i = 1; i <= 10; i++) {
            document.querySelector("#atv2 p").innerHTML += `Curtidas: ${i}<br>`
        }
    })
}