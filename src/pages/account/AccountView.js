import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout";
import { AccountContext } from "../../store/accountContext";
import instagramLogo from "../../assets/images/icons/InstagramLogo.svg";
import twitterLogo from "../../assets/images/icons/TwitterLogo.svg";
import linkIcon from "../../assets/images/icons/Link.svg";
import { Divider } from "antd";
import Creation from "../../components/account/creation/Creation";
import Collectible from "../../components/account/collectible/Collectible";
import Collection from "../../components/account/collection/Collection";
import Favorited from "../../components/account/favorited/Favorited";
import { accounts } from "../../db";
const AccountPage = () => {
    const { accountName } = useParams();
    const accountContext = useContext(AccountContext);
    const [loader, setLoader] = useState(false);
    const [account, setAccount] = useState();
    const [toggleState, setToggleState] = useState(1);
    const [tokenCategory, setTokenCategory] = useState("creation");
    const toggleTab = (index, category) => {
        setToggleState(index);
        setTokenCategory(category);
    };
    const getActiveClass = (index, className) => (toggleState === index ? className : "");
    useEffect(() => {
        document.title = `${accountName} - creation`;
        setLoader(true);
        setTimeout(() => {
            const findAccount = accounts.find((r) => {
                return r.name === accountName;
            });
            setAccount(findAccount);
        }, 750);
        if (account !== undefined) setLoader(false);
    }, [accountContext, accountName, account]);
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
                    <div className="page-cover"></div>
                    <div className="account-contents">
                        <div className="account-profile main-profile">
                            <div className="profile">
                                <div className="account-pfp main-pfp"></div>
                                <h3>{account.name}</h3>
                            </div>
                            <div className="account-info main-content-info">
                                <div className="external-links">
                                    <div className="links">
                                        <div className="link">
                                            <img src={twitterLogo} alt="twitter" />
                                        </div>
                                        <div className="link">
                                            <img src={instagramLogo} alt="ig" />
                                        </div>
                                        <div className="link">
                                            <img src={linkIcon} alt="external-link" />
                                        </div>
                                    </div>
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
                                return <Creation accountName={account.name} />;
                            }
                            if (tokenCategory === "collectible") {
                                return <Collectible accountName={account.name} />;
                            }
                            if (tokenCategory === "collection") {
                                return <Collection accountName={account.name} />;
                            }
                            if (tokenCategory === "favorited") {
                                return <Favorited account={account} />;
                            }
                        })()}
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default AccountPage;
