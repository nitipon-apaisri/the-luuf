import { Button, Row, Col } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { collections } from "../../../db";
import InfiniteScroll from "react-infinite-scroll-component";
import collectionPFP from "../../../assets/images/collection-mock-pfp.svg";
const Collection = ({ accountName }) => {
    const [createdCollections, setCreatedCollections] = useState([]);
    const fetchMoreData = () => {
        setTimeout(() => {
            const findCreatedTokens = collections.slice(createdCollections.length, createdCollections.length + 3).filter((r) => {
                return r.creator === accountName;
            });
            findCreatedTokens.forEach((collection) => {
                setCreatedCollections((prevData) => [...prevData, collection]);
            });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - collection`;
    }, [accountName]);
    useEffect(() => {
        const findCreatedCollections = collections.slice(0, 3).filter((r) => {
            return r.createdBy === accountName;
        });
        if (createdCollections.length === 0) {
            findCreatedCollections.forEach((collection) => {
                setCreatedCollections((collections) => [...collections, collection]);
            });
        }
    }, [accountName, createdCollections]);
    return (
        <section className="collection-container">
            <div className="title">
                <h1>Collections</h1>
                <Button type="primary">Filter</Button>
            </div>
            <div className="created-collections">
                <InfiniteScroll dataLength={createdCollections.length} next={fetchMoreData} hasMore={true}>
                    <Row
                        gutter={[
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                        ]}
                    >
                        {createdCollections.map((row, index) => (
                            <Col span={8} key={row.id}>
                                <a href={`/token/${row.id}`}>
                                    <div className="medium-card-block">
                                        <div className="medium-card-cover"></div>
                                        <div className="medium-card-profile">
                                            <img src={collectionPFP} alt="pfp" />
                                            <div className="medium-card-name">
                                                <h5>{row.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </InfiniteScroll>
            </div>
        </section>
    );
};

export default Collection;
