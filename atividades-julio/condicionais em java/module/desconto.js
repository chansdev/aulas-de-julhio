export default function desconto() {
    document.querySelector("#atv7 form").addEventListener("submit", (event)=> {
        event.preventDefault();
        const  valor = document.querySelector("#compraValor").value.replace(",", ".")

        console.log(+valor)
        if (+valor > 100 && +valor < 200) {
            document.querySelector("#valorinicial").innerText = valor
            document.querySelector("#desconto").innerText = "10%"
            document.querySelector("#valorfinal").innerText = valor - (valor * 0.1)
        } else if (+valor > 200) {
            document.querySelector("#valorinicial").innerText = valor
            document.querySelector("#desconto").innerText = "20%"
            document.querySelector("#valorfinal").innerText = valor - (valor * 0.2)
        } else {
            document.querySelector("#valorinicial").innerText = valor
            document.querySelector("#desconto").innerText = "Sem desconto."
            document.querySelector("#valorfinal").innerText = valor
        }
    })
}