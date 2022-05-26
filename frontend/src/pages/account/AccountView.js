import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout";
import { AccountContext } from "../../store/accountContext";
import { Button, Divider } from "antd";
import Creation from "../../components/account/creation/Creation";
import Collectible from "../../components/account/collectible/Collectible";
import Collection from "../../components/account/collection/Collection";
import Favorited from "../../components/account/favorited/Favorited";
import { accounts } from "../../db";
import { InstagramFilled, LinkOutlined, SettingFilled, TwitterOutlined } from "@ant-design/icons";
import axios from "axios";
const AccountPage = () => {
    const { accountName } = useParams();
    const accountContext = useContext(AccountContext);
    const [loader, setLoader] = useState(false);
    const [account, setAccount] = useState();
    const [isAuth, setAuth] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const [tokenCategory, setTokenCategory] = useState("creation");
    const toggleTab = (index, category) => {
        setToggleState(index);
        setTokenCategory(category);
    };
    const getActiveClass = (index, className) => (toggleState === index ? className : "");
    useEffect(() => {
        if (accountContext.account !== undefined) {
            if (accountContext.account.name === accountName) setAuth(true);
        }
    }, [accountContext, accountName]);
    useEffect(() => {
        document.title = `${accountName} - creation`;
        setLoader(true);
        if (isAuth === false && account === undefined) {
            setTimeout(() => {
                axios({
                    method: "get",
                    url: `http://localhost:4200/wallet/${accountName}`,
                })
                    .then((wallet) => {
                        setAccount(wallet.data);
                    })
                    .catch((err) => {
                        console.log(err.response.data.error);
                    });
                setAccount(accountContext.account);
            }, 750);
        }
        if (account !== undefined) setLoader(false);
    }, [accountContext, accountName, account, isAuth]);
    return (
        <MainLayout>
            {loader && (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            )}
            {!account ? (
                loader
            ) : (
                <section className="account-page">
                    <div className="page-cover" style={{ backgroundImage: `url(${account.medias.banner})` }}></div>
                    <div className="account-contents">
                        <div className="account-profile main-profile">
                            <div className="profile">
                                <div className="account-pfp main-pfp" style={{ backgroundImage: `url(${account.medias.pfp})` }}></div>
                                <h3>{account.name}</h3>
                            </div>
                            <div className="account-info main-content-info">
                                <div className="external-links">
                                    <div className="links">
                                        <div className="link">
                                            <Button icon={<TwitterOutlined />} shape="circle"></Button>
                                        </div>
                                        <div className="link ig">
                                            <Button icon={<InstagramFilled />} shape="circle"></Button>
                                        </div>
                                        <div className="link">
                                            <Button icon={<LinkOutlined />} shape="circle"></Button>
                                        </div>
                                    </div>
                                    {isAuth && (
                                        <div className="owner-action" style={{ marginLeft: 16 }}>
                                            <div className="links" style={{ width: "100%", padding: 12 }}>
                                                <div className="link">
                                                    <Button icon={<SettingFilled />} shape="circle"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="account-description main-content-description">
                                    <p>{account.about}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="tabs">
                            <nav>
                                <ul>
                                    <li>
                                        <h4 className={` ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1, "creation")}>
                                            Creation
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className={` ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2, "collectible")}>
                                            Collectibles
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className={` ${getActiveClass(3, "active")}`} onClick={() => toggleTab(3, "collection")}>
                                            Collections
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className={` ${getActiveClass(4, "active")}`} onClick={() => toggleTab(4, "favorited")}>
                                            Favorited
                                        </h4>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <Divider />
                        {(() => {
                            if (tokenCategory === "creation") {
                                return <Creation accountName={account.signInInfo.walletAddress} />;
                            }
                            if (tokenCategory === "collectible") {
                                return <Collectible accountName={account.signInInfo.walletAddress} />;
                            }
                            if (tokenCategory === "collection") {
                                return <Collection accountName={account.signInInfo.walletAddress} />;
                            }
                            if (tokenCategory === "favorited") {
                                return <Favorited account={account.signInInfo.walletAddress} />;
                            }
                        })()}
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default AccountPage;
