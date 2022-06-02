import { Row, Col, Divider, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import MainLayout from "../../layout";

const CreateCollection = () => {
    const { accountName } = useParams();
    const [collectionCover, setCollectionCover] = useState({ preview: "", raw: "" });
    const [collectionPfp, setCollectionPfp] = useState({ preview: "", raw: "" });
    const [collectionName, setCollectionName] = useState("");
    const [collecitonDescription, setCollectionDescription] = useState("");
    const [collectionLink, setCollectionLink] = useState("");
    const [collectionTwitter, setCollectionTwitter] = useState("");
    const [collectionIG, setCollectionIG] = useState("");
    const [form] = Form.useForm();
    const { TextArea } = Input;
    useEffect(() => {
        document.title = `${accountName} | Create Card`;
    }, [accountName]);
    return (
        <MainLayout>
            <section className="create-collection-page">
                <div className="page-cover"></div>
                <div className="collection-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                        <Col span={6}>
                            <div className="collection-profile medium-card-block">
                                {collectionCover.preview === "" ? (
                                    <div className="medium-card-cover upload-cover"></div>
                                ) : (
                                    <div className="medium-card-cover" style={{ backgroundImage: `url(${collectionCover.preview})` }}></div>
                                )}
                                <div className="medium-card-profile">
                                    <img src={collectionPFP ? collectionPFP : collectionPfp.preview} alt="pfp" />
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
                                    <Form.Item name="ig" label="ig">
                                        <Input
                                            onChange={(e) => {
                                                setCollectionIG(e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default CreateCollection;
