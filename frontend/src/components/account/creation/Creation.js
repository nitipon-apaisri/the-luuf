import { Button, Col, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import Token from "../../globally/Token";
import InfiniteScroll from "react-infinite-scroll-component";
import { AccountContext } from "../../../store/accountContext";
import axios from "axios";
const Creation = ({ accountName }) => {
    const accountContext = useContext(AccountContext);
    const [createdTokens, setCreatedToken] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const fetchMoreData = () => {
        setTimeout(() => {
            axios
                .get(`http://localhost:4200/${accountName}/tokens`)
                .then((tokens) => {
                    tokens.data.slice(createdTokens.length, createdTokens.length + 3).forEach((token) => {
                        setCreatedToken((arr) => [...arr, token]);
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - creation`;
        if (accountContext.account !== undefined) {
            if (accountContext.account.signInInfo.walletAddress === accountName) setAuth(true);
        }
    }, [accountName, accountContext]);
    useEffect(() => {
        axios
            .get(`http://localhost:4200/${accountName}/tokens`)
            .then((tokens) => {
                if (createdTokens.length === 0) {
                    tokens.data.slice(0, 3).forEach((token) => {
                        setCreatedToken((arr) => [...arr, token]);
                    });
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [accountName, createdTokens]);
    return (
        <section className="creation-container">
            <div className="title">
                <h1>Creation</h1>

                <div className="action-buttons">
                    {(() => {
                        if (isAuth) {
                            if (accountName === accountContext.account.signInInfo.walletAddress) {
                                return (
                                    <Button type="primary">
                                        <a href={`/${accountName}/createToken`}>Create Card</a>
                                    </Button>
                                );
                            }
                        }
                    })()}
                    <Button type="primary">Filter</Button>
                </div>
            </div>
            {createdTokens.length !== 0 && (
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
            )}
        </section>
    );
};

export default Creation;
