export default function menu() {
    document.querySelector("#atv4 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        let result = document.querySelector("#atv4 #menuResult")

        switch (document.querySelector("#atv4 form #menu").value) {
            case "perfil":
                result.innerText = "Entrando em perfil...";
                break;
            case "editar-perfil":
                result.innerText = "Entrando em editar perfil...";
                break;
            case "configuracoes":
                result.innerText = "Entrando em configurações...";
                break;
            case "sair":
                result.innerText = "Saindo...";
                break;
        }
    })
}