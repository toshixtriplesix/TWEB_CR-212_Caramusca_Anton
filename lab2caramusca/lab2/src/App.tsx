import React, { useState } from "react";
import { Layout, Menu, Card, Form, Input, Button } from "antd";

const { Header, Content } = Layout;

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleButtonClick = () => {
    console.log("Inputs:", input1, input2, input3);
    alert("Inputs: " + input1 + ", " + input2 + ", " + input3);
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Info</Menu.Item>
          <Menu.Item key="3">Help</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px" }}>
        <Card title="Kentu 1">Caramusca Anton</Card>
        <Card title="Kentu 2">Marin Suvac</Card>
        <Card title="Kentu 3">Varzari Nicolae</Card>
        <Form style={{ marginTop: "50px" }}>
          <Form.Item label="Ce spune Toha">
            <Input
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Ce spune Marin">
            <Input
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Ce spune Colea">
            <Input
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleButtonClick}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default App;
