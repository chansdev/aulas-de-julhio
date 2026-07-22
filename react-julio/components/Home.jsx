import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault();
    navigate("/bemvindo", {
      state: { nome }
    });
  }

  return (
    <form onSubmit={entrar}>
      <h1>Digite seu nome</h1>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />

      <button>Entrar</button>
    </form>
  );
}

export default Home;