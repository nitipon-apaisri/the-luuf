import MainLayout from "../../layout";
import { v4 as uuidv4 } from "uuid";
import { Button, Col, Divider, Row, Form, Input, Modal, Table, Tooltip } from "antd";
import { FlagOutlined, HeartOutlined, PlusOutlined, UploadOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import { AccountContext } from "../../store/accountContext";
import { collections } from "../../db";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { supabaseKey, supabaseUrl } from "../../keys";
const CreateToken = () => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { accountName } = useParams();
    const navigate = useNavigate();
    const accountContext = useContext(AccountContext);
    const [form] = Form.useForm();
    const [visibleModal, setVisibleModal] = useState(false);
    const [tokenName, setTokenName] = useState("");
    const [tokenCollection, setTokenCollection] = useState("");
    const [collectionSelected, setCollectionSelected] = useState();
    const [tokenDescription, setTokenDescription] = useState("");
    const [tokenPrice, setTokenPrice] = useState(0);
    const [userCollections, setUserCollections] = useState([]);
    const [loyaltyData, setLoyaltyData] = useState([]);
    const [uploadImage, setUploadImage] = useState({ preview: "", raw: "" });
    const [tokenRoyalty, setTokenRoyalty] = useState(0);
    const [type, setType] = useState("");
    const [arttributeValue, setArttributeValue] = useState("");
    const [arttributes, setArttributes] = useState([]);
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
    const arttributeColumns = [
        { title: "Type", dataIndex: "type", render: (text) => <h5>{text}</h5> },
        { title: "Value", dataIndex: "value", render: (text) => <h5>{text}</h5> },
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
    };
    const uploadImageToStorage = async () => {
        const image = uploadImage.raw;
        const { data, error } = await supabase.storage.from("images").upload(uploadImage.raw.name.toLowerCase(), image);
        if (error) {
            throw error;
        }
        console.log(data);
    };
    const createToken = () => {
        if (tokenName !== "" && tokenCollection !== "" && uploadImage.raw !== "") {
            uploadImageToStorage();
        }
        const token = {
            id: uuidv4(),
            name: tokenName,
            description: tokenDescription,
            image: `https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/${uploadImage.raw.name}`,
            edition: tokenSupply,
            creator: accountName,
            owner: "",
            collection: tokenCollection,
            chain: "Near",
            tradeInfo: {
                sellStatus: true,
                price: tokenPrice,
                loyalties: loyaltyData,
            },
            metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
            arttributes: arttributes,
        };
        if (tokenName !== "" && tokenCollection !== "" && uploadImage.raw !== "") {
            setTimeout(() => {
                axios({
                    method: "post",
                    url: `http://localhost:4200/${accountName}/createToken`,
                    data: {
                        tokenData: token,
                    },
                })
                    .then((res) => {
                        console.log(res);
                        navigate(`/account/${accountName}`);
                    })
                    .catch((err) => {
                        console.log(err.response.data.error);
                    });
            }, 100);
        }
    };
    const addArttribute = () => {
        setArttributes((prevData) => [
            ...prevData,
            {
                type: type,
                value: arttributeValue,
            },
        ]);
        setTimeout(() => {
            console.log(arttributes);
            setType("");
            setArttributeValue("");
        }, 100);
    };
    const handleOk = () => {
        setVisibleModal(false);
    };
    const handleCancle = () => {
        setVisibleModal(false);
        setTimeout(() => {
            setType("");
            setArttributeValue("");
        }, 100);
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
                setUserCollections((prevData) => [...prevData, findCollection]);
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
            <Modal title="Basic Modal" visible={visibleModal} onOk={handleOk} onCancel={handleCancle} className="arttribute-modal" width={720}>
                <Table dataSource={arttributes} columns={arttributeColumns} rowKey={(r) => r.value} />
                <Form form={form} name="basic" initialValues={{ remember: true }} layout={"vertical"}>
                    <Row gutter={16} align="middle">
                        <Col span={11}>
                            <Form.Item label="Type">
                                <Input
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }}
                                    value={type}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <Form.Item label="Value">
                                <Input
                                    onChange={(e) => {
                                        setArttributeValue(e.target.value);
                                    }}
                                    value={arttributeValue}
                                />
                            </Form.Item>
                        </Col>
                        <Col flex="auto">
                            <Button type="primary" icon={<PlusOutlined />} style={{ marginTop: 5 }} onClick={addArttribute}></Button>
                        </Col>
                    </Row>
                </Form>
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
                                    onChange={async (e) => {
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
                                                    <Row gutter={8} wrap="true">
                                                        {arttributes.map((row, index) => (
                                                            <Col span={8} key={row.value}>
                                                                <div className="token-arttribute">
                                                                    <p style={{ color: "#0652DD", fontSize: "0.7rem" }}>{row.type}</p>
                                                                    <h3>{row.value}</h3>
                                                                    <p style={{ fontSize: "0.7rem", color: "#898989" }}>100% have this trait</p>
                                                                </div>
                                                            </Col>
                                                        ))}
                                                    </Row>
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
                                            <Row gutter={16} align="middle">
                                                <Col span={9}>
                                                    <Form.Item label="Wallet" name="walletAddress" rules={[{ required: true, message: "Please input wallet address!" }]}>
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={9}>
                                                    <Form.Item label="Loyalty(10,20,30)" name="loyaltyValue" rules={[{ required: true, message: "Please input loyalty" }]}>
                                                        <Input type="number" />
                                                    </Form.Item>
                                                </Col>
                                                <Col flex="auto">
                                                    <Button type="primary" htmlType="submit">
                                                        Submit
                                                    </Button>
                                                </Col>
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
                                        <Button
                                            type="primary"
                                            icon={<PlusOutlined />}
                                            style={{ borderRadius: 8 }}
                                            onClick={() => {
                                                setVisibleModal(true);
                                            }}
                                        ></Button>
                                    </Col>
                                </Row>
                                <Divider style={{ margin: "8px 0" }} />
                                <Row gutter={8}>
                                    {arttributes.map((row, index) => (
                                        <Col span={4} key={row.value}>
                                            <div className="token-arttribute">
                                                <p style={{ color: "#0652DD", fontSize: "0.7rem" }}>{row.type}</p>
                                                <h3>{row.value}</h3>
                                                <p style={{ fontSize: "0.7rem", color: "#898989" }}>100% have this trait</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="select-collection">
                        <h1>Choose Collection</h1>
                        <Divider style={{ margin: "16px 0" }} />
                        <div className="collections">
                            <Row gutter={[32, 32]} style={{ padding: 20 }}>
                                {Array.from(new Set(userCollections)).map((row, index) => (
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
                    <Divider />
                    <Row justify="end">
                        <Button type="primary" onClick={createToken} className="create-token-button">
                            Create
                        </Button>
                    </Row>
                </div>
            </section>
        </MainLayout>
    );
};

export default CreateToken;
