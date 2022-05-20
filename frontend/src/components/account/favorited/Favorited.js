import { Button } from "antd";

const Favorited = () => {
    return (
        <section className="favorited-container">
            <div className="title">
                <h1>Favorited</h1>
                <Button type="primary">Filter</Button>
            </div>
        </section>
    );
};

export default Favorited;
