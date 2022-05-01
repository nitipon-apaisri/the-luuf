import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import Token from "../../components/globally/Token";
import { tokens } from "../../db";
import MainLayout from "../../layout";
import InfiniteScroll from "react-infinite-scroll-component";
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
            const loadMoreTokens = tokens.slice(getTokens.length, getTokens.length + 4);
            loadMoreTokens.forEach((token) => {
                setGetTokens((prevData) => [...prevData, token]);
            });
        }, 1500);
    };
    useEffect(() => {
        document.title = "THE LUUF - Marketplace";
        setLoader(true);
        if (getTokens.length === 0) {
            tokens.forEach((token) => {
                setGetTokens((tokens) => [...tokens, token]);
            });
        }
        if (tokens.length !== 0) setLoader(false);
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
                            <Row
                                gutter={[
                                    { xs: 8, sm: 16, md: 24, lg: 32 },
                                    { xs: 8, sm: 16, md: 24, lg: 32 },
                                ]}
                            >
                                {getTokens.map((row, index) => (
                                    <Col span={6} key={row.id}>
                                        <a href={`/token/${row.id}`}>
                                            <Token data={row} />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </InfiniteScroll>
                        {/* <Row
                            gutter={[
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                            ]}
                        >
                            {getTokens.map((row, index) => (
                                <Col span={colSpan} key={row.id}>
                                    <a href={`/token/${row.id}`}>
                                        <Token data={row} />
                                    </a>
                                </Col>
                            ))}
                        </Row> */}
                    </div>
                )}
            </section>
        </MainLayout>
    );
};

export default Marketplace;
