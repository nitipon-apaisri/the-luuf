import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { tokens } from "../../../db";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
const Creation = ({ accountName }) => {
    const [createdTokens, setCreatedToken] = useState([]);
    const [loader, setLoader] = useState(false);
    const fetchMoreData = () => {
        setTimeout(() => {
            const findCreatedTokens = tokens.slice(createdTokens.length, createdTokens.length + 3).filter((r) => {
                return r.creator === accountName;
            });
            findCreatedTokens.forEach((token) => {
                setCreatedToken((preData) => [...preData, token]);
            });
        }, 1500);
    };
    useEffect(() => {
        setLoader(true);
        const findCreatedTokens = tokens.slice(0, 3).filter((r) => {
            return r.creator === accountName;
        });
        if (createdTokens.length === 0) {
            findCreatedTokens.forEach((token) => {
                setCreatedToken((tokens) => [...tokens, token]);
            });
        }
        if (createdTokens.length !== 0) setLoader(false);
    }, [accountName, createdTokens]);
    return (
        <section className="creation-container">
            <div className="title">
                <h1>Creation</h1>
                <Button type="primary">Filter</Button>
            </div>
            {createdTokens.length === 0 ? (
                loader
            ) : (
                <div className="created-tokens">
                    {/* <Row
                        gutter={[
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                        ]}
                    >
                        {createdTokens.map((row, index) => (
                            <Col span={8} key={row.id}>
                                <a href={`/token/${row.id}`}>
                                    <Token data={row} />
                                </a>
                            </Col>
                        ))}
                    </Row> */}
                    <InfiniteScroll dataLength={createdTokens.length} next={fetchMoreData} hasMore={true}>
                        <Row
                            gutter={[
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                            ]}
                        >
                            {createdTokens.map((row, index) => (
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

export default Creation;
