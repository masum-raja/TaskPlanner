import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { EditIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  let token = JSON.parse(localStorage.getItem("token"));

  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "20",
        backgroundColor: colorMode == "light" ? "#FFFFFF" : "#1A202C",
      }}
    >
      <Container maxW="6xl" py={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <RouterLink to="/" fontSize="2xl" fontWeight="500">
            <Text fontSize="2xl" fontWeight="500">
              Task Planner
            </Text>
          </RouterLink>
          <HStack spacing={4}>
            <RouterLink to="/create">
              <Flex
                alignItems="center"
                _hover={{ textDecoration: "underline" }}
              >
                <EditIcon />
                <Text ml={2}>Sprint</Text>
              </Flex>
            </RouterLink>
            {token === null ? (
              <RouterLink to="/account">
                <Text _hover={{ textDecoration: "underline" }}>Sign In</Text>
              </RouterLink>
            ) : (
              <Text _hover={{ textDecoration: "underline" }}>Log Out</Text>
            )}
            <Button
              onClick={toggleColorMode}
              fontSize="md"
              rounded="full"
              p={0}
            >
              {colorMode === "light" ? <BsMoon /> : <BsSun />}
            </Button>
          </HStack>
        </Flex>
      </Container>
      <hr />
    </header>
  );
}

export default Navbar;
