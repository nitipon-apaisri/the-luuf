import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingView";
import Marketplace from "./pages/marketplace/MarketplaceView";
import TokenPage from "./pages/token/TokenView";
import AccountPage from "./pages/account/AccountView";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/token/:tokenId" element={<TokenPage />} />
                <Route path="/account/:accountName" element={<AccountPage />} />
            </Routes>
        </div>
    );
};

export default App;
