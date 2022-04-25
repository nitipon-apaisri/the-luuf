import { Col, Row } from "antd";
const FeaturesPreview = () => {
    const featuresInfo = [
        {
            title: "Discover",
            info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
            icon: "MagnifyingGlass",
        },
        {
            title: "Buy and Sell",
            info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
            icon: "Tag",
        },
        {
            title: "Follow",
            info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
            icon: "TwitterLogo",
        },
        {
            title: "Have Fun!",
            info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
            icon: "Smiley",
        },
    ];
    return (
        <article className="features-preview">
            <h1>Features</h1>
            <div className="features block-contents">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {featuresInfo.map((row, index) => (
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
