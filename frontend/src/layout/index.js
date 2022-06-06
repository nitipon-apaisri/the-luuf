import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Modal, Form, Popover, Divider } from "antd";
import "antd/dist/antd.min.css";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { AccountContext } from "../store/accountContext";
import axios from "axios";
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const MainLayout = ({ children }) => {
    const accountContext = useContext(AccountContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectAction, setSelectAction] = useState(true);
    const [connectWallet, setConnectWallet] = useState(false);
    const [createWallet, setCreateWallet] = useState(false);
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };

    const popOverContent = () => {
        return (
            <div className="popover-content">
                <div className="account-info">
                    <div className="account-balance">
                        <h4>Balance:</h4>
                        <h4>{accountContext.account.balance}N</h4>
                    </div>
                    <Divider style={{ margin: "8px 0" }} />
                    <a href={`/account/${accountContext.account.signInInfo.walletAddress}`}>
                        <h4>My Profile</h4>
                    </a>
                    <Divider style={{ margin: "8px 0" }} />
                    <h4 style={{ cursor: "pointer" }} onClick={signOut}>
                        Log Out
                    </h4>
                </div>
            </div>
        );
    };
    const showModal = () => {
        setModalVisible(true);
    };
    const signOut = () => {
        accountContext.signOut();
    };
    const connectAWallet = (e) => {
        accountContext.signIn(e);
        setSelectAction(true);
        setTimeout(() => {
            form.resetFields();
            setModalVisible(false);
        }, 300);
    };
    const createAWallet = (e) => {
        axios({
            method: "post",
            url: "http://localhost:4200/createWallet",
            data: {
                walletAddress: e.walletAddress.toLowerCase(),
                walletPassword: e.walletPassword,
            },
        })
            .then((wallet) => {
                setSelectAction(true);
                setTimeout(() => {
                    form.resetFields();
                    setModalVisible(false);
                }, 300);
            })
            .catch((err) => {
                console.log(err.response.data.error);
                return err.response.data.error;
            });
        // accountContext.createWallet(e);

        // setSelectAction(true);
        // setTimeout(() => {
        //     form.resetFields();
        //     setModalVisible(false);
        // }, 300);
    };
    const onCancel = () => {
        setModalVisible(false);
        setSelectAction(true);
        setConnectWallet(false);
        setCreateWallet(false);
    };
    const onCancelSubmit = () => {
        setSelectAction(true);
        setConnectWallet(false);
        setCreateWallet(false);
    };
    const NotAuthenticated = () => (
        <div className="wallet-actions">
            <Button
                type="primary"
                onClick={() => {
                    setSelectAction(false);
                    setConnectWallet(true);
                }}
            >
                {" "}
                Connect wallet
            </Button>
            <Button
                onClick={() => {
                    setSelectAction(false);
                    setCreateWallet(true);
                }}
            >
                {" "}
                Create a Wallet
            </Button>
        </div>
    );
    const ConnectWalletForm = () => (
        <div className="connect-wallet">
            <Form {...layout} form={form} name="basic" initialValues={{ remember: true }} layout={"vertical"} onFinish={connectAWallet}>
                <Form.Item label="Wallet Address" name="walletAddress" rules={[{ required: true, message: "Please input wallet address!" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="walletPassword" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input.Password />
                </Form.Item>
            </Form>
        </div>
    );
    const CreateWalletForm = () => (
        <div className="create-wallet">
            <Form {...layout} form={form} name="basic" initialValues={{ remember: true }} layout={"vertical"} onFinish={createAWallet}>
                <Form.Item label="Wallet Address" name="walletAddress" rules={[{ required: true, message: "Please input wallet address!" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="walletPassword" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input.Password />
                </Form.Item>
            </Form>
        </div>
    );
    useEffect(() => {
        if (accountContext.account === undefined && localStorage.getItem("auth")) {
            accountContext.signIn(JSON.parse(localStorage.getItem("auth")));
        }
    }, [accountContext]);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Modal
                title={(() => {
                    if (selectAction) {
                        return "Wallet";
                    }
                    if (connectWallet) {
                        return "Connect Wallet";
                    }
                    if (createWallet) {
                        return "Create a Wallet";
                    }
                })()}
                visible={modalVisible}
                onCancel={onCancel}
                footer={
                    !selectAction && [
                        <Button key="back" onClick={connectWallet === true || createWallet === true ? onCancelSubmit : onCancel}>
                            Cancel
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={() => {
                                form.submit();
                            }}
                        >
                            {connectWallet ? "Connect" : "Create"}
                        </Button>,
                    ]
                }
            >
                {(() => {
                    if (selectAction) {
                        return <NotAuthenticated />;
                    }
                    if (connectWallet) {
                        return <ConnectWalletForm />;
                    }
                    if (createWallet) {
                        return <CreateWalletForm />;
                    }
                })()}
            </Modal>
            <Header>
                <nav>
                    <a href="/">
                        <div className="nav-banner">
                            <div className="logo-outter">
                                <img src={Logo} alt="4"></img>
                            </div>
                            <h4>THE LUUF</h4>
                        </div>
                    </a>
                    <div className="nav-search-bar">
                        <Search placeholder="Search items, collection, and accounts" enterButton />
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <h4>Explore</h4>
                            </Link>
                        </li>
                        <li>
                            {/* <Link to={"/marketplace"}>
                                <h4>Marketplace</h4>
                            </Link> */}
                            <a href={"/marketplace"}>
                                <h4>Marketplace</h4>
                            </a>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <h4>Stats</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <h4>Resources</h4>
                            </Link>
                        </li>
                        {accountContext.account ? (
                            <div className="authenticate-actions">
                                <Popover placement="bottomRight" title={accountContext.account.name} content={popOverContent} trigger="click">
                                    <div className="profile">
                                        <div className="pfp" style={{ backgroundImage: `url(${accountContext.account.medias.pfp})` }}></div>
                                    </div>
                                </Popover>
                            </div>
                        ) : (
                            <div className="authenticate-actions">
                                <Button icon={<UserOutlined />} shape="circle" onClick={showModal}></Button>
                            </div>
                        )}
                    </ul>
                </nav>
            </Header>
            <Content>{children}</Content>
            <Footer>
                <div className="nav-banner">
                    <div className="logo-outter">
                        <img src={Logo} alt="4"></img>
                    </div>
                    <h4>THE LUUF</h4>
                </div>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
