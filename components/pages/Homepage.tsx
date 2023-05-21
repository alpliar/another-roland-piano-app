"use client";
import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

const MidiDevices = dynamic(() => import("@/components/MidiDevices"), {
  ssr: false,
});

type Props = {};

const Homepage: React.FC<Props> = ({}) => {
  const { isOpen, onOpen, onToggle } = useDisclosure();
  return (
    <Center minH="100lvh">
      <Stack spacing={8} height="100%">
        <Box>
          <Heading fontSize="9xl" color="orange.500" textShadow="2xl">
            ARPA
          </Heading>
          <Text textShadow="2xl" fontSize="2xl" textAlign="center">
            Another Roland Piano App
          </Text>
        </Box>
        <Center flexGrow={1}>
          <Stack>
            {/* {isOpen ? ( */}
            <MidiDevices />
            {/* ) : ( */}
            {/* <Button colorScheme="orange" onClick={onOpen}>
                Try me
              </Button> */}
            {/* )} */}
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
};

export default Homepage;
