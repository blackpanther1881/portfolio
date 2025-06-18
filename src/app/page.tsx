"use client";
import { Container, Flex, Box, Image, Text, HStack } from "@chakra-ui/react";
import HeroSection from "@/containers/home-page/hero-section";
import About from "@/containers/home-page/about";
import Projects from "@/containers/home-page/projects";

export default function Home() {
  return (
    <Box maxWidth={"1440px"} mx={"auto"} px={4}>
      <HStack
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        flexGrow={1}
      >
        <Box
          // bgImage={"/images/hero-bg-dark.svg"}
          // bgRepeat={"no-repeat"}
          // bgPos={"bottom"}
          // bgSize={"contain"}
          position={"sticky"}
          top={"140px"}
          maxW={"400px"}
          maxH={"80vh"}
        >
          <Box
            px={8}
            py={4}
            height={"100%"}
            border={"4px solid"}
            borderRadius={"12px"}
            bg="#fff"
            borderColor={"brand.200"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={0}
          >
            <Box
              maxW={"300px"}
              overflow={"hidden"}
              maxH={"350px"}
              filter={"grayscale(50%)"}
              // border={"10px solid"}
              borderColor={"brand.200"}
              borderRadius={"12px"}
              mb="30px"
              bg={"brand.700"}
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
              color={"brand.400"}
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
