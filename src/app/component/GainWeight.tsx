// components/GainWeight.tsx
import { Box, Flex, Heading, Text, Progress, Button } from '@chakra-ui/react';

const GainWeight: React.FC = () => {
  return (
    <Box bg="white" p={6} borderRadius="lg" shadow="lg">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" size="lg">
          Gain Weight
        </Heading>
        <Button colorScheme="green">Create Goal</Button>
      </Flex>
      <Text mb={2}>Current Weight: 75 kg</Text>
      <Progress value={75} min={0} max={100} mb={4} />
      <Text>Goal: 70 kg</Text>
    </Box>
  );
};

export default GainWeight;