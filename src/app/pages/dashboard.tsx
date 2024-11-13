import DashboardLayout from "@/app/components/DashboardLayout";
import { Box, Text } from "@chakra-ui/react";

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <Box>
                <Text fontSize="2xl">Dashboard Content Here</Text>
                {/* Add more dashboard content */}
            </Box>
        </DashboardLayout>
    );
};

export default DashboardPage;
