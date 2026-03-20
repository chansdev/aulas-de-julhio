export default function parouimpar() {
    document.querySelector("#atv6 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        
        if (+document.querySelector("#num").value % 2 == 0) {
            document.querySelector("#parouimpar").innerText = "par"
        } else {
            document.querySelector("#parouimpar").innerText = "ímpar"
        }
    })
}