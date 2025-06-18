import {
    Box,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {useTypewriter} from "react-simple-typewriter";

const words = ["Faster", "Smarter", "Effortless"];

const HeroSection = () => {
    const [isLaptop] = useMediaQuery("(min-width: 992px)");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const [text, { isDone }] = useTypewriter({
        words: ['I\'m Raju Vemula — Full-Time Frontend Developer, Weekend Freelancer.'],
        loop: 1,
        typeSpeed: 60
    });

    return (
        <Box pos={"relative"} bgColor={"#ff9165"}
             bgImage={"/images/hero-bg-dark.svg"}
             bgRepeat={"no-repeat"}
             bgPos={"bottom"}
             bgSize={"contain"}>
            <Box
                height={{
                    base: "auto", // 0-48em
                    md: "auto", // 48em-80em,
                    lg: "auto", // 48em-80em,
                    xl: "100vh", // 80em+
                    "2xl": "100vh"
                }}
                pt={{
                    base: "100px",
                    md: "100px",
                    lg: "100px",
                    xl: "100px",
                    "2xl": "100px"
                }}
                px={{ base: "16px", lg: "0" }}
                pos={"relative"}
                display={"flex"}
                zIndex={10}
                maxW={"1180px"}
                mx={"auto"}
            >
                <Box
                    pb={{ base: "80px", md: "0px" }}
                    display="flex"
                    gap={{ base: "30px", lg: "40px" }}
                    alignItems={{ base: "center", lg: "center" }}
                    flexDirection={{ base: "column", lg: "row" }}
                    width={{ base: "100%", lg: "auto" }}
                    justifyContent={"space-between"}
                >

                    <Box
                        flex={1}
                        bg="text.200"
                        borderRadius="10px"
                        borderTopLeftRadius={"0px"}
                        pb={"50px"}
                    >
                        <Text
                            mb={2}
                            color="text.500"
                            lineHeight={"150%"}
                            fontWeight={500}
                            fontSize={"50px"}
                        >
                            {text}
                        </Text>
                    </Box>
                    <Box overflow={"hidden"} filter={"grayscale(80%)"} maxW={"400px"} maxH={"400px"} border={"2px solid"} borderRadius={"50%"}>
                        <Image
                            src={"/images/profile.svg"}
                            alt={"profile-icon"}
                            width={400}
                            height={400}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
