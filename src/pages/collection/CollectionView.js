import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout";
import instagramLogo from "../../assets/images/icons/InstagramLogo.svg";
import twitterLogo from "../../assets/images/icons/TwitterLogo.svg";
import linkIcon from "../../assets/images/icons/Link.svg";
import { useState } from "react";
import { collections } from "../../db";
import { Divider } from "antd";
const CollectionView = () => {
    const { collectionName } = useParams();
    const [collection, setCollection] = useState();
    const [toggleState, setToggleState] = useState(1);
    const [collectionCategory, setCollectionCategory] = useState("Items");
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
                                    <p>{collection.description}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="sub-navigator">
                            <nav>
                                <ul>
                                    <li>
                                        <h4 className={` ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1, "Items")}>
                                            {collectionCategory}
                                        </h4>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <Divider />
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default CollectionView;
