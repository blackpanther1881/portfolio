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
import { motion, useAnimation, useInView } from "framer-motion";
import { IconExternalLink, icons } from "@tabler/icons-react";

const MotionBox = motion(Box);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: "160px" });
    }
  }, [isInView, controls]);
  const [isLaptop] = useMediaQuery("(min-width: 992px)");
  return (
    <Container
      id="projects"
      maxW={"100%"}
      py={{ base: "40px", lg: "0" }}
      //   bgImage={"/images/bg/blockch
        //   ain-future-bg.svg"}
      //   bgRepeat={"no-repeat"}
      //   bgSize={"cover"}
        px={0}
    >
      <Box
        py={{ base: "40px", lg: "100px" }}
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
        <Box
          bg={"brand.600"}
          px={{ base: "20px", md: "30px" }}
          py={"20px"}
          borderRadius={"20px"}
          boxShadow={"md"}
          borderX={"6px solid"}
          mb={8}
        >
          <Text
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: "20px", md: "20px", lg: "24px" }}
            mb={2}
            color={"brand.200"}
          >
            Persistence Wallet:
          </Text>
          <Text color={"brand.300"}>
            Developed a secure, user-centric web-based crypto wallet tailored
            for the Persistence One ecosystem. The wallet enables users to
            safely store, stake, and transfer XPRT tokens with a seamless UI/UX
            experience. Integrated Ledger hardware wallet support and ensured
            full compatibility with Cosmos-native wallets such as Keplr and
            Leap, contributing to broader ecosystem accessibility and trust.
          </Text>
          <Link
            href="https://wallet.persistence.one/"
            isExternal
            mt={2}
            color={"primary"}
            display="inline-block"
          >
            https://wallet.persistence.one/
          </Link>
        </Box>
        <Box
          bg={"brand.600"}
          px={{ base: "20px", md: "30px" }}
          py={"20px"}
          borderRadius={"20px"}
          boxShadow={"md"}
          borderX={"6px solid"}
          mb={8}
        >
          <Text
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: "20px", md: "20px", lg: "24px" }}
            mb={2}
            color={"brand.200"}
          >
            Persistence Explorer:
          </Text>
          <Text color={"brand.300"}>
            Built a blockchain explorer frontend using Scala Play and SCSS,
            displaying real-time data (blocks, transactions, validators) via
            Cosmos-SDK and Tendermint RPCs.
          </Text>
          <Link
            href="https://explorer.persistence.one/"
            isExternal
            mt={2}
            color={"primary"}
            display="inline-block"
          >
            https://explorer.persistence.one/ - (Deprecated)
          </Link>
        </Box>
        <Box
          bg={"brand.600"}
          px={{ base: "20px", md: "30px" }}
          py={"20px"}
          borderRadius={"20px"}
          boxShadow={"md"}
          borderX={"6px solid"}
          mb={8}
        >
          <Text
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: "20px", md: "20px", lg: "24px" }}
            mb={2}
            color={"brand.200"}
          >
            Persistence App:
          </Text>
          <Text color={"brand.300"}>
            Contributed to the development of Persistence DEX, a decentralized
            exchange enabling low-slippage swaps between XPRT (Persistence’s
            native token) and various assets within the Cosmos ecosystem.
            Focused on building seamless user interfaces, integrating
            Cosmos-based wallets. The DEX plays a key role in supporting DeFi
            liquidity on the Persistence chain.
          </Text>
          <Link
            href="https://app.persistence.one/"
            isExternal
            mt={2}
            color={"primary"}
            display="inline-block"
          >
            https://app.persistence.one/
          </Link>
        </Box>
        <Box
          bg={"brand.600"}
          px={{ base: "20px", md: "30px" }}
          py={"20px"}
          borderRadius={"20px"}
          boxShadow={"md"}
          borderX={"6px solid"}
          mb={8}
        >
          <Text
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: "20px", md: "20px", lg: "24px" }}
            mb={2}
            color={"brand.200"}
          >
            pSTAKE Finance:
          </Text>
          <Text color={"brand.300"}>
            Developed and managed a web-based platform, enabling users to
            liquid-stake assets across multiple blockchains, including Bitcoin
            (BTC), Cosmos ecosystem tokens (ATOM, XPRT, OSMO, DYDX, STARS), and
            Binance Chain (BNB). Implemented secure custody integrations and
            partnered with top-tier audit firms to uphold high security and
            compliance standards across the platform and contributed to the
            platform’s rapid growth, helping it reach over $20M in Total Value
            Locked (TVL) — solidifying its position as one of the leading liquid
            staking solutions in the multi-chain DeFi space.
          </Text>
          <Link
            href="https://app.pstake.finance/"
            isExternal
            mt={2}
            color={"primary"}
            display="inline-block"
          >
            https://app.pstake.finance/
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
