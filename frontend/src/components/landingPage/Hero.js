import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const Hero = () => {
    const [randomToken, setRandomToken] = useState();
    const [creatorPFP, setCreatorPFP] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:4200/tokens")
            .then((token) => {
                if (randomToken === undefined) {
                    setRandomToken(token.data[Math.floor(Math.random() * token.data.length)]);
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
        if (randomToken !== undefined && creatorPFP === "") {
            axios
                .get(`http://localhost:4200/wallet/${randomToken.creator}`)
                .then((creator) => {
                    setCreatorPFP(creator.data.medias.pfp);
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        }
    }, [randomToken, creatorPFP]);
    return (
        <article className="hero block-contents">
            <div className="hero-left">
                <div className="advertisement">
                    <h1>Discover, Collect, and Sell extraordinary NFTs</h1>
                    <p>The world’s most popular and lagest NFT / digital art marketplace</p>
                </div>
                <Button type="primary"> Explore</Button>
            </div>
            {randomToken !== undefined && creatorPFP !== "" && (
                <div className="hero-right">
                    <a href={`/token/${randomToken.id}`}>
                        <div className="content-wrapper">
                            <div className="token-of-the-day">
                                <div className="token-img" style={{ backgroundImage: `url(${randomToken.image})` }}></div>
                                <div className="token-short-info">
                                    <div className="creator-pfp" style={{ backgroundImage: `url(${creatorPFP})` }}></div>
                                    <div className="info">
                                        <div className="token-creator-name">
                                            <h4>{randomToken.name}</h4>
                                            <h5 style={{ color: "#0652DD" }}>{randomToken.creator}</h5>
                                        </div>
                                        <div className="price-value">
                                            <h4>Price</h4>
                                            {(() => {
                                                if (randomToken.tradeInfo.sellStatus === true && randomToken.tradeInfo.price === 0) {
                                                    return <h5>FREE</h5>;
                                                } else if (randomToken.tradeInfo.sellStatus === false) {
                                                    return <h5 className="not-for-sell">SALE</h5>;
                                                } else {
                                                    return <h5>{randomToken.tradeInfo.price}N</h5>;
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )}
        </article>
    );
};

export default Hero;
