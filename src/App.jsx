import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Route>
    </Routes>
  );
}

export default App;

// Paleta de Colores
// bg-cyan-500
// bg-green-400
// bg-lime-700
// bg-lime-400
// bg-neutral-900
