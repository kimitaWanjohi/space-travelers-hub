import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Missions from "./components/Missions";
import RocketList from './components/RocketList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<RocketList />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<h1>My Profile</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
