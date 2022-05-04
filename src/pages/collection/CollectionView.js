import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout";
import instagramLogo from "../../assets/images/icons/InstagramLogo.svg";
import twitterLogo from "../../assets/images/icons/TwitterLogo.svg";
import linkIcon from "../../assets/images/icons/Link.svg";
const CollectionView = () => {
    const { collectionName } = useParams();
    useEffect(() => {
        document.title = `${collectionName} - Collection`;
    });
    return (
        <MainLayout>
            <div className="collection-view-container">
                <div className="page-cover"></div>
                <div className="collection-contents">
                    <div className="account-profile main-profile">
                        <div className="profile">
                            <div className="account-pfp main-pfp"></div>
                            {/* <h3>{account.name}</h3> */}
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
                            <div className="account-description main-content-description">{/* <p>{account.about}</p> */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CollectionView;
