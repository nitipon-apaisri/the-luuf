import React from "react";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const TrendingCollection = () => {
    const [trendingCollections, setTrendingCollections] = useState([]);
    useEffect(() => {
        if (trendingCollections.length === 0) {
            axios.get("http://localhost:4200/collections/trending").then((collections) => {
                collections.data.forEach((collection) => {
                    setTrendingCollections((arr) => [...arr, collection]);
                });
            });
        }
    }, [trendingCollections]);
    return (
        <article className="trending-collections ">
            <h1>Trending Collections</h1>
            {trendingCollections.length !== 0 && (
                <div className="collections block-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {trendingCollections.map((row, index) => (
                            <Col span={8} key={row.name}>
                                <a href={`/${row.createdBy}/collections/${row.name}`}>
                                    <div className="medium-card-block">
                                        <div className="medium-card-cover" style={{ backgroundImage: `url(${row.collectionCover})` }}></div>
                                        <div className="medium-card-profile">
                                            <img src={row.collectionLogo} alt="pfp" />
                                            <div className="medium-card-name">
                                                <h5>{row.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </article>
    );
};

export default TrendingCollection;
