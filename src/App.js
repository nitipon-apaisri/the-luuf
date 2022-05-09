import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingView";
import Marketplace from "./pages/marketplace/MarketplaceView";
import TokenPage from "./pages/token/TokenView";
import AccountPage from "./pages/account/AccountView";
import CollectionView from "./pages/collection/CollectionView";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/token/:tokenId" element={<TokenPage />} />
                <Route path="/account/:accountName" element={<AccountPage />} />
                <Route path="/:accountName/collection/:collectionName" element={<CollectionView />} />
            </Routes>
        </div>
    );
};

export default App;
