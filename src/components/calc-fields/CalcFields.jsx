import { Button } from "@chakra-ui/react";
import formStore from "@/store/formStore";
import { useState } from "react";

const CalcFields = () => {

  const [calcValue, setCalcValue] = useState('');

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
  const metric= formStore((state) => state.metric);
  const criteria = formStore((state) => state.criteria);

  const calcUrl = () => {
    const form = {
      testName, deadline, assignedTo, duration, critical, cost, data, time, hypothesis, test, metric, criteria
    }
    console.log(form);
    const encoded = btoa(JSON.stringify(form));
    console.log(encoded)
    setCalcValue(encoded);
  }

  return (
    <>
    <Button colorScheme='blue' onClick={calcUrl}>Button</Button>
    {calcValue}
    </>
  )
}

export default CalcFields;