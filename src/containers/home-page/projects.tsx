"use client";
import React, { useEffect, useState } from "react";
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
    name: "Figma",
    icon: "/images/tech/figma.png",
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

const projects = [
  {
    title: "Github",
    description: "/images/tools/github.png",
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

const Projects = () => {
  const [isLaptop] = useMediaQuery("(min-width: 992px)");
  return (
    <Container
      id="projects"
      maxW={"100%"}
      py={{ base: "40px", lg: "0" }}
      //   bgImage={"/images/bg/blockchain-future-bg.svg"}
      //   bgRepeat={"no-repeat"}
      //   bgSize={"cover"}
    >
      <Box
        py={{ base: "40px", lg: "100px" }}
        maxW={"1240px"}
        mx={"auto"}
        px={{ base: "30px", lg: "70px" }}
      >
        <Heading
          flex={1}
          color={"text.700"}
          fontWeight={{ base: 600, md: 700 }}
          fontSize={{ base: "22px", md: "28px", lg: "48px" }}
          lineHeight={{ base: "30px", md: "36px", lg: "61px" }}
        >
          Professional Experience
        </Heading>
        <Text
          fontWeight={{ base: 600, md: 700 }}
          fontSize={{ base: "2px", md: "20px", lg: "22px" }}
          mb={{ base: "20px", md: "30px", lg: "40px" }}
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
          >
            Persistence Wallet:
          </Text>
          <Text>
            Developed a secure, user-centric web-based crypto wallet tailored
            for the Persistence One ecosystem. The wallet enables users to
            safely store, stake, and transfer XPRT tokens with a seamless UI/UX
            experience. Integrated Ledger hardware wallet support and ensured
            full compatibility with Cosmos-native wallets such as Keplr and
            Leap, contributing to broader ecosystem accessibility and trust.
          </Text>
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
          >
            Persistence Explorer:
          </Text>
          <Text>
            Built a blockchain explorer frontend using Scala Play and SCSS,
            displaying real-time data (blocks, transactions, validators) via
            Cosmos-SDK and Tendermint RPCs.
          </Text>
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
          >
            Persistence App:
          </Text>
          <Text>
            Contributed to the development of Persistence DEX, a decentralized
            exchange enabling low-slippage swaps between XPRT (Persistence’s
            native token) and various assets within the Cosmos ecosystem.
            Focused on building seamless user interfaces, integrating
            Cosmos-based wallets. The DEX plays a key role in supporting DeFi
            liquidity on the Persistence chain.
          </Text>
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
          >
            pSTAKE Finance:
          </Text>
          <Text>
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
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
