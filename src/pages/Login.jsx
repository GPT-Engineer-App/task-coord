import React from "react";
import { Box, Heading, Button, Input, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Login
      </Heading>
      <Stack spacing={4}>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
