import { Box, Flex, Heading } from "@chakra-ui/layout";

const FormHeading = () => {
  return (
    <Box>
      <Flex justify='space-between'>
        <Heading as='h3' size='lg'>
          Test Card
        </Heading>
        <Heading as='h3' size='lg'>
          Strategizer
        </Heading>
      </Flex>
    </Box>
  );
};

export default FormHeading;
