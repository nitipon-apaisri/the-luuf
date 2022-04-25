import { Col, Row } from "antd";
const Category = () => {
    const categories = [
        { title: "Art", path: "/", bgColor: "#FF5F5F" },
        { title: "Collectibles", path: "/", bgColor: "#FF7B5F" },
        { title: "Photography", path: "/", bgColor: "#FFA25F" },
        { title: "Music", path: "/", bgColor: "#2F5DFF" },
        { title: "Utility", path: "/", bgColor: "#0BA7FF" },
        { title: "Trading Cards", path: "/", bgColor: "#1ABC9C" },
    ];
    return (
        <article className="category-container">
            <h1>Category</h1>
            <div className="category block-contents">
                <div className="category-row">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {categories.slice(0, 3).map((row, index) => (
                            <Col span={8} key={row.title}>
                                <div className="card-category">
                                    <div
                                        className="card-category-cover"
                                        style={{ backgroundColor: `${row.bgColor}` }}
                                    ></div>
                                    <h2>{row.title}</h2>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="category-row">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {categories.slice(3, 6).map((row, index) => (
                            <Col span={8} key={row.title}>
                                <div className="card-category">
                                    <div
                                        className="card-category-cover"
                                        style={{ backgroundColor: `${row.bgColor}` }}
                                    ></div>
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
