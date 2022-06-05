import React, { useEffect, useState } from "react";
import { CameraFilled } from "@ant-design/icons";
import { Row, Col, Divider, Form, Input, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MainLayout from "../../layout";
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../../keys";
import axios from "axios";

const CreateCollection = () => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { accountName } = useParams();
    const navigate = useNavigate();
    const [collectionCover, setCollectionCover] = useState({ preview: "", raw: "" });
    const [collectionPfp, setCollectionPfp] = useState({ preview: "", raw: "" });
    const [collectionName, setCollectionName] = useState("");
    const [collecitonDescription, setCollectionDescription] = useState("");
    const [collectionLink, setCollectionLink] = useState("");
    const [collectionTwitter, setCollectionTwitter] = useState("");
    const [collectionIG, setCollectionIG] = useState("");
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const uploadCollectionCover = async () => {
        const image = collectionCover.raw;
        const { data, error } = await supabase.storage.from("images").upload(`collection-cover/${collectionCover.raw.name.toLowerCase()}`, image);
        if (error) {
            throw error;
        }
        console.log(data);
    };
    const uploadCollectionPFP = async () => {
        const image = collectionPfp.raw;
        const { data, error } = await supabase.storage.from("images").upload(`collection-profile-pictures/${collectionPfp.raw.name.toLowerCase()}`, image);
        if (error) {
            throw error;
        }
        console.log(data);
    };
    const createCollection = () => {
        if (collectionName !== "") {
            uploadCollectionCover();
            uploadCollectionPFP();
        }
        const collection = {
            id: uuidv4(),
            name: collectionName,
            collectionLogo: `https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/${collectionPfp.raw.name.toLowerCase()}`,
            collectionCover: `https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/${collectionCover.raw.name.toLowerCase()}`,
            createdBy: accountName,
            description: collecitonDescription,
            tokens: [],
            links: {
                universal: collectionLink,
                twitter: collectionTwitter,
                ig: collectionIG,
            },
            values: {
                totalVolume: 0,
                floorPrice: 0,
            },
        };
        if (collectionName !== "") {
            setTimeout(() => {
                axios({
                    method: "post",
                    url: `http://localhost:4200/${accountName}/collections/createCollection`,
                    data: {
                        collectionData: collection,
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
    useEffect(() => {
        document.title = `${accountName} | Create Collection`;
    }, [accountName]);
    return (
        <MainLayout>
            <section className="create-collection-page">
                <div className="page-cover"></div>
                <div className="collection-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                        <Col span={8}>
                            <div className="collection-profile medium-card-block">
                                <label htmlFor="upload-cover-button">
                                    {collectionCover.preview === "" ? (
                                        <div className="medium-card-cover upload-cover" style={{ cursor: "pointer" }}>
                                            <div className="upload-tag">
                                                <div className="content">
                                                    <CameraFilled style={{ fontSize: "24px" }} />
                                                    <h4> Upload Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="medium-card-cover" style={{ backgroundImage: `url(${collectionCover.preview})`, cursor: "pointer" }}></div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="upload-cover-button"
                                    style={{ display: "none" }}
                                    onChange={async (e) => {
                                        setCollectionCover({ preview: URL.createObjectURL(e.target.files[0]), raw: e.target.files[0] });
                                    }}
                                />
                                <div className="medium-card-profile">
                                    <label htmlFor="upload-pfp-button">
                                        {collectionPfp.preview === "" ? (
                                            <div className="default-collection-pfp" style={{ cursor: "pointer" }}>
                                                <CameraFilled style={{ fontSize: "32px" }} />
                                            </div>
                                        ) : (
                                            <img src={collectionPfp.preview} alt="pfp" style={{ cursor: "pointer" }} />
                                        )}
                                    </label>
                                    <input
                                        type="file"
                                        id="upload-pfp-button"
                                        style={{ display: "none" }}
                                        onChange={async (e) => {
                                            setCollectionPfp({ preview: URL.createObjectURL(e.target.files[0]), raw: e.target.files[0] });
                                        }}
                                    />
                                    <div className="medium-card-name">
                                        <h5>{collectionName === "" ? "-" : collectionName}</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="collection-form">
                        <Divider />
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="collectionName" label="Collection Name">
                                <Input
                                    onChange={(e) => {
                                        setCollectionName(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="description" label="Description">
                                <TextArea
                                    maxLength={100}
                                    style={{ height: 120 }}
                                    onChange={(e) => {
                                        setCollectionDescription(e.target.value);
                                    }}
                                />
                            </Form.Item>

                            <Form.Item name="link" label="Website">
                                <Input
                                    onChange={(e) => {
                                        setCollectionLink(e.target.value);
                                    }}
                                />
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item name="twitter" label="Twitter">
                                        <Input
                                            onChange={(e) => {
                                                setCollectionTwitter(e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="ig" label="Instagram">
                                        <Input
                                            onChange={(e) => {
                                                setCollectionIG(e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <Row justify="end">
                            {collectionName !== "" && (
                                <Button type="primary" className="create-token-button" onClick={createCollection}>
                                    Create
                                </Button>
                            )}
                        </Row>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default CreateCollection;
