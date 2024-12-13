import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Register } from "./pages/index";

function App() {
  return (
    <Router>
      <main className="relative bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
