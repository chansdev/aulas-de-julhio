export default function tentativasLogin() {
    let tentativas = 4

    document.querySelector("#atv1 form").addEventListener("submit", (event) => {
        event.preventDefault();

        let senha = "1234" 

            if (document.querySelector("#atv1 form #senhaLogin").value != senha && tentativas > 0) {
                alert("Senha incorreta")
                tentativas--
                document.querySelector("#atv1 form .tentativas").innerText = "Tentativas restantes: " + tentativas
                document.querySelector("#atv1 form #senhaLogin").value = ""
            } else if (document.querySelector("#atv1 form #senhaLogin").value == senha) {
                alert("Login realizado com sucesso")                
            } else {
                alert("Infelizmente suas tentativas acabaram... Sua conta foi bloqueada por 5 minnutos.")
                document.querySelector("#atv1 form #senhaLogin").readOnly = true
            }
        
        
    })
}