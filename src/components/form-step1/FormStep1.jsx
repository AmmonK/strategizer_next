import { Box, Textarea, Heading, Tag, Grid } from "@chakra-ui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import ValueSlider from "../value-slider/ValueSlider";
import useFormStore from "@/store/formStore";

const FormStep1 = () => {
  const critical = useFormStore((state) => state.critical);
  const setCritical = useFormStore((state) => state.setCritical);
  const [hypothesis, setHypothesis] = useFormStore((state) => [
    state.hypothesis,
    state.setHypothesis,
  ]);

  return (
    <Box>
      <Heading as='h3' size='sm' my='3'>
        Step 1: Hypothesis
      </Heading>

      <Grid templateColumns='50% 20%' gap='6'>
        <Tag bg='white' borderRadius='0'>
          <Heading as='h3' size='md'>
            We believe that
          </Heading>
        </Tag>

        <ValueSlider
          icon={ExclamationTriangleIcon}
          onChange={setCritical}
          value={critical}
        />
      </Grid>
      <Textarea
        bg='white'
        borderRadius='0'
        placeholder='Write your hypothesis here'
        onChange={(event) => setHypothesis(event.target.value)}
        value={hypothesis}
      />
    </Box>
  );
};

export default FormStep1;
