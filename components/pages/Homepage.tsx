"use client";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Homepage: React.FC<Props> = ({}) => {
  return (
    <Center minH="100lvh" textAlign="center">
      <Stack spacing={8} height="100%">
        <Box>
          <Heading fontSize="9xl" color="orange.500" textShadow="2xl">
            ARPA
          </Heading>
          <Text textShadow="2xl" fontSize="2xl">
            Another Roland Piano App
          </Text>
        </Box>
        <Center flexGrow={1}>
          <Stack>
            <Button colorScheme="orange" onClick={() => alert("Hey !")}>
              Try me
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
};

export default Homepage;
