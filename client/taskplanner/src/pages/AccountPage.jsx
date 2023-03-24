import React, { useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/accountPage/LoginForm";

const AccountPage = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const navigate = useNavigate();

  // REDUX
  let token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return (
    <Container maxW="lg" mt={5}>
      <Tabs isFitted variant="soft-rounded" colorScheme={colorScheme}>
        <TabList mb="2rem">
          <Tab>LogIn</Tab>
          <Tab>Sign Up</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <LoginForm name={"Login"} />
          </TabPanel>

          <TabPanel p="0">
            <LoginForm name={"Signup"} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default AccountPage;
