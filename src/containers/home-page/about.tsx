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
import { motion, Reorder, useAnimation, useInView } from "framer-motion";


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
    name: "BSC",
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

const toolsStack = [
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
  const [techOrder, setTechOrder] = useState(techStack);
  const [web3Order, setWeb3Order] = useState(web3Stack);
  const [toolOrder, setToolOrder] = useState(toolsStack);

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
      px={{ base: "0px", lg: "50px" }}
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
            <TabPanel overflow={"hidden"} px={2}>
              <Text mb={4} fontSize={"18px"} color={"brand.300"}>
                A snapshot of my go-to frontend stack, from building scalable
                UIs with React, Next.js, and TypeScript to styling with Chakra
                UI, Tailwind CSS, and MUI. Tools like Zustand, Redux, and React
                Query boost state and data management. I actively explore new
                frameworks to stay sharp and build performant, maintainable apps
              </Text>
              <Reorder.Group
                  axis="x"
                  values={techOrder}
                  onReorder={setTechOrder}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginBottom: "30px",
                  }}
                >
                  {techOrder.map((tech, index) => (
                      <Reorder.Item
                          key={tech.name}
                          value={tech}
                          style={{ listStyle: "none" }}
                          drag={true}
                          as="div"
                      >
                        <Box
                            key={index}
                            width={"150px"}
                            height={"100px"}
                            mr={2}
                            color={"brand.300"}
                            display="flex"
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={2}
                           p={3}
                            borderRadius={"8px"}
                            border={"0.5px solid"}
                            transition="box-shadow 0.3s ease"
                            _hover={{
                              boxShadow: "0 0 8px 2px rgba(255, 187, 26, 0.4)",
                              ".icon-box": {
                                transform: "rotate(360deg)",
                              },
                            }}
                        >
                          <Box
                              borderRadius={"8px"}
                              border={"0.5px solid"}
                              width={"40px"}
                              height={"40px"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}

                          >
                           <Image
                               src={tech.icon}
                               transition="transform 0.6s ease"
                               className="icon-box"
                               alt={"profile-icon"}
                               width={"16px"}
                               height={"16px"}
                           />
                         </Box>
                          <Text fontSize={"14px"} textAlign={"center"}>
                            {tech.name}
                          </Text>
                        </Box>
                      </Reorder.Item>
                  ))
                  }
                </Reorder.Group>
            </TabPanel>
            <TabPanel pl={2}>
              <Text mb={4} fontSize={"18px"} color={"brand.300"}>
                These are some of the key technologies, utilities, and popular
                Web3 wallets I’ve worked with across multiple projects. From
                integrating core libraries like Ethers.js and Web3.js to working
                on dApps that connect with major ecosystems such as Ethereum,
                Cosmos, and Binance Smart Chain
              </Text>
              <HStack wrap={"wrap"} mb="30px">
                <Reorder.Group
                    axis="x"
                    values={web3Order}
                    onReorder={setWeb3Order}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "30px",
                    }}
                >
                  {web3Order.map((web3, index) => (
                      <Reorder.Item
                          key={web3.name}
                          value={web3}
                          style={{ listStyle: "none" }}
                          drag={true}
                          as="div"
                      >
                        <Box
                            key={index}
                            width={"150px"}
                            height={"100px"}
                            mr={2}
                            color={"brand.300"}
                            display="flex"
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={2}
                            p={3}
                            borderRadius={"8px"}
                            border={"0.5px solid"}
                            transition="box-shadow 0.3s ease"
                            justifyContent={"center"}
                            _hover={{
                              boxShadow: "0 0 8px 2px rgba(255, 187, 26, 0.4)",
                              ".icon-box": {
                                transform: "rotate(360deg)",
                              },
                            }}
                        >
                          <Box
                              borderRadius={"8px"}
                              border={"0.5px solid"}
                              width={"40px"}
                              height={"40px"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}

                          >
                            <Image
                                src={web3.icon}
                                transition="transform 0.6s ease"
                                className="icon-box"
                                alt={"profile-icon"}
                                width={"16px"}
                                height={"16px"}
                            />
                          </Box>
                          <Text fontSize={"14px"} textAlign={"center"}>
                            {web3.name}
                          </Text>
                        </Box>
                      </Reorder.Item>
                ))}
                </Reorder.Group>
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
                <Reorder.Group
                    axis="x"
                    values={toolOrder}
                    onReorder={setToolOrder}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "30px",
                    }}
                >
                  {toolOrder.map((tool, index) => (
                      <Reorder.Item
                          key={tool.name}
                          value={tool}
                          style={{ listStyle: "none" }}
                          drag={true}
                          as="div"
                      >
                        <Box
                            key={index}
                            width={"150px"}
                            height={"100px"}
                            mr={2}
                            color={"brand.300"}
                            display="flex"
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={2}
                           p={3}
                            borderRadius={"8px"}
                            border={"0.5px solid"}
                            transition="box-shadow 0.3s ease"
                            _hover={{
                              boxShadow: "0 0 8px 2px rgba(255, 187, 26, 0.4)",
                              ".icon-box": {
                                transform: "rotate(360deg)",
                              },
                            }}
                        >
                          <Box
                              borderRadius={"8px"}
                              border={"0.5px solid"}
                              width={"40px"}
                              height={"40px"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}

                          >
                            <Image
                                src={tool.icon}
                                transition="transform 0.6s ease"
                                className="icon-box"
                                alt={"profile-icon"}
                                width={"16px"}
                                height={"16px"}
                            />
                          </Box>
                          <Text fontSize={"14px"} textAlign={"center"}>
                            {tool.name}
                          </Text>
                        </Box> 
                      </Reorder.Item>
                  ))}
                </Reorder.Group>

              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default About;
