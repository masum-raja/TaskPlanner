import React, { useEffect, useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  useToast,
  Box,
  InputLeftElement,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const initState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initState);
  const [show, setShow] = useState(false);
  const colorScheme = useColorModeValue("blue", "green");
  const toast = useToast();

  let token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {};

  const handleClick = () => setShow(!show);

  return (
    <Card py="3">
      <CardBody>
        <VStack maxW={"2xl"} spacing={5}>
          <InputGroup position="relative">
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="1"
              children={<EmailIcon color="gray.400" boxSize={5} />}
            />
            <Input
              placeholder="Email*"
              type="email"
              name="email"
              size="lg"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup position="relative">
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="1"
              children={<UnlockIcon color="gray.400" boxSize={5} />}
            />
            <Input
              type={show ? "text" : "password"}
              placeholder="Password*"
              name="password"
              size="lg"
              value={formData.password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem" position="absolute" top="1">
              <Button
                h="1.75rem"
                size="lg"
                variant="link"
                onClick={handleClick}
              >
                {show ? (
                  <ViewOffIcon color="gray.400" boxSize={5} />
                ) : (
                  <ViewIcon color="gray.400" boxSize={5} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            isDisabled={
              formData.email == "" || formData.password == "" ? true : false
            }
            width="100%"
            size="lg"
            onClick={handleSubmit}
            colorScheme={colorScheme}
            // isLoading={isLoading}
            // loadingText={"Login"}
          >
            {props.name}
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default LoginForm;
