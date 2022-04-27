import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import Marketplace from "./pages/marketplace/Marketplace";
import TokenPage from "./pages/token-page/TokenPage";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/token/:tokenId" element={<TokenPage />} />
            </Routes>
        </div>
    );
};

export default App;
