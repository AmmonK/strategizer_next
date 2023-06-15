import { Button, Icon, Grid } from "@chakra-ui/react";
import formStore from "@/store/formStore";
import { useState, useEffect } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const CalcFields = () => {
  const [calcValue, setCalcValue] = useState("");
  const [hostname, setHostname] = useState("");


  const testName = formStore((state) => state.testName);
  const deadline = formStore((state) => state.deadline);
  const assignedTo = formStore((state) => state.assignedTo);
  const duration = formStore((state) => state.duration);
  const critical = formStore((state) => state.critical);
  const cost = formStore((state) => state.cost);
  const data = formStore((state) => state.data);
  const time = formStore((state) => state.time);

  const hypothesis = formStore((state) => state.hypothesis);
  const test = formStore((state) => state.test);
  const metric = formStore((state) => state.metric);
  const criteria = formStore((state) => state.criteria);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const calcUrl = () => {
    const form = {
      testName,
      deadline,
      assignedTo,
      duration,
      critical,
      cost,
      data,
      time,
      hypothesis,
      test,
      metric,
      criteria,
    };
    console.log(form);
    const encoded = btoa(JSON.stringify(form));
    console.log(encoded);
    setCalcValue(encoded);
    navigator.clipboard.writeText(encoded);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(calcValue);
  };

  return (
    <>
      <Grid templateColumns='66% 30%' gap='3'>
        <Button colorScheme='blue' onClick={calcUrl}>
          Generate Short Code
        </Button>
        <Button colorScheme='blue' variant='solid' onClick={copyToClipboard}>
          <Icon boxSize={4} as={ClipboardDocumentIcon} />
        </Button>
      </Grid>
      {calcValue}
      <a href={'http://' + hostname + "/" + calcValue}>link</a>
    </>
  );
};

export default CalcFields;
