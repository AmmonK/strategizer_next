import { Box, Textarea, Heading, Tag, Grid } from "@chakra-ui/react";
import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import ValueSlider from "../value-slider/ValueSlider";
import useFormStore from "@/store/formStore";
const FormStep2 = () => {

  const [cost, setCost] = useFormStore((state) => [state.cost, state.setCost]);
  const [data, setData] = useFormStore((state) => [state.data, state.setData]);
  const [test, setTest] = useFormStore((state) => [state.test, state.setTest]);

  return (
    <Box>
      <Heading as='h3' size='sm' my='3'>
        Step 2: Test
      </Heading>
      <Grid templateColumns='50% 20% 20%' gap='6'>
        <Tag bg='white' borderRadius='0'>
          <Heading as='h3' size='md'>
            To verify that, we will
          </Heading>
        </Tag>

        <ValueSlider
          icon={CurrencyDollarIcon}
          onChange={setCost}
          value={cost}
        />
        <ValueSlider icon={HandThumbUpIcon} onChange={setData} value={data} />
      </Grid>
      <Textarea
        bg='white'
        borderRadius='0'
        placeholder='Write your hypothesis here'
        value={test}
        onChange={(event) => setTest(event.target.value)}
      />
    </Box>
  );
};

export default FormStep2;
