export default function eventoEstudantil() {
    document.querySelector("#btAtv10").addEventListener("click", () => {
        let idade = prompt("Qual a sua idade?")
        let estadoCivil = prompt("Qual seu estado civil?")

        if (idade && estadoCivil) {
            +idade < 18 || estadoCivil.toLowerCase() == "estudante" ? console.log("Pode entrar!") : console.log("Desculpe mas você não pode entrar.")
        }        
    })
}