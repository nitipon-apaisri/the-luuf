import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Marketplace from "./pages/marketplace";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
            </Routes>
        </div>
    );
};

export default App;
