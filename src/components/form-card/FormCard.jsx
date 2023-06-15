import { Card, CardBody, Stack, Button } from "@chakra-ui/react";
import FormHeading from "../form-heading/FormHeading";
import FormMeta from "../form-meta/FormMeta";
import FormStep1 from "../form-step1/FormStep1";
import FormStep2 from "../form-step2/FormStep2";
import FormStep3 from "../form-step3/FormStep3";
import FormStep4 from "../form-step4/FormStep4";
import CalcFields from "../calc-fields/CalcFields";

import formStore from "@/store/formStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

const FormCard = () => {
  const router = useRouter();

  const setTestName = formStore((state) => state.setTestName);
  const setDeadline = formStore((state) => state.setDeadline);
  const setAssignedTo = formStore((state) => state.setAssignedTo);
  const setDuration = formStore((state) => state.setDuration);

  const setCritical = formStore((state) => state.setCritical);
  const setCost = formStore((state) => state.setCost);
  const setData = formStore((state) => state.setData);
  const setTime = formStore((state) => state.setTime);

  const setHypothesis = formStore((state) => state.setHypothesis);
  const setTest = formStore((state) => state.setTest);
  const setMetric = formStore((state) => state.setMetric);
  const setCriteria = formStore((state) => state.setCriteria);

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      let parsed = JSON.parse(atob(slug));
      if (parsed.testName) setTestName(parsed.testName);
      if (parsed.deadline) setDeadline(parsed.deadline);
      if (parsed.assignedTo) setAssignedTo(parsed.assignedTo);
      if (parsed.duration) setDuration(parsed.duration);
      if (parsed.critical) setCritical(Number(parsed.critical));
      if (parsed.cost) setCost(Number(parsed.cost));
      if (parsed.data) setData(Number(parsed.data));
      if (parsed.time) setTime(Number(parsed.time));
      if (parsed.hypothesis) setHypothesis(parsed.hypothesis);
      if (parsed.test) setTest(parsed.test);
      if (parsed.metric) setMetric(parsed.metric);
      if (parsed.criteria) setCriteria(parsed.criteria);
    }
  }, [
    router.query,
    setTestName,
    setDeadline,
    setAssignedTo,
    setDuration,
    setCritical,
    setCost,
    setData,
    setTime,
    setHypothesis,
    setTest,
    setMetric,
    setCriteria,
  ]);

  return (
    <Card bg='#B6D157' w='40%'>
      <CardBody>
        <Stack spacing={5} align='stretch'>
          <FormHeading />
          <FormMeta />
          <FormStep1 />
          <FormStep2 />
          <FormStep3 />
          <FormStep4 />
          <CalcFields />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default FormCard;
