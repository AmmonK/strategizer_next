import { Box, Text, Textarea, RadioGroup, Stack, Radio, Icon } from '@chakra-ui/react';
import { ClockIcon } from '@heroicons/react/24/outline';

const FormStep3 = () => {
  return (
    <Box>
    <Text>Step 3: Metric</Text>
    <Text>And measure</Text>
    <Textarea bg='white' placeholder='Write your hypothesis here' />
    <Text>Time Required</Text>
    <RadioGroup>
      <Stack direction='row'>
        <Radio value='1'>
          <Icon boxSize={4} as={ClockIcon} />
        </Radio>
        <Radio value='2'>
          <Icon boxSize={6} as={ClockIcon} />
        </Radio>
        <Radio value='3'>
          <Icon boxSize={8} as={ClockIcon} />
        </Radio>
      </Stack>
    </RadioGroup>
  </Box>
  )
}

export default FormStep3;