import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const footerSocialLinks = [
  {
    name: "Twitter",
    link: "",
    icon: "/",
    iconType: "stroke",
    color: "#000000",
  },
];

const footerLinks = [
  {
    title: "about",
    links: [
      {
        title: "",
        link: "/",
        isExternal: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <Box as={"footer"} bg={"primary_gradient"}>
      <Container
        maxW={"1440px"}
        px={{ base: "10px", md: "80px" }}
        py={{ base: "10px", md: "20px" }}
      >
        <Flex
          display={{ base: "block", xl: "flex" }}
          justify={"space-between"}
          align={"flex-start"}
          color={"#ffffff"}
        >
          <VStack align={{ base: "center", lg: "flex-start" }}>
            <Text color={"primary"} fontWeight={700} fontSize={"30px"}>
              RJ
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
