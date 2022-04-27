import MainLayout from "../../layout";
import { useContext, useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../store/tokenContext";
const TokenPage = () => {
    const tokenContext = useContext(TokenContext);
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState();
    const { tokenId } = useParams();
    useEffect(() => {
        document.title = "THE LUUF - Collection";
        setLoader(true);
        setTimeout(() => {
            tokenContext.findToken(tokenId);
            setToken(tokenContext.token);
        }, 1500);

        if (token !== undefined) setLoader(false);
    }, [tokenId, tokenContext, token]);
    return (
        <MainLayout>
            {loader && (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            )}
            {!loader && (
                <section className="token-page">
                    <div className="page-cover"></div>
                    <div className="token-contents ">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={8}>
                                <div className="left-content">
                                    <div className="token-img"></div>
                                    <div className="creator"></div>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="token-right">
                                    <div className="token-info"></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            )}
        </MainLayout>
    );
};
export default TokenPage;
