import React from "react";
import { Col, Row } from "antd";
import { category } from "../../db";
const Category = () => {
    return (
        <article className="category-container">
            <h1>Category</h1>
            <div className="category block-contents">
                <div className="category-row">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {category.slice(0, 3).map((row, index) => (
                            <Col span={8} key={row.title}>
                                <div className="card-category">
                                    <div className="card-category-cover" style={{ backgroundColor: `${row.bgColor}` }}></div>
                                    <h2>{row.title}</h2>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="category-row">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {category.slice(3, 6).map((row, index) => (
                            <Col span={8} key={row.title}>
                                <div className="card-category">
                                    <div className="card-category-cover" style={{ backgroundColor: `${row.bgColor}` }}></div>
                                    <h2>{row.title}</h2>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </article>
    );
};

export default Category;
