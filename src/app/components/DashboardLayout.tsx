"use client"

import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "@/app/components/sidebar";
import { ReactNode, FC } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import WeightChart from "./WeightChart";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <Flex>
            <Sidebar />
            <SidebarWithHeader />
            
            <Box flex="1" p={4}>
                {children}
            </Box>
            
        </Flex>
    );
};

export default DashboardLayout;
