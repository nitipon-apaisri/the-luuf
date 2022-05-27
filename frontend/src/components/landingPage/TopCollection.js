import { Col, Divider, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const TopCollection = () => {
    const [topCollections, setTopCollectioins] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4200/collections/topCollections").then((collections) => {
            collections.data.forEach((collection) => {
                if (topCollections.length === 0) {
                    setTopCollectioins((arr) => [...arr, collection]);
                }
            });
        });
    }, [topCollections]);
    return (
        <article className="top-collections">
            <h1>Top Collections</h1>
            {topCollections.length !== 0 && (
                <div className="block-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={8}>
                            {topCollections.slice(0, 3).map((row, index) => (
                                <Col key={row.name}>
                                    <div className="top-collection">
                                        <h5>{index + 1}</h5>
                                        <div className="collection-details">
                                            <img src={row.collectionLogo} alt="pfp" />
                                            <div className="details">
                                                <h4>{row.name}</h4>
                                                <div className="values">
                                                    <h6>Floor price:{row.values.floorPrice}N</h6>
                                                    <h6>{row.values.totalVolume}N</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                </Col>
                            ))}
                        </Col>
                        <Col span={8}>
                            {topCollections.slice(3, 6).map((row, index) => (
                                <Col key={row.name}>
                                    <div className="top-collection">
                                        <h5>{index + 4}</h5>
                                        <div className="collection-details">
                                            <img src={row.collectionLogo} alt="pfp" />
                                            <div className="details">
                                                <h4>{row.name}</h4>
                                                <div className="values">
                                                    <h6>Floor price:{row.values.floorPrice}N</h6>
                                                    <h6>{row.values.totalVolume}N</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                </Col>
                            ))}
                        </Col>
                        <Col span={8}>
                            {topCollections.slice(6, 9).map((row, index) => (
                                <Col key={row.name}>
                                    <div className="top-collection">
                                        <h5>{index + 7}</h5>
                                        <div className="collection-details">
                                            <img src={row.collectionLogo} alt="pfp" />
                                            <div className="details">
                                                <h4>{row.name}</h4>
                                                <div className="values">
                                                    <h6>Floor price:{row.values.floorPrice}N</h6>
                                                    <h6>{row.values.totalVolume}N</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                </Col>
                            ))}
                        </Col>
                    </Row>
                </div>
            )}
        </article>
    );
};

export default TopCollection;
