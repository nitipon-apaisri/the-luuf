import { Layout } from "antd";
import { Input } from "antd";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const MainLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <nav>
                    <Link to={"/"}>
                        <div className="nav-banner">
                            <div className="logo-outter">
                                <img src={Logo} alt="4"></img>
                            </div>
                            <h4>THE LUUF</h4>
                        </div>
                    </Link>
                    <div className="nav-search-bar">
                        <Search placeholder="Search items, collection, and accounts" enterButton />
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <h4>Explore</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/marketplace"}>
                                <h4>Marketplace</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <h4>Stats</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <h4>Resources</h4>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            <Content>{children}</Content>
            <Footer>
                <div className="nav-banner">
                    <div className="logo-outter">
                        <img src={Logo} alt="4"></img>
                    </div>
                    <h4>THE LUUF</h4>
                </div>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
