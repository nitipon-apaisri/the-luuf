import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout";
import { useState } from "react";
import { collections } from "../../db";
import { Button, Divider } from "antd";
import ItemsInCollection from "../../components/collection/items/ItemsInCollection";
import { InstagramFilled, LinkOutlined, SettingFilled, TwitterOutlined } from "@ant-design/icons";
import { AccountContext } from "../../store/accountContext";
const CollectionView = () => {
    const { accountName, collectionName } = useParams();
    const accountContext = useContext(AccountContext);
    const [collection, setCollection] = useState();
    const [toggleState, setToggleState] = useState(1);
    const [collectionCategory, setCollectionCategory] = useState("items");
    const [loader, setLoader] = useState(false);
    const toggleTab = (index, category) => {
        setToggleState(index);
        setCollectionCategory(category);
    };
    const getActiveClass = (index, className) => (toggleState === index ? className : "");
    useEffect(() => {
        document.title = `${collectionName} - Collection`;
        setLoader(true);
        setTimeout(() => {
            const findCollection = collections.find((collection) => {
                return collection.name === collectionName;
            });
            setCollection(findCollection);
        }, 750);
        if (collection !== undefined) setLoader(false);
    }, [collection, collectionName]);
    useEffect(() => {});
    return (
        <MainLayout>
            {loader && (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            )}
            {!collection ? (
                loader
            ) : (
                <div className="collection-view-container">
                    <div className="page-cover"></div>
                    <div className="collection-contents">
                        <div className="account-profile main-profile">
                            <div className="profile">
                                <div className="account-pfp main-pfp"></div>
                                <h3>{collection.name}</h3>
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
                                    {accountName === accountContext.account.name && (
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
                                    <p>{collection.description}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="tabs">
                            <nav>
                                <ul>
                                    <li>
                                        <h4 className={` ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1, "items")}>
                                            Items
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className={` ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2, "activity")}>
                                            Activity
                                        </h4>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <Divider />
                        {(() => {
                            if (collectionCategory === "items") {
                                return <ItemsInCollection collection={collection} />;
                            }
                        })()}
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default CollectionView;
