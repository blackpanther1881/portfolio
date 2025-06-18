"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Code,
  Link,
  VStack,
  HStack,
  Container,
  Avatar,
  Image,
  Flex,
  Wrap,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Circle,
  useMediaQuery,
} from "@chakra-ui/react";
import { IconExternalLink, icons } from "@tabler/icons-react";
import { motion, useAnimation, useInView } from "framer-motion";

const list = [
  {
    title: "Run Exclusive Dev Quests",
    description: "Turn developers into power users on your chain",
  },
  {
    title: "AI-Powered Docs & Support",
    description: "Reduce friction in onboarding new devs",
  },
  {
    title: "Smarter Developer Incentives",
    description: "Reward devs for completing real-world blockchain challenges",
  },
];

const techStack = [
  {
    name: "JavaScript",
    icon: "/images/tech/js.png",
  },
  {
    name: "TypeScript",
    icon: "/images/tech/ts.png",
  },
  {
    name: "React",
    icon: "/images/tech/react.png",
  },
  {
    name: "Next.js",
    icon: "/images/tech/next.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tech/tailwind.png",
  },
  {
    name: "Chakra UI",
    icon: "/images/tech/chakra.png",
  },

  {
    name: "Bootstrap",
    icon: "/images/tech/bootstrap.png",
  },
  {
    name: "CSS",
    icon: "/images/tech/css.png",
  },
  {
    name: "HTML",
    icon: "/images/tech/html.png",
  },
  {
    name: "MUI",
    icon: "/images/tech/mui.png",
  },
  {
    name: "React Query",
    icon: "/images/tech/reactquery.png",
  },
  {
    name: "Redux",
    icon: "/images/tech/redux.png",
  },
  {
    name: "Semantic UI",
    icon: "/images/tech/semantic.png",
  },
  {
    name: "Zustand",
    icon: "/images/tech/zustand.svg",
  },
];

const web3Stack = [
  {
    name: "Ethers.js",
    icon: "/images/web3/ethers.svg",
  },
  {
    name: "Web3.js",
    icon: "/images/web3/web3js.jpg",
  },
  {
    name: "BTC",
    icon: "/images/web3/bitcoin.png",
  },
  {
    name: "Ethereum",
    icon: "/images/web3/eth.png",
  },
  {
    name: "Binance Smart Chain",
    icon: "/images/web3/bsc.png",
  },
  {
    name: "Sui",
    icon: "/images/web3/sui.webp",
  },
  {
    name: "Cosmos",
    icon: "/images/web3/cosmos.jpeg",
  },
  {
    name: "Ledger",
    icon: "/images/web3/ledger.svg",
  },
  {
    name: "OKX",
    icon: "/images/web3/okx.svg",
  },
  {
    name: "Metamask",
    icon: "/images/web3/metamask.svg",
  },
  {
    name: "Bitget",
    icon: "/images/web3/bitget.svg",
  },
  {
    name: "Keplr",
    icon: "/images/web3/keplr.png",
  },
];

const tools = [
  {
    name: "Github",
    icon: "/images/tools/github.png",
  },
  {
    name: "Figma",
    icon: "/images/tools/figma.png",
  },
  {
    name: "Vercel",
    icon: "/images/tools/vercel.png",
  },
  {
    name: "AWS",
    icon: "/images/tools/aws.svg",
  },
  {
    name: "Sentry",
    icon: "/images/tools/sentry.svg",
  },
  {
    name: "Google Analytics",
    icon: "/images/tools/ga.png",
  },
];

const MotionBox = motion(Box);

const About = () => {
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
      id="about"
      maxW={"100%"}
      pt={{ base: "40px", lg: "80px" }}
      px={0}
    >
      <Box maxW={"1240px"} mx={"auto"} ref={ref}>
        <Heading
          flex={1}
          color={"white.700"}
          fontWeight={{ base: 600, md: 700 }}
          fontSize={{ base: "22px", md: "28px", lg: "48px" }}
          lineHeight={{ base: "30px", md: "36px", lg: "61px" }}
          mb={{ base: "20px", md: "30px", lg: "40px" }}
        >
          Technical Skills & Tools
          <MotionBox
            h="4px"
            bg="yellow.400"
            mt="2"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </Heading>

        <Tabs isFitted variant="outline" position={"unset"}>
          <TabList mb="1em">
            <Tab>Technical</Tab>
            <Tab>Web3</Tab>
            <Tab>Tools</Tab>
          </TabList>
          <TabPanels>
            <TabPanel overflow={"hidden"}>
              <Text mb={4} fontSize={"18px"} color={"brand.300"}>
                A snapshot of my go-to frontend stack, from building scalable
                UIs with React, Next.js, and TypeScript to styling with Chakra
                UI, Tailwind CSS, and MUI. Tools like Zustand, Redux, and React
                Query boost state and data management. I actively explore new
                frameworks to stay sharp and build performant, maintainable apps
              </Text>
              <HStack wrap={"wrap"} mb="30px">
                {techStack.map((tech, index) => (
                  <Button
                    key={index}
                    width={"fit-content"}
                    variant="outline"
                    size="sm"
                    mr={2}
                    color={"brand.300"}
                    display="flex"
                    gap={2}
                    px={6}
                    py={5}
                  >
                    <Image
                      src={tech.icon}
                      alt={"profile-icon"}
                      width={"16px"}
                      height={"16px"}
                    />
                    {tech.name}
                  </Button>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <Text mb={4} fontSize={"18px"} color={"brand.300"}>
                These are some of the key technologies, utilities, and popular
                Web3 wallets I’ve worked with across multiple projects. From
                integrating core libraries like Ethers.js and Web3.js to working
                on dApps that connect with major ecosystems such as Ethereum,
                Cosmos, and Binance Smart Chain
              </Text>
              <HStack wrap={"wrap"} mb="30px">
                {web3Stack.map((tech, index) => (
                  <Button
                    key={index}
                    width={"fit-content"}
                    variant="outline"
                    size="sm"
                    mr={2}
                    display="flex"
                    gap={2}
                    color={"brand.300"}
                    px={6}
                    py={5}
                  >
                    <Image
                      src={tech.icon}
                      alt={"profile-icon"}
                      width={"16px"}
                      height={"16px"}
                    />
                    {tech.name}
                  </Button>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <Text mb={4} fontSize={"18px"} color={"brand.300"}>
                These are the essential tools I rely on for design, development,
                deployment, and monitoring. From collaborating in Figma,
                version-controlling with GitHub, to deploying on Vercel and AWS
                I manage the full development workflow. Monitoring tools like
                Sentry and Google Analytics help ensure quality and performance
                in production environments.
              </Text>
              <HStack wrap={"wrap"} mb="30px">
                {tools.map((tech, index) => (
                  <Button
                    key={index}
                    width={"fit-content"}
                    variant="outline"
                    size="sm"
                    mr={2}
                    display="flex"
                    gap={2}
                    color={"brand.300"}
                    px={6}
                    py={5}
                  >
                    <Image
                      src={tech.icon}
                      alt={"profile-icon"}
                      width={"16px"}
                      height={"16px"}
                    />
                    {tech.name}
                  </Button>
                ))}
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default About;
