export default function verificacaoEstoque() {
    const opc = document.querySelector("#atv3 form #estoque")

    let produtos = {
        prod1: 15,
        prod2: 4,
        prod3: 0,
        prod4: 7
    }


    document.querySelector("#atv3 form").addEventListener("submit", (event) => {
        event.preventDefault();
        let produto = document.querySelector("#estoque").value
        console.log(produtos[produto])

        if (produtos[produto] <= 0) {
            alert("Perdão mas esse produto está em falta...")
        } else {
            alert("Compra realizada com sucesso!")
        }
    })
}