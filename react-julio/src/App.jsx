import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BemVindo from "./pages/BemVindo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bemvindo" element={<BemVindo />} />
    </Routes>
  );
}

export default App;