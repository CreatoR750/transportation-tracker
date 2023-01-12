import "./App.scss";
import { Layout, Typography } from "antd";
import Table from "./components/Table/Table";
import Map from "./components/Map/Map";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout>
            <Header>
                <Title level={2}>Transportation tracker</Title>
            </Header>
            <Layout>
                <Sider width={"40%"}>
                    <Title level={4}>Таблица заявок</Title>
                    <Table />
                </Sider>
                <Content>
                    <Title level={4}>Карта</Title>
                    <Map />
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
