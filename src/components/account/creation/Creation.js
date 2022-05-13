import { Button, Col, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { tokens } from "../../../db";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
import { AccountContext } from "../../../store/accountContext";
const Creation = ({ accountName }) => {
    const accountContext = useContext(AccountContext);
    const [createdTokens, setCreatedToken] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const fetchMoreData = () => {
        setTimeout(() => {
            const findCreatedTokens = tokens.slice(createdTokens.length, createdTokens.length + 3).filter((r) => {
                return r.creator === accountName;
            });
            findCreatedTokens.forEach((token) => {
                setCreatedToken((prevData) => [...prevData, token]);
            });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - creation`;
        if (accountContext.account !== undefined) {
            if (accountContext.account.name === accountName) setAuth(true);
        }
    }, [accountName, accountContext]);
    useEffect(() => {
        const findCreatedTokens = tokens.slice(0, 3).filter((r) => {
            return r.creator === accountName;
        });
        if (createdTokens.length === 0) {
            findCreatedTokens.forEach((token) => {
                setCreatedToken((tokens) => [...tokens, token]);
            });
        }
    }, [accountName, createdTokens]);
    return (
        <section className="creation-container">
            <div className="title">
                <h1>Creation</h1>
                <div className="action-buttons">
                    {isAuth && (
                        <Button type="primary">
                            <a href={`/${accountName}/createToken`}>Create Card</a>
                        </Button>
                    )}
                    <Button type="primary">Filter</Button>
                </div>
            </div>
            <div className="created-tokens">
                <InfiniteScroll dataLength={createdTokens.length} next={fetchMoreData} hasMore={true}>
                    <Row gutter={[32, 32]} style={{ padding: 20 }}>
                        {Array.from(new Set(createdTokens)).map((row, index) => (
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

export default Creation;