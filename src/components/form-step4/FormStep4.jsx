import { Box, Textarea, Heading, Tag, Grid } from "@chakra-ui/react";

const FormStep4 = () => {
  return (
    <Box>
      <Heading as='h3' size='sm' my='3'>
        Step 4: Criteria
      </Heading>

      <Grid templateColumns='50% 20%' gap='6'>
        <Tag bg='white' borderRadius='0'>
          <Heading as='h3' size='md'>
            We are right if
          </Heading>
        </Tag>
      </Grid>
      <Textarea
        bg='white'
        borderRadius='0'
        placeholder='Write your hypothesis here'
      />
    </Box>
  );
};

export default FormStep4;
