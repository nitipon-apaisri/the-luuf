import { Button } from "antd";
const Hero = () => {
    return (
        <article className="hero block-contents">
            <div className="hero-left">
                <div className="advertisement">
                    <h1>Discover, Collect, and Sell extraordinary NFTs</h1>
                    <p>The world’s most popular and lagest NFT / digital art marketplace</p>
                </div>
                <Button type="primary"> Explore</Button>
            </div>
            <div className="hero-right">
                <div className="token-of-the-day">
                    <div className="token">
                        <div className="token-img"></div>
                        <div className="token-short-info">
                            <div className="creator-pfp"></div>
                            <div className="info">
                                <div className="token-creator-name">
                                    <h4>Example</h4>
                                    <h5>Example</h5>
                                </div>
                                <div className="price-value">
                                    <h4>Example</h4>
                                    <h5>Example</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Hero;
