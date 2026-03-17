export default function menuBanco() {
    document.querySelector("#atv10 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        let result = document.querySelector("#atv10 #bancoResult")

        switch (document.querySelector("#atv10 form #menubanco").value) {
            case "ver-saldo":
                result.innerText = "Saldo: R$ 00,00";
                break;
            case "depositar":
                result.innerText = "Depositando...";
                break;
            case "sacar":
                result.innerText = "Sacando...";
                break;
            case "sair":
                result.innerText = "Saindo...";
                break;
        }
    })
}