import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Modal, Form } from "antd";
import "antd/dist/antd.min.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { WalletContext } from "../store/walletContext";
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const MainLayout = ({ children }) => {
    const walletContext = useContext(WalletContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectAction, setSelectAction] = useState(true);
    const [connectWallet, setConnectWallet] = useState(false);
    const [createWallet, setCreateWallet] = useState(false);
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };
    const showModal = () => {
        setModalVisible(true);
    };
    const connectAWallet = (e) => {
        walletContext.authentication(e);
        setTimeout(() => {
            form.resetFields();
            setModalVisible(false);
        }, 300);
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
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
    const CreateWalletForm = () => (
        <div className="create-wallet">
            <Form {...layout} form={form} name="basic" initialValues={{ remember: true }} layout={"vertical"} onFinish={connectAWallet}>
                <Form.Item label="Wallet Address" name="walletAddress" rules={[{ required: true, message: "Please input wallet address!" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="walletPassword" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
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
                    <Link to={"/"}>
                        <div className="nav-banner">
                            <div className="logo-outter">
                                <img src={Logo} alt="4"></img>
                            </div>
                            <h4>THE LUUF</h4>
                        </div>
                    </Link>
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
                        {walletContext.wallet ? (
                            <div className="authenticate-actions">
                                <div className="profile">
                                    <div className="mock-pfp"></div>
                                </div>
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
