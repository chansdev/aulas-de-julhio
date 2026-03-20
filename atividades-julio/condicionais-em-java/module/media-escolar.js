export default function validacaoMedia() {
    const media = document.querySelector("#atv2 form #media")

    document.querySelector("#atv2 form").addEventListener("submit", (event) => {
        event.preventDefault();
        media.value = media.value.replace(",", ".")

        if (+media.value >= 7) {
            alert("Parebéns! Passou.")
            media.value = null
        } else {
            alert("Desculpe você reprovou.")
            media.value = null
        }
    })
}