export default function mediaDeUmAluno() {
    document.querySelector("#btAtv3").addEventListener("click", () => {
        let nota1 = 7;
        let nota2 = 9;

        console.log(`Suas notas foram\nNota 1: ${nota1}\nNota 2: ${nota2}`)
        console.log(`Sua média foi: ${(nota1 + nota2) / 2}`)
    })
}