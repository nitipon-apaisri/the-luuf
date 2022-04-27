import { useEffect } from "react";
import Category from "../../components/landing-page/Category";
import FeaturesPreview from "../../components/landing-page/FeaturesPreview";
import Hero from "../../components/landing-page/Hero";
import RisingStars from "../../components/landing-page/RisingStars";
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
                <RisingStars />
                <FeaturesPreview />
                <Category />
            </section>
        </MainLayout>
    );
};

export default LandingPage;
