import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import Token from "../../components/globally/Token";
import { tokens } from "../../db";
import MainLayout from "../../layout";
const Marketplace = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [colSpan, setColSpan] = useState(6);
    const [loader, setLoader] = useState(false);
    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        document.title = "THE LUUF - Marketplace";
    }, []);
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1500);
    }, []);
    useEffect(() => {
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
                {loader && (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                )}
                {!loader && (
                    <div className="tokens">
                        <Row
                            gutter={[
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                                { xs: 8, sm: 16, md: 24, lg: 32 },
                            ]}
                        >
                            {tokens.map((row, index) => (
                                <Col span={colSpan} key={row.id}>
                                    <a href={`/token/${row.id}`}>
                                        <Token data={row} />
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </section>
        </MainLayout>
    );
};

export default Marketplace;
