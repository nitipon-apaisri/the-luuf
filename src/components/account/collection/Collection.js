import { Button, Row, Col } from "antd";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { collections } from "../../../db";
import InfiniteScroll from "react-infinite-scroll-component";
import collectionPFP from "../../../assets/images/collection-mock-pfp.svg";
import { AccountContext } from "../../../store/accountContext";
const Collection = ({ accountName }) => {
    const [createdCollections, setCreatedCollections] = useState([]);
    const accountContext = useContext(AccountContext);
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
        const findCreatedCollections = collections.filter((r) => {
            return r.createdBy === accountName;
        });
        if (createdCollections.length === 0) {
            for (let collection = 0; collection < 3; collection++) {
                if (findCreatedCollections[collection] === undefined) {
                    break;
                } else {
                    setCreatedCollections((collections) => [...collections, findCreatedCollections[collection]]);
                }
            }
        }
    }, [accountName, createdCollections]);
    return (
        <section className="collection-container">
            <div className="title">
                <h1>Collections</h1>
                <div className="action-buttons">
                    {accountName === accountContext.account.name && <Button type="primary">Create Collection</Button>}
                    <Button type="primary">Filter</Button>
                </div>
            </div>
            <div className="created-collections">
                <InfiniteScroll dataLength={createdCollections.length} next={fetchMoreData} hasMore={true}>
                    <Row gutter={[32, 32]} style={{ padding: 20 }}>
                        {createdCollections.map((row, index) => (
                            <Col span={8} key={row.id}>
                                <a href={`/${accountName}/collection/${row.name}`}>
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
