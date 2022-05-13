import { Col, Divider, Row } from "antd";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import { topCollection } from "../../db";

const TopCollection = () => {
    return (
        <article className="top-collections">
            <h1>Top Collections</h1>
            <div className="block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={8}>
                        {topCollection.slice(0, 3).map((row, index) => (
                            <Col key={row.name}>
                                <div className="top-collection">
                                    <h5>{index + 1}</h5>
                                    <div className="collection-details">
                                        <img src={collectionPFP} alt="pfp" />
                                        <div className="details">
                                            <h5>{row.name}</h5>
                                            <div className="values">
                                                <h6>Floor price:{row.values.floorPrice} N</h6>
                                                <h6>{row.values.totalValue} N</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                            </Col>
                        ))}
                    </Col>
                    <Col span={8}>
                        {topCollection.slice(1, 4).map((row, index) => (
                            <Col key={row.name}>
                                <div className="top-collection">
                                    <h5>{index + 4}</h5>
                                    <div className="collection-details">
                                        <img src={collectionPFP} alt="pfp" />
                                        <div className="details">
                                            <h5>{row.name}</h5>
                                            <div className="values">
                                                <h6>Floor price:{row.values.floorPrice} N</h6>
                                                <h6>{row.values.totalValue} N</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                            </Col>
                        ))}
                    </Col>
                    <Col span={8}>
                        {topCollection.slice(1, 4).map((row, index) => (
                            <Col key={row.name}>
                                <div className="top-collection">
                                    <h5>{index + 7}</h5>
                                    <div className="collection-details">
                                        <img src={collectionPFP} alt="pfp" />
                                        <div className="details">
                                            <h5>{row.name}</h5>
                                            <div className="values">
                                                <h6>Floor price:{row.values.floorPrice} N</h6>
                                                <h6>{row.values.totalValue} N</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                            </Col>
                        ))}
                    </Col>
                </Row>
            </div>
        </article>
    );
};

export default TopCollection;