import { Button, Col, Row } from "antd";
import { useState, useEffect } from "react";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const Collectible = ({ accountName }) => {
    const [collectibles, setCollectibles] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            axios
                .get(`http://localhost:4200/${accountName}/collectibles`)
                .then((tokens) => {
                    tokens.data.slice(collectibles.length, collectibles.length + 3).forEach((token) => {
                        setCollectibles((arr) => [...arr, token]);
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - collectibles`;
    }, [accountName]);
    useEffect(() => {
        axios
            .get(`http://localhost:4200/${accountName}/collectibles`)
            .then((tokens) => {
                if (collectibles.length === 0) {
                    tokens.data.slice(0, 3).forEach((token) => {
                        setCollectibles((arr) => [...arr, token]);
                    });
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [accountName, collectibles]);
    return (
        <section className="collectible-container">
            <div className="title">
                <h1>Collectibles</h1>
                <Button type="primary" onClick={fetchMoreData}>
                    Filter
                </Button>
            </div>
            {collectibles.length !== 0 && (
                <div className="created-tokens">
                    <InfiniteScroll dataLength={collectibles.length} next={fetchMoreData} hasMore={true}>
                        <Row gutter={[32, 32]} style={{ padding: 20 }}>
                            {Array.from(new Set(collectibles)).map((row, index) => (
                                <Col span={8} key={row.id}>
                                    <a href={`/token/${row.id}`}>
                                        <Token data={row} />
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </InfiniteScroll>
                </div>
            )}
        </section>
    );
};

export default Collectible;
