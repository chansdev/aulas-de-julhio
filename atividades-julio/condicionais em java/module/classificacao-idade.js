export default function classificacaoIdade() {
    document.querySelector("#atv5 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        
        if (+document.querySelector("#classificacao").value < 18 && +document.querySelector("#classificacao").value > 12) {
            document.querySelector("#resultClassif").innerText = "Adolescente"
        } else if (+document.querySelector("#classificacao").value < 13) {
            document.querySelector("#resultClassif").innerText = "Infantil"
        } else {
            document.querySelector("#resultClassif").innerText = "Adulto"
        }
    })
}