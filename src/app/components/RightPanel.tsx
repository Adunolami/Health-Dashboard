import { FC } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const RightPanel: FC = () => {
  return (
    <VStack spacing={4} align="stretch" bg="gray.50" p={4} h="100vh" w="300px">
      <Box bg="white" p={4} borderRadius="md" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">Notifications</Text>
        {/* Notification content */}
      </Box>
      <Box bg="white" p={4} borderRadius="md" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">Upcoming Events</Text>
        {/* Event content */}
      </Box>
    </VStack>
  );
};

export default RightPanel;
