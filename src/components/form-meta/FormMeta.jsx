import { Box, Grid, Input } from "@chakra-ui/react";

const FormMeta = () => {
  return (
    <Box>
      <Grid templateColumns='66% 30%' gap='3'>
        <Input bg='white' placeholder='Test Name' />

        <Input bg='white' placeholder='Deadline' />
        <Input bg='white' placeholder='Assigned To' />
        <Input bg='white' placeholder='Duration' />
      </Grid>
    </Box>
  );
};

export default FormMeta;
