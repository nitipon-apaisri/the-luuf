import { Button, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { tokens } from "../../../db";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
const Collectible = ({ accountName }) => {
    const [collectibles, setCollectibles] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            const findCreatedTokens = tokens.filter((r) => {
                return r.owner === accountName;
            });
            findCreatedTokens.forEach((token) => {
                console.log(token);
            });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - collectibles`;
    }, [accountName]);
    useEffect(() => {
        const findAccountCollectibles = tokens.filter((token) => {
            return token.owner === accountName;
        });
        if (collectibles.length === 0) {
            findAccountCollectibles.forEach((token) => {
                setCollectibles((tokens) => [...tokens, token]);
            });
        }
    }, [accountName, collectibles]);
    return (
        <section className="collectible-container">
            <div className="title">
                <h1>Collectibles</h1>
                <Button type="primary" onClick={fetchMoreData}>
                    Filter
                </Button>
            </div>
            <div className="created-tokens">
                <InfiniteScroll dataLength={collectibles.length} next={fetchMoreData} hasMore={true}>
                    <Row
                        gutter={[
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                        ]}
                    >
                        {collectibles.map((row, index) => (
                            <Col span={8} key={row.id}>
                                <a href={`/token/${row.id}`}>
                                    <Token data={row} />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </InfiniteScroll>
            </div>
        </section>
    );
};

export default Collectible;
