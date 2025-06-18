"use client";
import { Container, Flex, Box, Image, Text, HStack } from "@chakra-ui/react";
import HeroSection from "@/containers/home-page/hero-section";
import About from "@/containers/home-page/about";
import Projects from "@/containers/home-page/projects";
import { base } from "framer-motion/client";

export default function Home() {
  return (
    <Box maxWidth={"1440px"} mx={"auto"} px={4}>
      <HStack
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        flexGrow={1}
        pt={{
          base: "140px",
          md: "100px",
          lg: "100px",
          xl: "200px",
          "2xl": "200px",
        }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          // bgImage={"/images/hero-bg-dark.svg"}
          // bgRepeat={"no-repeat"}
          // bgPos={"bottom"}
          // bgSize={"contain"}
          position={{ base: "relative", lg: "sticky" }}
          top={{ base: "0px", lg: "0px" }}
          maxW={{ base: "100%", lg: "400px" }}
          maxH={"80vh"}
        >
          <Box
            px={8}
            py={4}
            height={"100%"}
            borderY={"6px solid"}
            borderRadius={"12px"}
            bg="brand.200"
            borderColor={"primary"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={0}
          >
            <Box
              maxW={{ base: "100%", lg: "300px" }}
              overflow={"hidden"}
              maxH={"350px"}
              filter={"grayscale(50%)"}
              // border={"10px solid"}
              borderColor={"brand.200"}
              borderRadius={"12px"}
              mb="30px"
              bg={"brand.300"}
            >
              <Image
                src={"/images/profile.svg"}
                alt={"profile-icon"}
                width={400}
                height={400}
              />
            </Box>
            <Text
              fontSize={"24px"}
              textAlign={"center"}
              fontWeight={700}
              color={"brand.700"}
              mb="20px"
            >
              Raju Vemula
            </Text>
            <Text
              fontSize={"16px"}
              textAlign={"center"}
              fontWeight={500}
              color={"brand.600"}
            >
              A Frontend Developer crafting high-performance Web2/Web3 dApps
              with clean, scalable UI/UX.
            </Text>
          </Box>
        </Box>

        <Box>
          <HeroSection />
          <About />
          <Projects />
        </Box>
      </HStack>
    </Box>
  );
}
