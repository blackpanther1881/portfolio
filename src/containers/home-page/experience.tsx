"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Text,
    Container,
    Heading,
    useMediaQuery, UnorderedList, ListItem,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionBox = motion(Box);
const list = [
    "Led frontend architecture, development, and deployment processes for DeFi and Web3\n" +
    "applications.",
    " Developed scalable, high-performance decentralised applications integrating REST APIs and GraphQL.",
    "Collaborated with UX/UI designers to ensure seamless and intuitive user experiences.",
    "Integrated crypto wallet functionalities, smart contract interactions, and implemented token swap interfaces, staking dashboards, and DeFi transaction flows for ecosystems such as BNB Ethereum, Cosmos, and Bitcoin. Developed robust, responsive, and high-performance web applications.",
    "Optimised performance by implementing best practices in security and caching strategies.",
    "Integrated marketing tracking tools to monitor user engagement and analytics for data-driven decisions.",
    "Gained hands-on experience across domains, from design to marketing strategies.",
    "Developed robust, responsive, and high-performance web applications."
]

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ width: "160px" });
        }
    }, [isInView, controls]);

    return (
        <Container
            id="projects"
            maxW={"100%"}
            px={{ base: "0px", lg: "50px" }}
        >
            <Box
                pt={{ base: "40px", lg: "80px" }}
                maxW={"1240px"}
                mx={"auto"}
                ref={ref}
            >
                <Heading
                    flex={1}
                    color={"white.700"}
                    fontWeight={{ base: 600, md: 700 }}
                    fontSize={{ base: "22px", md: "28px", lg: "48px" }}
                    lineHeight={{ base: "30px", md: "36px", lg: "61px" }}
                    mb={5}
                >
                    Professional Experience
                    <MotionBox
                        h="4px"
                        bg="yellow.400"
                        mt="2"
                        initial={{ width: 0 }}
                        animate={controls}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </Heading>
                <Text
                    fontWeight={{ base: 600, md: 700 }}
                    fontSize={{ base: "16px", md: "20px", lg: "22px" }}
                    mb={{ base: "20px", md: "30px", lg: "40px" }}
                    color={"brand.300"}
                >
                    Persistence Labs | Feb 2020 – Present (5 years+)
                </Text>

                <UnorderedList spacing={4} listStyleType={"none"}>
                    {
                        list.map((text, i) => (
                            <ListItem
                                key={i}
                                position="relative"
                                pl="28px"
                                color="brand.300"
                                _before={{
                                    content: `""`,
                                    position: "absolute",
                                    left: 0,
                                    top: "10px",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "full",
                                    bgGradient: "linear(to-br, #FFBB1A, #FF6B6B)",
                                }}
                            >
                                <Text as="span" whiteSpace="pre-line">
                                    {text}
                                </Text>
                            </ListItem>
                        ))
                    }
                </UnorderedList>
            </Box>
        </Container>
    );
};

export default Experience;
