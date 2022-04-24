import { Layout } from "antd";
import { Input } from "antd";
import "antd/dist/antd.css";
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
                            <a>Explore</a>
                        </li>
                        <li>
                            <a>Marketplace</a>
                        </li>
                        <li>
                            <a>Stats</a>
                        </li>
                        <li>
                            <a>Resources</a>
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
