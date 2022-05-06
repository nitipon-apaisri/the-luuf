import { Button, Col, Row } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { tokens } from "../../../db";
import Token from "../../globally/Token";
const ItemsInCollection = ({ collection }) => {
    const [items, setItems] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            collection.tokens.slice(items.length, items.length + 3).forEach((r) => {
                const findToken = tokens.find((token) => {
                    return token.id === r;
                });
                setItems((items) => [...items, findToken]);
            });
        }, 750);
    };
    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            const findToken = tokens.find((token) => {
                return token.id === collection.tokens[i];
            });

            if (items.length === 0) {
                setItems((items) => [...items, findToken]);
            }
        }
    }, [collection, items]);
    return (
        <section className="items-collection-container">
            <div className="title">
                <h1>Items</h1>
                <Button type="primary">Filter</Button>
            </div>
            <div className="items-collection">
                <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={true}>
                    <Row gutter={[32, 32]} style={{ padding: 20 }}>
                        {Array.from(new Set(items)).map((row, index) => (
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

export default ItemsInCollection;
