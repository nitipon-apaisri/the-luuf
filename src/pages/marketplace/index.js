import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { tokens } from "../../db";
import MainLayout from "../../layout";
const Marketplace = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [colSpan, setColSpan] = useState(6);
    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        document.title = "THE LUUF - Marketplace";
        window.addEventListener("resize", updateWindowSize);
        if (width < 1440) {
            setColSpan(8);
        } else {
            setColSpan(6);
        }
    }, [width]);
    return (
        <MainLayout>
            <section className="marketplace">
                <div className="marketplace-header">
                    <h1>Marketplace</h1>
                    <Button type="primary">Filter</Button>
                </div>
                <div className="tokens">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {tokens.map((row, index) => (
                            <Col span={colSpan} key={row.id} style={{ marginBottom: 24 }}>
                                <div className="token">
                                    <div className="token-img"></div>
                                    <div className="token-info">
                                        <div className="token-name">
                                            <p>{row.creator}</p>
                                            <h5>{row.name}</h5>
                                        </div>
                                        <div className="token-value">
                                            <p>Price</p>
                                            <h5>{row.tradeInfo.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </MainLayout>
    );
};

export default Marketplace;
