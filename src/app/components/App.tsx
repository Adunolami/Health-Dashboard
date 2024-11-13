
import React from 'react';
import { Box, Text, VStack, Flex } from '@chakra-ui/react';
import WeightChart from '@/app/components/WeightChart';
import ActivityChart from '@/app/components/ActivityChart';

const App: React.FC = () => {
  return (
    <VStack p={8} alignItems="start" spacing={8} w="full">
      <Box bg="gray.50" p={8} borderRadius="lg" boxShadow="lg">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Overview
        </Text>
        <Text fontSize="sm" color="gray.500">
          Set goals and motivate yourself
        </Text>
      </Box>

      <Flex direction={['column', 'row']} wrap="wrap" gap={6} w="full">
        <Box w={['100%', '50%']} p={4} bg="white" borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Gain Weight
          </Text>
          <WeightChart />
        </Box>

        <Box w={['100%', '50%']} p={4} bg="white" borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Activity
          </Text>
          <ActivityChart />
        </Box>
      </Flex>
    </VStack>
  );
};

export default App;
