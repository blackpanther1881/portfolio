"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Code,
  Link,
  Container,
  Heading, SimpleGrid,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";


const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Completed",
  },
  {
    value: "20+",
    label: "Technologies Used",
  },
];

const MotionBox = motion(Box);
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: "140px" });
    }
  }, [isInView, controls]);

  return (
    <Container
      id="projects"
      maxW={"100%"}
      //   bgSize={"cover"}
      px={{ base: "0px", lg: "50px" }}
      pb={"60px"}
    >
      <Box
        pt={{ base: "40px", lg: "80px" }}
        maxW={"1240px"}
        mx={"auto"}
        ref={ref}
        mb={8}
      >
        <Heading
          flex={1}
          color={"white.700"}
          fontWeight={{ base: 600, md: 700 }}
          fontSize={{ base: "22px", md: "28px", lg: "48px" }}
          lineHeight={{ base: "30px", md: "36px", lg: "61px" }}
          mb={8}
        >
          Projects
          {/*<Box*/}
          {/*    width="48px"*/}
          {/*    height="48px"*/}
          {/*    borderRadius="full"*/}
          {/*    display="flex"*/}
          {/*    alignItems="center"*/}
          {/*    justifyContent="center"*/}
          {/*    bgGradient="linear(to-br, #FFBB1A, #FF6B6B)"*/}
          {/*>*/}
          {/*  <Image src="/icons/hat.svg" alt="icon" width="20px" height="20px" />*/}
          {/*</Box>*/}

          <MotionBox
            h="4px"
            bg="yellow.400"
            mt="2"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </Heading>

        <Box
          bg={"brand.600"}
          px={{ base: "20px", md: "30px" }}
          py={"20px"}
          borderRadius={"20px"}
          boxShadow={"md"}
          borderX={"6px solid"}
          mb={4}
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

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {stats.map((stat, index) => (
            <Box
                key={index}
                border="0.5px solid"
                borderColor="#FFC300"
                borderRadius="xl"
                p={8}
                bg="#343542"
                role={"group"}
                textAlign="center"
                transition="all 0.3s ease-in-out"
                transform="scale(1)"
                _hover={{
                  transform: "scale(1.05)",
                }}
                boxShadow="0 0 10px #FFC30066"
            >
              <Text fontSize="4xl" fontWeight="bold" color={"#ffbb1b"}     transition="transform 0.3s ease-in-out"
                    _groupHover={{ transform: "scale(1.1)" }}>
                {stat.value}
              </Text>
              <Text fontSize="lg" color="gray.300" mt={2}>
                {stat.label}
              </Text>
            </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
