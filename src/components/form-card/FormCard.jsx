import { Card, CardBody, Stack, Button } from "@chakra-ui/react";
import FormHeading from "../form-heading/FormHeading";
import FormMeta from "../form-meta/FormMeta";
import FormStep1 from "../form-step1/FormStep1";
import FormStep2 from "../form-step2/FormStep2";
import FormStep3 from "../form-step3/FormStep3";
import FormStep4 from "../form-step4/FormStep4";
import CalcFields from "../calc-fields/CalcFields";

const FormCard = () => {

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
          <CalcFields/>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default FormCard;
