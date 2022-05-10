import MainLayout from "../../layout";
import { Button, Col, Divider, Row, Form, Input } from "antd";
import { FlagOutlined, HeartOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CreateToken = () => {
    const { accountName } = useParams();
    const [form] = Form.useForm();
    const [tokenInfo, setTokenInfo] = useState({
        name: "",
        description: "",
        image: "...",
        edition: 1,
        creator: "",
        owner: "",
        collection: "",
        chain: "Near",
        tradeInfo: {
            sellStatus: false,
            price: 0,
            loyalties: [],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [],
    });
    useEffect(() => {
        document.title = `${accountName} | Create Card`;
        setTokenInfo((preState) => ({ ...preState, creator: `${accountName}` }));
    }, [accountName]);
    const onChange = (e) => {
        setTokenInfo((prevState) => ({ ...prevState, name: `${e.name}` }));
    };
    return (
        <MainLayout>
            <section className="create-token-page">
                <div className="page-cover"></div>
                <div className="token-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={8}>
                            <div className="left-content">
                                <div className="token-img"></div>
                                <div className="creator">
                                    <h4>{tokenInfo.creator}</h4>
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
                                                        <h4>{tokenInfo.name !== "" ? tokenInfo.name : "Example"}</h4>
                                                        <Divider type="vertical" />
                                                        {/* <h4>{token.collection}</h4> */}
                                                    </Row>
                                                </div>
                                                <div className="token-description">{/* <p>{token.description}</p> */}</div>
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
                                                            {/* {(() => {
                                                                    if (token.tradeInfo.sellStatus === true && token.tradeInfo.price === 0) {
                                                                        return <h4>FREE</h4>;
                                                                    } else if (token.tradeInfo.sellStatus === false) {
                                                                        return <h4 className="not-for-sell">SALE</h4>;
                                                                    } else {
                                                                        return <h4>{token.tradeInfo.price}N</h4>;
                                                                    }
                                                                })()} */}
                                                        </div>
                                                    </Col>
                                                    <Divider type="vertical" style={{ height: "auto" }} />
                                                    <Col flex="auto">
                                                        <div className="token-Loyalty sub-info-content">
                                                            <p>Loyalty</p>
                                                            <h4>
                                                                {/* {(() => {
                                                                        if (token.tradeInfo.loyalties.length > 1) {
                                                                            const royaltiesSummarizedtoken = token.tradeInfo.loyalties.reduce((a, b) => {
                                                                                return a + b.value;
                                                                            }, 0);
                                                                            return royaltiesSummarizedtoken;
                                                                        } else {
                                                                            return token.tradeInfo.loyalties[0].value;
                                                                        }
                                                                    })()} */}
                                                                %
                                                            </h4>
                                                        </div>
                                                    </Col>
                                                    <Divider type="vertical" style={{ height: "auto" }} />
                                                    <Col flex="auto">
                                                        <div className="token-owner sub-info-content">
                                                            <p>Owner</p>
                                                            <h4> - </h4>
                                                            {/* <h4> <a href={`/account/${token.owner}`}>{token.owner}</a></h4> */}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Divider />
                                            {/* {(() => {
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
                                                })()} */}
                                        </Col>
                                        <Divider type="vertical" style={{ height: "auto" }}></Divider>
                                        <Col flex={"auto"}>
                                            <div className="token-arttributes">
                                                <div className="token-title">
                                                    <h4>Arttributes</h4>
                                                </div>
                                                <div className="arttributes">
                                                    {/* {token.arttributes.length !== 0 ? (
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
                                                        )} */}
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
                    <Divider />
                    <div className="token-form">
                        <div className="inner-form">
                            <div className="left-form">
                                <h1>Card Details</h1>
                                <Divider style={{ margin: "8px 0" }} />
                                <Form form={form} layout="vertical" autoComplete="off" onValuesChange={onChange}>
                                    <Form.Item name="name" label="Name (Watch to trigger rerender)">
                                        <Input />
                                    </Form.Item>
                                </Form>
                            </div>
                            <Divider style={{ margin: "0 16px ", height: "auto" }} type="vertical" />
                            <div className="right-form">
                                <h1>Royalties</h1>
                                <Divider style={{ margin: "8px 0" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default CreateToken;
