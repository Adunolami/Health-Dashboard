// components/Activity.tsx
import { Box, Flex, Heading, Text, ResponsiveValue, useBreakpointValue } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Sun', value: 10 },
  { day: 'Mon', value: 15 },
  { day: 'Tue', value: 12 },
  { day: 'Wed', value: 20 },
  { day: 'Thu', value: 18 },
  { day: 'Fri', value: 22 },
  { day: 'Sat', value: 16 },
];

const Activity: React.FC = () => {
  const height: ResponsiveValue<number> = useBreakpointValue({
    base: 300,
    md: 400,
    lg: 500,
  });

  return (
    <Box bg="white" p={6} borderRadius="lg" shadow="lg">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" size="lg">
          Activity
        </Heading>
      </Flex>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Activity;