import { VStack, IconButton } from "@chakra-ui/react";
import { FaTrophy, FaHeartbeat, FaCalendarAlt, FaEnvelope, FaWeight } from "react-icons/fa";
import { FC } from "react";

const Sidebar: FC = () => {
    return (
        <VStack
            spacing={4}
            align="center"
            bg="gray.50" 
            p={4}
            h="100vh"
            w={["60px", "80px", "100px"]}
        >
            <IconButton aria-label="Health" icon={<FaHeartbeat />} size="lg" variant="ghost" />
            <IconButton aria-label="Goals" icon={<FaTrophy />} size="lg" variant="ghost" />
            <IconButton aria-label="Calendar" icon={<FaCalendarAlt />} size="lg" variant="ghost" />
            <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" variant="ghost" />
            <IconButton aria-label="Weight" icon={<FaWeight />} size="lg" variant="ghost" />
        </VStack>
    );
};

export default Sidebar;
