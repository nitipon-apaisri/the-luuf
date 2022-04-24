import { useEffect } from "react";
import MainLayout from "../../layout";

const LandingPage = () => {
    useEffect(() => {
        document.title = "landing";
    }, []);
    return <MainLayout></MainLayout>;
};

export default LandingPage;
