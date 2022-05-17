import MainLayout from "../../layout";
import { Button, Col, Divider, Row, Form, Input, Modal, Table, Tooltip } from "antd";
import { FlagOutlined, HeartOutlined, PlusOutlined, UploadOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import { AccountContext } from "../../store/accountContext";
import { collections } from "../../db";
const CreateToken = () => {
    const { accountName } = useParams();
    const accountContext = useContext(AccountContext);
    const [form] = Form.useForm();
    const [tokenName, setTokenName] = useState("");
    const [tokenCollection, setTokenCollection] = useState("");
    const [collectionSelected, setCollectionSelected] = useState();
    const [tokenDescription, setTokenDescription] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [userCollections, setUserCollections] = useState();
    const [visibleLoyaltyForm, setVisibleLoyaltyForm] = useState(false);
    const [loyaltyData, setLoyaltyData] = useState([]);
    const [uploadImage, setUploadImage] = useState({ preview: "", raw: "" });
    const [tokenRoyalty, setTokenRoyalty] = useState(0);
    const [tokenSupply, setTokenSupply] = useState(0);
    const { TextArea } = Input;
    const columns = [
        { title: "Contributor", dataIndex: "contributor", render: (text) => <h5>{text}</h5> },
        { title: "Royalty", dataIndex: "royalty", render: (text) => <h5>{text}%</h5> },
        {
            title: "Tools",
            dataIndex: "task",
            fixed: "right",
            width: 150,
            render: (cell, row) => {
                return (
                    <span>
                        <Tooltip placement="top" title="Edit">
                            <Button type="link" icon={<EditOutlined />} style={{ color: "#283143" }} onClick={() => {}} />
                        </Tooltip>
                        <Divider type="vertical" />
                        <Tooltip placement="top" title="Delete">
                            <Button type="link" icon={<DeleteOutlined />} style={{ color: "#ff6b72" }} onClick={() => {}} />
                        </Tooltip>
                    </span>
                );
            },
        },
    ];
    const addLoyalty = (e) => {
        setLoyaltyData((prevData) => [...prevData, { contributor: e.walletAddress, royalty: Number(e.loyaltyValue) }]);
        setTimeout(() => {
            form.resetFields();
        }, 100);
        form.resetFields();
    };
    useEffect(() => {
        document.title = `${accountName} | Create Card`;
    }, [accountName]);
    useEffect(() => {
        if (accountContext.account !== undefined) {
            accountContext.account.collections.forEach((r) => {
                const findCollection = collections.find((x) => {
                    return x.id === r;
                });
                setUserCollections(findCollection);
            });
        }
    }, [accountContext]);
    useEffect(() => {
        if (loyaltyData.length !== 0) {
            const sumRoyalty = loyaltyData.reduce((a, b) => a + b.royalty, 0);
            setTokenRoyalty(sumRoyalty);
        }
    }, [loyaltyData]);
    return (
        <MainLayout>
            <section className="create-token-page">
                <div className="page-cover"></div>
                <div className="token-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={8}>
                            <div className="left-content">
                                <label htmlFor="upload-button">
                                    {uploadImage.preview ? (
                                        <div className="preview-pfp" style={{ backgroundImage: `url(${uploadImage.preview})` }}></div>
                                    ) : (
                                        <div className="token-img">
                                            <div className="upload-img-overlay">
                                                <UploadOutlined />
                                                <h3>Upload Your File</h3>
                                                <p>
                                                    File types supported: JPG, PNG, GIF, MP3, MP4 <br /> Max 100MB
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="upload-button"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        setUploadImage({ preview: URL.createObjectURL(e.target.files[0]), raw: e.target.files[0] });
                                    }}
                                />
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
                                                        <h4>{tokenCollection !== "" ? tokenCollection : "Example"}</h4>
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
                                                            <h4>{tokenRoyalty}%</h4>
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
                                    <h1 style={{ height: 32 }}>Card Details</h1>
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
                                                    setTokenDescription(e.target.value);
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
                                    <h1>Royalties</h1>

                                    <Divider style={{ margin: "8px 0" }} />
                                    {loyaltyData.length !== 0 && <Table dataSource={loyaltyData} columns={columns} rowKey={(r) => r.contributor} />}
                                    <div className="loyalty-form">
                                        <Form form={form} name="basic" initialValues={{ remember: true }} layout={"vertical"} onFinish={addLoyalty}>
                                            <Row gutter={16}>
                                                <Col span={12}>
                                                    <Form.Item label="Wallet" name="walletAddress" rules={[{ required: true, message: "Please input wallet address!" }]}>
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item label="Loyalty(10,20,30)" name="loyaltyValue" rules={[{ required: true, message: "Please input loyalty" }]}>
                                                        <Input type="number" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row justify="end">
                                                <Button type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Row>
                                        </Form>
                                    </div>
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
                    <div className="select-collection">
                        <h1>Choose Collection</h1>
                        <Divider style={{ margin: "16px 0" }} />
                        <div className="collections">
                            <Row gutter={[32, 32]} style={{ padding: 20 }}>
                                {collections.map((row, index) => (
                                    <Col span={8} key={row.id}>
                                        <div
                                            className={`medium-card-block ${collectionSelected === index ? "selected" : ""}`}
                                            onClick={() => {
                                                setTokenCollection(row.name);
                                                setCollectionSelected(index);
                                            }}
                                        >
                                            <div className="medium-card-cover"></div>
                                            <div className="medium-card-profile">
                                                <img src={collectionPFP} alt="pfp" />
                                                <div className="medium-card-name">
                                                    <h5>{row.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default CreateToken;
