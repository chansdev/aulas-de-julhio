export default function compraEmUmaLoja() {
    document.querySelector("#btAtv2").addEventListener("click", () => {
        const camiseta = 30;
        let calca = 120;
        let tenis = 200;

        console.log(`Suas atuais compras são:\nCamiseta: R$ ${camiseta},00\nCalça: R$ ${calca},00\nTenis: R$ ${tenis},00`)
        console.log(`O total de suas compras da R$ ${camiseta + calca + tenis},00`)
    })
    
}