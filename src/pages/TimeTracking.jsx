import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const TimeTracking = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Time Tracking
      </Heading>
      <Text>Monitor task duration with timers and manual entry.</Text>
    </Box>
  );
};

export default TimeTracking;
