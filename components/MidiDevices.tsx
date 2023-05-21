import { useMIDI } from "@/hooks/useMIDI";
import { Box, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { Fragment } from "react";

type Props = {};

const MidiDevices: React.FC<Props> = ({}) => {
  const { inputs, outputs, accessError } = useMIDI();

  return (
    <Stack>
      <Heading fontSize="3xl">MIDI Devices</Heading>
      <Stack>
        <Box>
          <Heading fontSize="2xl">Inputs</Heading>
          <Wrap>
            {inputs?.map((midiInput, index) => (
              <Fragment key={index}>
                <WrapItem>{midiInput.name}</WrapItem>
              </Fragment>
            ))}
          </Wrap>
        </Box>
        <Box>
          <Heading fontSize="2xl">Outputs</Heading>
          <Wrap>
            {outputs?.map((midiOutput, index) => (
              <Fragment key={index}>
                <WrapItem>{midiOutput.name}</WrapItem>
              </Fragment>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MidiDevices;
