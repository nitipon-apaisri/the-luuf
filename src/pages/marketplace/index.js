import { Button } from "antd";
import { useEffect } from "react";
import MainLayout from "../../layout";
const Marketplace = () => {
    useEffect(() => {
        document.title = "THE LUUF - Marketplace";
    }, []);
    return (
        <MainLayout>
            <section className="marketplace">
                <div className="marketplace-header">
                    <h1>Marketplace</h1>
                    <Button type="primary">Filter</Button>
                </div>
                <div className="items"></div>
            </section>
        </MainLayout>
    );
};

export default Marketplace;
