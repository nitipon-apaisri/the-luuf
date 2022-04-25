import { Col, Row } from "antd";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
const TrendingCollection = () => {
    return (
        <article className="trending-collection">
            <h1>Trending Collections</h1>
            <div className="collections block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={8}>
                        <div className="collection">
                            <div className="collection-cover"></div>
                            <div className="collection-profile">
                                <img src={collectionPFP} alt="pfp" />
                                <div className="collection-name">
                                    <h5>Example</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="collection">
                            <div className="collection-cover"></div>
                            <div className="collection-profile">
                                <img src={collectionPFP} alt="pfp" />
                                <div className="collection-name">
                                    <h5>Example</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="collection">
                            <div className="collection-cover"></div>
                            <div className="collection-profile">
                                <img src={collectionPFP} alt="pfp" />
                                <div className="collection-name">
                                    <h5>Example</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </article>
    );
};

export default TrendingCollection;
