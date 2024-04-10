import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const TaskManagement = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Task Management
      </Heading>
      <Text>Easily create, assign, and track tasks with deadlines and attachments.</Text>
    </Box>
  );
};

export default TaskManagement;
