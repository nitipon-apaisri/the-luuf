import { Button, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { tokens } from "../../../db";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
const Collectible = ({ accountName }) => {
    const [collectibles, setCollectibles] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            const findCreatedTokens = tokens.slice(collectibles.length, collectibles.length + 3).filter((r) => {
                return r.owner === accountName;
            });
            findCreatedTokens.forEach((token) => {
                setCollectibles((prevData) => [...prevData, token]);
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
            for (let token = 0; token < 3; token++) {
                if (findAccountCollectibles[token] === undefined) {
                    break;
                } else {
                    setCollectibles((addTokens) => [...addTokens, findAccountCollectibles[token]]);
                }
            }
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
        </section>
    );
};

export default Collectible;
