export default function validacaoIdade() {
    const idade = document.querySelector("#atv1 form #idade")

    document.querySelector("#atv1 form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (+idade.value >= 18) {
            alert("Cadastro realizado com sucesso!")
            idade.value = null
        } else if (+idade.value < 18) {
            alert("Desculpe mas você não tem idade o suficiente.")
            idade.value = null
        }
    })
}