import { Box, Text, Textarea } from '@chakra-ui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const FormStep4 = () => {
  return (
    <Box>
    <Text>Step 4: Criteria</Text>
    <Text>We are right if</Text>
    <Textarea bg='white' placeholder='Write your hypothesis here' />
  </Box>
  )
}

export default FormStep4;