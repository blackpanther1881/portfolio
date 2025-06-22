// components/ChatGreeting.tsx
import { useEffect, useState } from 'react';
import {Box, Text, Fade, Flex, IconButton} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {CloseIcon} from "@chakra-ui/icons";

type LocationData = {
    ip: string;
    country: string;
    region: string;
    city: string;
};


const MotionBox = motion(Box);

export default function ChatGreeting() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const [location, setLocation] = useState<LocationData | null>(null);

    useEffect(() => {
        fetch('/api/location')
            .then((res) => res.json())
            .then((data) => setLocation(data));
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 2000); // Show after 2s
        return () => clearTimeout(timeout);
    }, []);

    if (!visible) return null;


    console.log(location, "location")

    return (
        <Fade in={show}>
            <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                position="fixed"
                bottom="24px"
                right="24px"
                bg="gray.700"
                color="white"
                px="4"
                py="3"
                borderRadius="lg"
                boxShadow="lg"
                maxW="sm"
                zIndex={999}
            >
                <Flex justify="space-between" align="start">
                   <Box>
                       <Text fontSize="sm">
                           👋 Hi there! Thanks for visiting my page.
                       </Text>
                       {location && (
                           <Box>
                                 <Text fontSize="xs" mt={1}>
                                      Your location: {location.city}, {location.region}, {location.country}
                                 </Text>
                                 <Text fontSize="xs">
                                      IP: <Box as="span" color="yellow.300">{location.ip}</Box>
                                 </Text>
                           </Box>
                       )}
                   </Box>
                    <IconButton
                        size="xs"
                        ml={2}
                        variant="ghost"
                        colorScheme="whiteAlpha"
                        icon={<CloseIcon boxSize={2.5} />}
                        aria-label="Close chat greeting"
                        onClick={() => setVisible(false)}
                    />
                </Flex>
            </MotionBox>
        </Fade>
    );
}