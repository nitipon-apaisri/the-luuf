import MainLayout from "../../layout";
import { Button, Col, Divider, Row, Form, Input, Modal } from "antd";
import { FlagOutlined, HeartOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
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
    const [visibleModal, setVisibleModal] = useState(false);
    const [toggleModal, setToggleModal] = useState("");
    const [collectionSelected, setCollectionSelected] = useState();
    const [tokenDescription, setTokenDescription] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [userCollections, setUserCollections] = useState();
    const [uploadImage, setUploadImage] = useState({ preview: "", raw: "" });
    const [tokenRoyalty, setTokenRoyalty] = useState(0);
    const [tokenSupply, setTokenSupply] = useState(0);
    const { TextArea } = Input;
    const RoyaltyForm = () => (
        <>
            <h1>Royalty</h1>
        </>
    );
    const ArttributeForm = () => (
        <>
            <h1>Arttribute</h1>
        </>
    );
    const toggleRoyaltyModal = () => {
        setVisibleModal(true);
        setToggleModal("royalty");
    };
    const toggleArttributeModal = () => {
        setVisibleModal(true);
        setToggleModal("arttribute");
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
    return (
        <MainLayout>
            <Modal
                title="Royalties"
                visible={visibleModal}
                onCancel={() => {
                    setVisibleModal(false);
                }}
            >
                {(() => {
                    if (toggleModal === "royalty") {
                        return <RoyaltyForm />;
                    }
                    if (toggleModal === "arttribute") {
                        return <ArttributeForm />;
                    }
                })()}
            </Modal>
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
                                    <Row justify="space-between">
                                        <Col>
                                            <h1>Royalties</h1>
                                        </Col>
                                        <Col>
                                            <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: 8 }} onClick={toggleRoyaltyModal}></Button>
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
                                        <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: 8 }} onClick={toggleArttributeModal}></Button>
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
