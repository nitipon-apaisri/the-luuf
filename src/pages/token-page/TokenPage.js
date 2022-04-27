import MainLayout from "../../layout";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../store/tokenContext";
const TokenPage = () => {
    const tokenContext = useContext(TokenContext);
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState();
    const { tokenId } = useParams();
    useEffect(() => {
        document.title = "THE LUUF - Collection";
        setLoader(true);
        setTimeout(() => {
            tokenContext.findToken(tokenId);
            setToken(tokenContext.token);
        }, 750);
        if (token !== undefined) setLoader(false);
    }, [tokenId, tokenContext, token]);
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
                                        <h4>{token.creator}</h4>
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
                                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                        <Col flex="auto">
                                                            <div className="token-price sub-info-content">
                                                                <p>Price</p>
                                                                <h4>{token.tradeInfo.price}</h4>
                                                            </div>
                                                        </Col>
                                                        <Divider type="vertical" style={{ height: "auto" }} />
                                                        <Col flex="auto">
                                                            <div className="token-Loyalty sub-info-content">
                                                                <p>Loyalty</p>
                                                                <h4>{token.tradeInfo.loyalties.primary.value}%</h4>
                                                            </div>
                                                        </Col>
                                                        <Divider type="vertical" style={{ height: "auto" }} />
                                                        <Col flex="auto">
                                                            <div className="token-owner sub-info-content">
                                                                <p>Owner</p>
                                                                <h4>{token.owner}</h4>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Divider />
                                                <Button
                                                    type="primary"
                                                    style={{ height: 40, width: 80, borderRadius: 8 }}
                                                >
                                                    BUY
                                                </Button>
                                            </Col>
                                            <Divider type="vertical" style={{ height: "auto" }}></Divider>
                                            <Col span={12}>
                                                <div className="info-right"></div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Divider />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default TokenPage;
