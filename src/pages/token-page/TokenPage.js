import MainLayout from "../../layout";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Divider, Row } from "antd";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../store/tokenContext";
import { FlagOutlined, HeartOutlined, UploadOutlined } from "@ant-design/icons";
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
                                                {(() => {
                                                    if (token.tradeInfo.sellStatus === true && token.tradeInfo.price === 0) {
                                                        return (
                                                            <Button type="primary" className="buy-button">
                                                                BUY
                                                            </Button>
                                                        );
                                                    } else if (token.tradeInfo.sellStatus === false) {
                                                        return (
                                                            <Button className="offer-button" type="text">
                                                                <h4>Make Offer</h4>
                                                            </Button>
                                                        );
                                                    } else {
                                                        <div className="button-actions">
                                                            <Row>
                                                                <Button type="primary" className="buy-button">
                                                                    BUY
                                                                </Button>
                                                                <Button className="offer-button" type="text">
                                                                    <h4>Make Offer</h4>
                                                                </Button>
                                                            </Row>
                                                        </div>;
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
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default TokenPage;
