import { Box, Text, Textarea, RadioGroup, Stack, Radio, Icon } from '@chakra-ui/react';
import { CurrencyDollarIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

const FormStep2 = () => {
  return (
    <Box>
    <Text>Step 2: Test</Text>
    <Text>To verify that, we will</Text>
    <Textarea bg='white' placeholder='Write your hypothesis here' />
    <Text>Test Cost</Text>
    <RadioGroup>
      <Stack direction='row'>
        <Radio value='1'>
          <Icon boxSize={4} as={CurrencyDollarIcon} />
        </Radio>
        <Radio value='2'>
          <Icon boxSize={6} as={CurrencyDollarIcon} />
        </Radio>
        <Radio value='3'>
          <Icon boxSize={8} as={CurrencyDollarIcon} />
        </Radio>
      </Stack>
    </RadioGroup>
    <Text>Data Reliability</Text>
    <RadioGroup>
      <Stack direction='row'>
        <Radio value='1'>
          <Icon boxSize={4} as={HandThumbUpIcon} />
        </Radio>
        <Radio value='2'>
          <Icon boxSize={6} as={HandThumbUpIcon} />
        </Radio>
        <Radio value='3'>
          <Icon boxSize={8} as={HandThumbUpIcon} />
        </Radio>
      </Stack>
    </RadioGroup>
  </Box>
  )
}

export default FormStep2;