import React from "react";
import { useEffect } from "react";
import Category from "../../components/landingPage/Category";
import FeaturesPreview from "../../components/landingPage/FeaturesPreview";
import Hero from "../../components/landingPage/Hero";
import RisingStars from "../../components/landingPage/RisingStars";
import TopCollection from "../../components/landingPage/TopCollection";
import TrendingCollection from "../../components/landingPage/TrendingCollection";
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
