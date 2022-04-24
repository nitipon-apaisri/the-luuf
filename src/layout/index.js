import { Layout } from "antd";
import { Input } from "antd";
import "antd/dist/antd.min.css";
import Logo from "../assets/images/logo/logo.svg";
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <nav>
                    <div className="nav-banner">
                        <div className="logo-outter">
                            <img src={Logo} alt="4"></img>
                        </div>
                        <h4>THE LUUF</h4>
                    </div>
                    <div className="nav-search-bar">
                        <Search placeholder="input search text" enterButton />
                    </div>
                    <ul>
                        <li>
                            <a href="/">Explore</a>
                        </li>
                        <li>
                            <a href="/">Marketplace</a>
                        </li>
                        <li>
                            <a href="/">Stats</a>
                        </li>
                        <li>
                            <a href="/">Resources</a>
                        </li>
                    </ul>
                </nav>
            </Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default MainLayout;
