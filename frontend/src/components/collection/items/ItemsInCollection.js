import { Button, Col, Row } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Token from "../../globally/Token";
import axios from "axios";
const ItemsInCollection = (tokens) => {
    const [items, setItems] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            tokens.tokens.slice(items.length, items.length + 3).forEach((r) => {
                axios
                    .get(`http://localhost:4200/tokens/${r}`)
                    .then((token) => {
                        setItems((arr) => [...arr, token.data]);
                    })
                    .catch((err) => {
                        console.log(err.response.data.error);
                    });
            });
        }, 750);
    };
    useEffect(() => {
        tokens.tokens.slice(0, 3).forEach((r) => {
            axios
                .get(`http://localhost:4200/tokens/${r}`)
                .then((token) => {
                    if (tokens.length !== 0 && items.length === 0) {
                        setItems((arr) => [...arr, token.data]);
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        });
    }, [tokens, items]);
    return (
        <section className="items-collection-container">
            <div className="title">
                <h1>Items</h1>
                <Button type="primary">Filter</Button>
            </div>
            {items.length !== 0 && (
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
            )}
        </section>
    );
};

export default ItemsInCollection;
