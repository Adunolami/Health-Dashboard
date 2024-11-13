// components/Overview.tsx
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';

const Overview: React.FC = () => {
  return (
    <Box bg="white" p={6} borderRadius="lg" shadow="lg">
      <Heading as="h2" size="lg" mb={4}>
        Overview
      </Heading>
      <Flex justify="space-between" wrap="wrap">
        <Stat>
          <StatLabel>Reserve Energy Source</StatLabel>
          <StatNumber>78%</StatNumber>
          <StatHelpText>Good</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Pulse</StatLabel>
          <StatNumber>65 bpm</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            4.3%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Temperature</StatLabel>
          <StatNumber>36.8°C</StatNumber>
          <StatHelpText>Normal</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Hydration</StatLabel>
          <StatNumber>Low</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Calories Burnt</StatLabel>
          <StatNumber>1260 kcal</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Stamina</StatLabel>
          <StatNumber>95%</StatNumber>
        </Stat>
      </Flex>
    </Box>
  );
};

export default Overview;