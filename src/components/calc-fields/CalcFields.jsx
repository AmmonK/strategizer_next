import { Button } from "@chakra-ui/react";
import formStore from "@/store/formStore";
import { useState } from "react";

const CalcFields = () => {

  const [calcValue, setCalcValue] = useState('');

  const testName = formStore((state) => state.testName);
  const deadline = formStore((state) => state.deadline);
  const assignedTo = formStore((state) => state.assignedTo);
  const duration = formStore((state) => state.duration);

  const calcUrl = () => {
    const form = {
      testName, deadline, assignedTo, duration
    }
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