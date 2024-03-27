import React, { useEffect } from "react";
import {
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  Tabs,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl">
      <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        bg={"#e6e6e6"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="xl" fontFamily="work-sans" color="black">
          Talk-And-All
        </Text>
      </Box>
      <Box
        color={"black"}
        bg={"#e6e6e6"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        p={2}
      >
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
