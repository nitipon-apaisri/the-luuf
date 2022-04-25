import { Col, Row } from "antd";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
const TrendingCollection = () => {
    const trendingCollection = [{ name: "example1" }, { name: "example2" }, { name: "example3" }];
    return (
        <article className="trending-collections ">
            <h1>Trending Collections</h1>
            <div className="collections block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {trendingCollection.slice(0, 3).map((row, index) => (
                        <Col span={8} key={row.name}>
                            <div className="medium-card-block">
                                <div className="medium-card-cover"></div>
                                <div className="medium-card-profile">
                                    <img src={collectionPFP} alt="pfp" />
                                    <div className="medium-card-name">
                                        <h5>{row.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </article>
    );
};

export default TrendingCollection;
