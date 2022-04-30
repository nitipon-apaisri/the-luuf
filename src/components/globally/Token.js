const Token = ({ data }) => {
    return (
        <div className="token">
            <div className="token-img"></div>
            <div className="token-info">
                <div className="token-name">
                    <p>{data.creator}</p>
                    <h4>{data.name}</h4>
                </div>
                <div className="token-value">
                    <p>Price</p>
                    {(() => {
                        if (data.tradeInfo.sellStatus === true && data.tradeInfo.price === 0) {
                            return <h4>FREE</h4>;
                        } else if (data.tradeInfo.sellStatus === false) {
                            return <h4 className="not-for-sell">SALE</h4>;
                        } else {
                            return <h4>{data.tradeInfo.price}N</h4>;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
};

export default Token;
