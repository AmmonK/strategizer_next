import {
  Card,
  CardBody,
  Text,
  Flex,
  Input,
  Grid,
  GridItem,
  SimpleGrid,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  Icon,
  Box,
} from "@chakra-ui/react";
import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const FormCard = () => {
  return (
    <Card bg='#B6D157' w='40%'>
      <CardBody>
        <Stack spacing={5} align='stretch'>
          <Box>
          <Flex justify='space-between'>
              <Text>Test Card</Text>
              <Text>Strategizer</Text>
            </Flex>
          </Box>
          <Box>

            <Grid templateColumns='66% 30%' gap='3'>
              <Input bg='white' placeholder='Test Name' />

              <Input bg='white' placeholder='Deadline' />
              <Input bg='white' placeholder='Assigned To' />
              <Input bg='white' placeholder='Duration' />
            </Grid>
          </Box>
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
            <Text>Step 4: Criteria</Text>
            <Text>We are right if</Text>
            <Textarea bg='white' placeholder='Write your hypothesis here' />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
  // #B6D157
};

export default FormCard;
