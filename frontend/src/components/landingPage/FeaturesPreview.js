import React from "react";
import { Col, Row } from "antd";
import { features } from "../../db";
const FeaturesPreview = () => {
    return (
        <article className="features-preview">
            <h1>Features</h1>
            <div className="features block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {features.map((row, index) => (
                        <Col span={6} key={row.title}>
                            <div className="feature" key={row.title}>
                                <img src={`../features/${row.icon}.svg`} alt={row.icon}></img>
                                <div className="description">
                                    <h3>{row.title}</h3>
                                    <p>{row.info}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </article>
    );
};

export default FeaturesPreview;
