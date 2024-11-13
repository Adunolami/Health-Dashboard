// pages/index.tsx
import { Box, Flex, Grid, GridItem, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Overview from '@/app/component/Overview';
import GainWeight from '@/app/component/GainWeight';
import Activity from '@/app/component/Activity';

const Dashboard: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  });

  return (
    <Box>
      <Heading as="h1" size="4xl" mb={6}>
        Health Tracker
      </Heading>
      <Grid templateColumns={gridTemplateColumns} gap={6}>
        <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
          <Overview />
        </GridItem>
        <GridItem>
          <GainWeight />
        </GridItem>
        <GridItem>
          <Activity />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;