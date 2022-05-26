import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import Token from "../../components/globally/Token";
import MainLayout from "../../layout";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const Marketplace = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [colSpan, setColSpan] = useState(6);
    const [loader, setLoader] = useState(false);
    const [getTokens, setGetTokens] = useState([]);
    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };
    const fetchMoreData = () => {
        setTimeout(() => {
            axios
                .get(`http://localhost:4200/tokens`)
                .then((tokens) => {
                    tokens.data.slice(getTokens.length, getTokens.length + 3).forEach((token) => {
                        setGetTokens((arr) => [...arr, token]);
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        }, 750);
    };
    useEffect(() => {
        document.title = "THE LUUF - Marketplace";
        setLoader(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            if (getTokens.length === 0) {
                axios
                    .get("http://localhost:4200/marketplace")
                    .then((tokens) => {
                        tokens.data.forEach((r) => {
                            setGetTokens((arr) => [...arr, r]);
                        });
                    })
                    .catch((err) => {
                        console.log(err.response.data.error);
                    });
            }

            if (getTokens.length !== 0) setLoader(false);
        }, 750);
    }, [getTokens]);
    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        if (width < 1440) {
            setColSpan(8);
        } else {
            setColSpan(6);
        }
    }, [width]);
    return (
        <MainLayout>
            <section className="marketplace">
                <div className="marketplace-header">
                    <h1>Marketplace</h1>
                    <Button type="primary">Filter</Button>
                </div>
                {loader && (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                )}
                {!loader && (
                    <div className="tokens">
                        <InfiniteScroll dataLength={getTokens.length} next={fetchMoreData} hasMore={true}>
                            <Row gutter={[32, 32]} style={{ padding: 20 }}>
                                {getTokens.map((row, index) => (
                                    <Col span={colSpan} key={row.id}>
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
        </MainLayout>
    );
};

export default Marketplace;
