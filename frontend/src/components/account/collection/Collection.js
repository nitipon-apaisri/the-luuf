import React from "react";
import { Button, Row, Col } from "antd";
import { useContext, useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AccountContext } from "../../../store/accountContext";
import axios from "axios";
const Collection = ({ accountName }) => {
    const accountContext = useContext(AccountContext);
    const [createdCollections, setCreatedCollections] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const fetchMoreData = () => {
        setTimeout(() => {
            axios
                .get(`http://localhost:4200/${accountName}/collections`)
                .then((collections) => {
                    if (createdCollections.length === 0) {
                        collections.data.slice(createdCollections.length, createdCollections.length + 3).forEach((collection) => {
                            setCreatedCollections((arr) => [...arr, collection]);
                        });
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                });
        }, 750);
    };
    useEffect(() => {
        document.title = `${accountName} - collection`;
        if (accountContext.account !== undefined) {
            if (accountContext.account.name === accountName) setAuth(true);
        }
    }, [accountName, accountContext]);
    useEffect(() => {
        axios
            .get(`http://localhost:4200/${accountName}/collections`)
            .then((collections) => {
                if (createdCollections.length === 0) {
                    collections.data.slice(0, 3).forEach((collection) => {
                        setCreatedCollections((arr) => [...arr, collection]);
                    });
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [accountName, createdCollections]);
    return (
        <section className="collection-container">
            <div className="title">
                <h1>Collections</h1>
                <div className="action-buttons">
                    {isAuth && <Button type="primary">Create Collection</Button>}
                    <Button type="primary">Filter</Button>
                </div>
            </div>
            {createdCollections.length !== 0 && (
                <div className="created-collections">
                    <InfiniteScroll dataLength={createdCollections.length} next={fetchMoreData} hasMore={true}>
                        <Row gutter={[32, 32]} style={{ padding: 20 }}>
                            {Array.from(new Set(createdCollections)).map((row, index) => (
                                <Col span={8} key={row.id}>
                                    <a href={`/${accountName}/collection/${row.name}`}>
                                        <div className="medium-card-block">
                                            <div className="medium-card-cover" style={{ backgroundImage: `url(${row.collectionCover})` }}></div>
                                            <div className="medium-card-profile">
                                                <img src={row.collectionLogo} alt="pfp" />
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
            )}
        </section>
    );
};

export default Collection;
