import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/rockets" element={<h1>Rockets</h1>} />
          <Route path="/missions" element={<h1>Missions</h1>} />
          <Route path="/my-profile" element={<h1>My Profile</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
