import MainLayout from "../../layout";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../store/tokenContext";
import { FlagOutlined, HeartOutlined, UploadOutlined } from "@ant-design/icons";
import TransactionHistoryTable from "./table/TransactionTable";
import Token from "../../components/globally/Token";
const TokenPage = () => {
    const tokenContext = useContext(TokenContext);
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState();
    const [tokenCollection, setTokenCollection] = useState();
    const { tokenId } = useParams();
    const data = [
        {
            eventTitle: "Sale",
        },
    ];
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            tokenContext.fetchTokenData(tokenId);
            setToken(tokenContext.token);
            setTokenCollection(tokenContext.tokenCollection);
        }, 750);
        if (token !== undefined) {
            setLoader(false);
            document.title = `${token.collection} ${token.name} | THE LUUF`;
        }
    }, [tokenId, tokenContext, token, tokenCollection]);
    return (
        <MainLayout>
            {loader && (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            )}
            {!token ? (
                loader
            ) : (
                <section className="token-page">
                    <div className="page-cover"></div>
                    <div className="token-contents">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={8}>
                                <div className="left-content">
                                    <div className="token-img"></div>
                                    <div className="creator">
                                        <h4>
                                            <a href={`/account/${token.creator}`}>{token.creator}</a>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="token-right">
                                    <div className="token-info">
                                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ height: "100%" }}>
                                            <Col span={12}>
                                                <div className="main-info">
                                                    <div className="token-title">
                                                        <Row align="middle">
                                                            <h4>{token.name}</h4>
                                                            <Divider type="vertical" />
                                                            <h4>{token.collection}</h4>
                                                        </Row>
                                                    </div>
                                                    <div className="token-description">
                                                        <p>{token.description}</p>
                                                    </div>
                                                </div>
                                                <Divider />
                                                <div className="sub-info">
                                                    <Row
                                                        gutter={[
                                                            { xs: 8, sm: 16, md: 24, lg: 32 },
                                                            { xs: 8, sm: 16, md: 24, lg: 32 },
                                                        ]}
                                                    >
                                                        <Col flex="auto">
                                                            <div className="token-price sub-info-content">
                                                                <p>Price</p>
                                                                {(() => {
                                                                    if (token.tradeInfo.sellStatus === true && token.tradeInfo.price === 0) {
                                                                        return <h4>FREE</h4>;
                                                                    } else if (token.tradeInfo.sellStatus === false) {
                                                                        return <h4 className="not-for-sell">SALE</h4>;
                                                                    } else {
                                                                        return <h4>{token.tradeInfo.price}N</h4>;
                                                                    }
                                                                })()}
                                                            </div>
                                                        </Col>
                                                        <Divider type="vertical" style={{ height: "auto" }} />
                                                        <Col flex="auto">
                                                            <div className="token-Loyalty sub-info-content">
                                                                <p>Loyalty</p>
                                                                <h4>
                                                                    {(() => {
                                                                        if (token.tradeInfo.loyalties.length > 1) {
                                                                            const royaltiesSummarizedtoken = token.tradeInfo.loyalties.reduce((a, b) => {
                                                                                return a + b.value;
                                                                            }, 0);
                                                                            return royaltiesSummarizedtoken;
                                                                        } else {
                                                                            return token.tradeInfo.loyalties[0].value;
                                                                        }
                                                                    })()}
                                                                    %
                                                                </h4>
                                                            </div>
                                                        </Col>
                                                        <Divider type="vertical" style={{ height: "auto" }} />
                                                        <Col flex="auto">
                                                            <div className="token-owner sub-info-content">
                                                                <p>Owner</p>
                                                                <h4>
                                                                    {" "}
                                                                    <a href={`/account/${token.owner}`}>{token.owner}</a>
                                                                </h4>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Divider />
                                                {(() => {
                                                    if (token.tradeInfo.sellStatus === true && token.tradeInfo.price === 0) {
                                                        return (
                                                            <Button type="primary" className="buy-button">
                                                                BUY
                                                            </Button>
                                                        );
                                                    }
                                                    if (token.tradeInfo.sellStatus === false && token.tradeInfo.price === 0) {
                                                        return (
                                                            <Button className="offer-button" type="text">
                                                                <h4>Make Offer</h4>
                                                            </Button>
                                                        );
                                                    }

                                                    if (token.tradeInfo.sellStatus === true && token.tradeInfo.price !== 0) {
                                                        return (
                                                            <div className="button-actions">
                                                                <Row align="middle">
                                                                    <Button type="primary" className="buy-button">
                                                                        BUY
                                                                    </Button>
                                                                    <Button className="offer-button" type="text" style={{ marginLeft: 16 }}>
                                                                        <h4>Make Offer</h4>
                                                                    </Button>
                                                                </Row>
                                                            </div>
                                                        );
                                                    }
                                                })()}
                                            </Col>
                                            <Divider type="vertical" style={{ height: "auto" }}></Divider>
                                            <Col flex={"auto"}>
                                                <div className="token-arttributes">
                                                    <div className="token-title">
                                                        <h4>Arttributes</h4>
                                                    </div>
                                                    <div className="arttributes">
                                                        {token.arttributes.length !== 0 ? (
                                                            <Row gutter={[8, 8]}>
                                                                {token.arttributes.map((row, index) => (
                                                                    <Col span={8} key={row.value}>
                                                                        <div className="arttribute">
                                                                            <p>{row.type}</p>
                                                                            <h4>{row.value}</h4>
                                                                        </div>
                                                                    </Col>
                                                                ))}
                                                            </Row>
                                                        ) : (
                                                            "-"
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Divider />
                                    <div className="social-medias">
                                        <Row gutter={8} justify={"end"}>
                                            <Col>
                                                <div className="link">
                                                    <Button type="primary" icon={<HeartOutlined />}></Button>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="link">
                                                    <Button type="primary" icon={<UploadOutlined />}></Button>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="link">
                                                    <Button type="primary" icon={<FlagOutlined />}></Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Divider style={{ margin: "40px 0" }} />
                        <div className="second-content">
                            <Row gutter={[32, 32]}>
                                <Col span={16}>
                                    <article className="token-collection">
                                        <h1>About {tokenCollection.name}</h1>
                                        <Divider style={{ margin: "16px 0" }} />
                                        <p>{tokenCollection.description}</p>
                                    </article>
                                </Col>
                                <Col span={8}>
                                    <article className="token-metadata">
                                        <h1>Metadata</h1>
                                        <Divider style={{ margin: "16px 0" }} />
                                        <div className="data contract-address">
                                            <Row justify={"space-between"}>
                                                <p>Contract Address</p>
                                                <p className="link">{token.metadata.contractAddress}</p>
                                            </Row>
                                        </div>
                                        <div className="data token-name">
                                            <Row justify={"space-between"}>
                                                <p>Token</p>
                                                <p>{token.name}</p>
                                            </Row>
                                        </div>
                                        <div className="data token-edition">
                                            <Row justify={"space-between"}>
                                                <p>Edition</p>
                                                <p>#{token.edition}</p>
                                            </Row>
                                        </div>
                                        <div className="data chain">
                                            <Row justify={"space-between"}>
                                                <p>Blockchain</p>
                                                <p>{token.chain}</p>
                                            </Row>
                                        </div>
                                        <Divider style={{ margin: "16px 0" }} />
                                        <div className="data ipfs">
                                            <Row justify={"space-between"}>
                                                <p>IPFS</p>
                                                <p className="link">{token.image}</p>
                                            </Row>
                                        </div>
                                    </article>
                                </Col>
                            </Row>
                        </div>
                        <article className="transaction-history">
                            <div className="transactions">
                                <h1>History</h1>
                                <div className="table">
                                    <TransactionHistoryTable data={data} />
                                </div>
                            </div>
                        </article>
                        <article className="relate-tokens">
                            <h1>More from this collection</h1>
                            <Divider style={{ margin: "16px 0 40px 0" }} />
                            <Row gutter={[32, 32]}>
                                {tokenContext.relateTokens.slice(0, 4).map((row, index) => (
                                    <Col span={6} key={row.id}>
                                        <a href={`/token/${row.id}`}>
                                            <Token data={row} />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </article>
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default TokenPage;
