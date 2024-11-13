import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface StatsProps {
  label: string;
  value: number;
}

const Stats: FC<StatsProps> = ({ label, value }) => {
  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md" w="full">
      <Text fontSize="lg" fontWeight="bold">{label}</Text>
      <Text fontSize="2xl" color="blue.500">{value}</Text>
    </Box>
  );
};

export default Stats;
