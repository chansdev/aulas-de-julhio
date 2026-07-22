import { useLocation } from "react-router-dom";

function BemVindo() {
  const location = useLocation();
  const nome = location.state?.nome;

  return (
    <h1>Bem-vindo, {nome}!</h1>
  );
}

export default BemVindo;