import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import BemVindo from "../components/BemVindo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bemvindo" element={<BemVindo />} />
    </Routes>
  );
}

export default App;