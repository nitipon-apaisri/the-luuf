import { Col, Row } from "antd";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import { risingCreators } from "../../db";
const RisingStars = () => {
    return (
        <article className="rising-stars">
            <h1>Rising Stars</h1>
            <div className="creators block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {risingCreators.slice(0, 3).map((row, index) => (
                        <Col span={8} key={row.name}>
                            <div className="medium-card-block">
                                <div className=" medium-card-cover"></div>
                                <div className=" medium-card-profile">
                                    <img src={collectionPFP} alt="pfp" />
                                    <div className=" medium-card-name">
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

export default RisingStars;
