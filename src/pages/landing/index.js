import { useEffect } from "react";
import Hero from "../../components/landing-page/Hero";
import TopCollection from "../../components/landing-page/TopCollection";
import TrendingCollection from "../../components/landing-page/TrendingCollection";
import MainLayout from "../../layout";

const LandingPage = () => {
    useEffect(() => {
        document.title = "THE LUUF - Discover, Collect, and Sell extraordinary NFTs";
    }, []);
    return (
        <MainLayout>
            <section className="landing-page">
                <Hero />
                <TrendingCollection />
                <TopCollection />
            </section>
        </MainLayout>
    );
};

export default LandingPage;
