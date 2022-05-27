import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import collectionPFP from "../../assets/images/collection-mock-pfp.svg";
import { risingCreators } from "../../db";
const RisingStars = () => {
    const [risingCreators, setRisingCreators] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4200/wallets")
            .then((wallets) => {
                if (risingCreators.length === 0) {
                    for (let i = 0; i < 3; i++) {
                        setRisingCreators((arr) => [...arr, wallets.data[Math.floor(Math.random() * wallets.data.length)]]);
                    }
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [risingCreators]);
    return (
        <article className="rising-stars">
            <h1>Rising Stars</h1>
            {risingCreators.length !== 0 && (
                <div className="creators block-contents">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {risingCreators.map((row, index) => (
                            <Col span={8} key={row.name}>
                                <div className="medium-card-block">
                                    <div className=" medium-card-cover" style={{ backgroundImage: `url(${row.medias.banner})` }}></div>
                                    <div className=" medium-card-profile">
                                        <img src={row.medias.pfp} alt="pfp" />
                                        <div className=" medium-card-name">
                                            <h5>{row.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </article>
    );
};

export default RisingStars;
