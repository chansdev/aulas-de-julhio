export default function login() {
    document.querySelector("#atv9 form").addEventListener("submit", (event)=> {
        event.preventDefault();

        if (+document.querySelector("#temperatura").value.replace(",", ".") < 18) {
            document.querySelector("#tempFeedback").innerText = "Frio"
        } else if (+document.querySelector("#temperatura").value.replace(",", ".") >= 18 && +document.querySelector("#temperatura").value.replace(",", ".") <= 25) {
            document.querySelector("#tempFeedback").innerText = "Confortável"
        } else {
            document.querySelector("#tempFeedback").innerText = "Quente"
        }
        })
}