import styled from "@emotion/styled";
import { Text } from "@mantine/core";
import Header from "../header";
import Wallet from "../wallet";

const Content = styled.div`
  height: calc(100vh - 50px);

  padding: 10px 20px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Content>
        <Text>{children}</Text>
        <Wallet />
      </Content>
    </div>
  );
};

export default Layout;
