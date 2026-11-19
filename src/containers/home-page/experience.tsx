"use client";
import React, { useEffect, useRef } from "react";
import {
    Box,
    Text,
    Container,
    Heading,
    useMediaQuery, UnorderedList, ListItem,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionBox = motion(Box);
const experiences = [
    {
        title: "Senior Frontend Engineer",
        company: "Persistence Labs and pSTAKE Finance",
        period: "May 2023 – Dec 2025",
        bullets: [
            "Led frontend development for multiple DeFi applications used by thousands of users across Ethereum, BNB, Cosmos, and Bitcoin ecosystems.",
            "Built pSTAKE Finance, a multi-chain liquid staking platform for BNB, ATOM, XPRT, OSMO, and DYDX, scaling to $20M+ TVL using Next.js, React.js, Zustand, React Query, GraphQL, and cross-chain smart contract integrations.",
            "Managed web applications across Vercel and Cloudflare environments, including DNS, WAF, Workers, Zero Trust, and caching.",
            "Implemented event tracking and analytics with Google Analytics and real-time error monitoring with Sentry.",
            "Collaborated across design, development, and marketing teams to deliver user-centric, data-informed product features.",
        ],
    },
    {
        title: "Frontend Engineer",
        company: "Wiselog Solutions (UAE)",
        period: "Jun 2022 – May 2023",
        bullets: [
            "Contributed to the development of Persistence DEX, achieving $37M+ in trading volume across Persistence and Babylon chains using Next.js, React.js, Zustand, React Query, GraphQL, API integrations, and smart contract integrations.",
            "Built frontend features for the Toby Foundation and Toby App, an Open-MEV liquid staking platform on Solana offering tSOL.",
            "Implemented staking, real-time reward tracking, validator selection, MEV auto-compounding, wallet integrations, and DeFi user experiences.",
        ],
    },
    {
        title: "Frontend Engineer",
        company: "Persistence Labs",
        period: "Feb 2020 – Jun 2022",
        bullets: [
            "Built a secure crypto wallet for the Persistence ecosystem with Keplr, Leap, and Ledger support, serving 10K+ active users for asset management, staking XPRT, and transfers.",
            "Developed a blockchain explorer frontend using Scala Play and SCSS, consuming Cosmos SDK and Tendermint RPC data.",
            "Helped onboard 5K+ daily visitors through real-time block, validator, and transaction activity views.",
            "Built and maintained utility dApps for token bridging, staking migration, and airdrop distribution.",
        ],
    },
    {
        title: "Frontend Engineer Intern",
        company: "Cosmic Tech Labs",
        period: "May 2019 – Aug 2019",
        bullets: [
            "Built reusable UI components and responsive layouts using HTML, CSS, JavaScript, and React.",
            "Assisted in developing blockchain explorer interfaces by integrating Cosmos SDK APIs.",
        ],
    },
];

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
                {experiences.map((experience, experienceIndex) => (
                    <Box
                        key={`${experience.company}-${experience.period}`}
                        mb={experienceIndex === experiences.length - 1 ? 0 : { base: "36px", md: "48px" }}
                    >
                        <Text
                            fontWeight={{ base: 600, md: 700 }}
                            fontSize={{ base: "16px", md: "20px", lg: "22px" }}
                            mb={1}
                            color={"white.700"}
                        >
                            {experience.title}
                        </Text>
                        <Text
                            fontWeight={{ base: 600, md: 700 }}
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            mb={{ base: "16px", md: "20px", lg: "24px" }}
                            color={"brand.300"}
                        >
                            {experience.company} | {experience.period}
                        </Text>

                        <UnorderedList spacing={4} listStyleType={"none"}>
                            {experience.bullets.map((text) => (
                                <ListItem
                                    key={text}
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
                            ))}
                        </UnorderedList>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Experience;
