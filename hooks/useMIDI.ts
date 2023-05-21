import { useState } from "react";
import { Input, Output, WebMidi } from "webmidi";
// import {WebMidi} from "./node_modules/webmidi/dist/esm/webmidi.esm.min.js";

export const useMIDI = () => {
  const [inputs, setInputs] = useState<Input[]>([]);
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [getOutputById, setGetOutputById] = useState<{
    getter?: (id: string) => Output | undefined;
  }>({ getter: undefined });
  const [getInputById, setGetInputById] = useState<{
    getter?: (id: string) => Input | undefined;
  }>({ getter: undefined });

  const [accessError, setAccessError] = useState();

  WebMidi.enable()
    .then(({ inputs, outputs, getOutputById }) => {
      setInputs(inputs);
      setOutputs(outputs);
      setGetOutputById({ getter: (id: string) => WebMidi.getOutputById(id) });
      setGetInputById({ getter: (id: string) => WebMidi.getInputById(id) });
    })
    .catch((err) => {
      setAccessError(err);
      console.log(err);
    });

  return {
    getOutputById: getOutputById.getter,
    getInputById: getInputById.getter,
    inputs,
    outputs,
    accessError,
  };
};
