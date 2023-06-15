import { Box, Grid, Input } from "@chakra-ui/react";
import formStore from "@/store/formStore";

const FormMeta = () => {

  const [testName, setTestName] = formStore((state) => [
    state.testName,
    state.setTestName,
  ]);
  const [deadline, setDeadline] = formStore((state) => [
    state.deadline,
    state.setDeadline,
  ]);
  const [assignedTo, setAssignedTo] = formStore((state) => [
    state.assignedTo,
    state.setAssignedTo,
  ]);
  const [duration, setDuration] = formStore((state) => [
    state.duration,
    state.setDuration,
  ]);

  return (
    <Box>
      <Grid templateColumns='66% 30%' gap='3'>
        <Input
          bg='white'
          placeholder='Test Name'
          onChange={(event) => setTestName(event.target.value)}
          value={testName}
        />
        <Input
          bg='white'
          placeholder='Deadline'
          onChange={(event) => setDeadline(event.target.value)}
          value={deadline}
        />
        <Input
          bg='white'
          placeholder='Assigned To'
          onChange={(event) => setAssignedTo(event.target.value)}
          value={assignedTo}
        />
        <Input
          bg='white'
          placeholder='Duration'
          onChange={(event) => setDuration(event.target.value)}
          value={duration}
        />
      </Grid>
    </Box>
  );
};

export default FormMeta;
