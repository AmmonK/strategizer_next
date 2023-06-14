import {
  Card,
  CardBody,
  Text,
  Flex,
  Input,
  Grid,
  GridItem,
  SimpleGrid,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  Icon,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import FormHeading from "../form-heading/FormHeading";
import FormMeta from "../form-meta/FormMeta";
import FormStep1 from "../form-step1/FormStep1";
import FormStep2 from "../form-step2/FormStep2";
import FormStep3 from "../form-step3/FormStep3";
import FormStep4 from "../form-step4/FormStep4";

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
        </Stack>
      </CardBody>
    </Card>
  );
  // #B6D157
};

export default FormCard;
