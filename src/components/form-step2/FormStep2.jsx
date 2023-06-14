import { Box, Textarea, Heading, Tag, Grid } from "@chakra-ui/react";
import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import ValueSlider from "../value-slider/ValueSlider";
import useFormStore from "@/store/formStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FormStep2 = () => {
  const router = useRouter();

  const [cost, setCost] = useFormStore((state) => [state.cost, state.setCost]);
  const [data, setData] = useFormStore((state) => [state.data, state.setData]);

  useEffect(() => {
    const { co, da } = router.query;
    if (co) {
      console.log("updating cost to ", co);
      setCost(Number(co));
    }
    if (da) {
      console.log("updating data to ", da);
      setData(Number(da));
    }
  }, [router.query, setCost, setData]);

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
      />
    </Box>
  );
};

export default FormStep2;
