export default function login() {
    document.querySelector("#atv8 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        let login = {
            user: "admin",
            senha: "1234"
        }
        
        let usuario = document.querySelector("#usuario").value
        let senha = document.querySelector("#senha").value
        console.log(usuario, senha)

        if (usuario == login.user && senha == login.senha) {
            alert("login realizado com sucesso!")
            document.querySelector("#loginFeedback").innerText = ""
        } else {
            document.querySelector("#loginFeedback").innerText = "Usuario ou senha incorretos..."
        }
        })
}