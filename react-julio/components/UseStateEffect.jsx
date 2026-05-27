import { use, useEffect, useState } from "react"

function UseStateEffect() {
    const [temaEscuro, setTemaEscuro] = useState(false)

    const [numero, setNumero] = useState(0)
    
        useEffect( () => {
            if (numero == 50) {
                alert("dêu a poxa pra q tanto cliquekkkkkkkkkk")
                document.title = "Você clica bastante ein"
            } else if (numero == 100) {
                alert("tem nem pra q...")
                document.title = "ja deu de clique ja..."
            }
        }, [numero])

    const [curtido, setCurtido] = useState(false)
    const [likes, setLikes] = useState(326)

    const [aparecendo, setAparecendo] = useState(true)
    const [mostrar, setMostrar] = useState("Ocultar")

    const [conteudo, setConteudo] = useState("")
    const [conteudoClicado, setConteudoClicado] = useState(false)

    useEffect(() => {
        if (conteudoClicado) {
            setConteudo("Carregando...")

        setTimeout(() => {
            setConteudo("MOSTRANDO CONTEUDO MOSTRANDO CONTEUDO MOSTRANDO CONTEUDO MOSTRANDO CONTEUDO MOSTRANDO CONTEUDO MOSTRANDO CONTEUDO ")
        }, 3000)
    }
    }, [conteudoClicado])

    return (    
        <div style={{backgroundColor: temaEscuro ? "black" : "white", color: temaEscuro ? "white" : "black", width: "100%", padding: "10px"}}>
            <h1>Atividade useState e useEffect</h1>
            <h2>Alterar o tema da página</h2>
            <p style={{padding: '5px', backgroundColor: "gray", cursor: 'pointer', userSelect: "none"}} onClick={() => {temaEscuro ? setTemaEscuro(false) : setTemaEscuro(true)}}>Alterar Tema</p>


            <h2>Cilque para aumentar o numero</h2>
            <p style={{padding: '5px', backgroundColor: "gray", cursor: 'pointer', userSelect: "none"}} onClick={() => {setNumero(numero + 1)}}><strong>Número:</strong>{numero}</p>
            <p style={{padding: '5px', backgroundColor: "gray", cursor: 'pointer', userSelect: "none"}} onClick={() => {numero > 0 ? setNumero(numero - 1) : setNumero(0)}}>Diminuir</p>

            <h2>Likes Instagram</h2>
            <p style={{padding: '5px', backgroundColor: "red", cursor: 'pointer', userSelect: "none", color: "white"}} onClick={() => {curtido ? (setCurtido(false), setLikes(likes - 1)) : (setCurtido(true), setLikes(likes + 1))}}><strong>❤</strong> {likes}</p>

            <h2>Mostrar e Ocultar Texto</h2>
            <p style={{padding: '5px', backgroundColor: "gray", cursor: 'pointer', userSelect: "none"}} onClick={() => {aparecendo ? (setAparecendo(false), setMostrar("Mostrar")) : (setAparecendo(true), setMostrar("Ocultar"))}}>{mostrar} texto</p>
            <p style={{display: aparecendo ? "block" : "none"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            
            <h2>Carregar Conteudo</h2>
            <p style={{padding: '5px', backgroundColor: "gray", cursor: 'pointer', userSelect: "none"}} onClick={() => setConteudoClicado(true)}>Clique para carregar conteudo</p>
            <p>{conteudo}</p>
        </div>
    )
}

export default UseStateEffect