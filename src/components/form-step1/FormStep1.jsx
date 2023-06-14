import { Box, Text, Textarea, RadioGroup, Stack, Radio, Icon } from '@chakra-ui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const FormStep1 = () => {
  return (
    <Box>
    <Text>Step 1: Hypothesis</Text>
    <Text>We believe that</Text>
    <Textarea bg='white' placeholder='Write your hypothesis here' />
    <Text>Critical</Text>
    <RadioGroup>
      <Stack direction='row'>
        <Radio value='1'>
          <Icon boxSize={4} as={ExclamationTriangleIcon} />
        </Radio>
        <Radio value='2'>
          <Icon boxSize={6} as={ExclamationTriangleIcon} />
        </Radio>
        <Radio value='3'>
          <Icon boxSize={8} as={ExclamationTriangleIcon} />
        </Radio>
      </Stack>
    </RadioGroup>
  </Box>
  )
}

export default FormStep1;