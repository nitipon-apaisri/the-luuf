import MainLayout from "../../layout";
import { Button, Col, Divider, Row, Form, Input } from "antd";
import { FlagOutlined, HeartOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CreateToken = () => {
    const { accountName } = useParams();
    const [form] = Form.useForm();
    const [tokenName, setTokenName] = useState("");
    const [tokenDescription, setTokenDescription] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [tokenRoyalty, setTokenRoyalty] = useState(0);
    const [tokenSupply, setTokenSupply] = useState(0);
    const { TextArea } = Input;
    useEffect(() => {
        document.title = `${accountName} | Create Card`;
    }, [accountName]);
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
                                    <h4>{accountName}</h4>
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
                                                        <h4>{tokenName !== "" ? tokenName : "Example"}</h4>
                                                        <Divider type="vertical" />
                                                        {/* <h4>{token.collection}</h4> */}
                                                    </Row>
                                                </div>
                                                <div className="token-description">
                                                    <p>{tokenDescription}</p>
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
                                                            <h4>{tokenPrice}</h4>
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
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Divider />
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
                            <div className="top-content">
                                <div className="left-form">
                                    <h1>Card Details</h1>
                                    <Divider style={{ margin: "8px 0 16px 0" }} />
                                    <Form form={form} layout="vertical" autoComplete="off">
                                        <Form.Item name="name" label="Name">
                                            <Input
                                                onChange={(e) => {
                                                    setTokenName(e.target.value);
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item name="description" label="Description">
                                            <TextArea
                                                maxLength={100}
                                                style={{ height: 120 }}
                                                onChange={(e) => {
                                                    setTokenDescription(e.setTokenDescription);
                                                    console.log(e.target.value);
                                                }}
                                            />
                                        </Form.Item>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item name="price" label="Price" style={{ marginBottom: 0 }}>
                                                    <Input
                                                        onChange={(e) => {
                                                            setTokenPrice(e.target.value);
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="supply" label="Supply" style={{ marginBottom: 0 }}>
                                                    <Input
                                                        onChange={(e) => {
                                                            setTokenSupply(e.target.value);
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <Divider style={{ margin: "0 24px ", height: "auto" }} type="vertical" />
                                <div className="right-form">
                                    <Row justify="space-between">
                                        <Col>
                                            <h1>Royalties</h1>
                                        </Col>
                                        <Col>
                                            <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: 8 }}></Button>
                                        </Col>
                                    </Row>
                                    <Divider style={{ margin: "8px 0" }} />
                                </div>
                            </div>
                            <div className="bottom-content">
                                <Row justify="space-between">
                                    <Col>
                                        <h1>Arttributes</h1>
                                    </Col>
                                    <Col>
                                        <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: 8 }}></Button>
                                    </Col>
                                </Row>
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
