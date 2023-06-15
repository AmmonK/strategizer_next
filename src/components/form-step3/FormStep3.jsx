import { Box, Textarea, Heading, Tag, Grid } from "@chakra-ui/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import ValueSlider from "../value-slider/ValueSlider";
import useFormStore from "@/store/formStore";

const FormStep3 = () => {

  const [time, setTime] = useFormStore((state) => [state.time, state.setTime]);
  const [metric, setMetric] = useFormStore((state) => [state.metric, state.setMetric]);

  return (
    <Box>
      <Heading as='h3' size='sm' my='3'>
        Step 3: Metric
      </Heading>

      <Grid templateColumns='50% 20%' gap='6'>
        <Tag bg='white' borderRadius='0'>
          <Heading as='h3' size='md'>
            And Measure
          </Heading>
        </Tag>

        <ValueSlider icon={ClockIcon} onChange={setTime} value={time} />
      </Grid>
      <Textarea
        bg='white'
        borderRadius='0'
        placeholder='Write your hypothesis here'
        value={metric}
        onChange={(event) => setMetric(event.target.value)}
      />
    </Box>
  );
};

export default FormStep3;
