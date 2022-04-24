import "./styles/styles.css";
import "antd/dist/antd.less";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    );
};

export default App;
