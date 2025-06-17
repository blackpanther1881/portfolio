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
  Link
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const footerSocialLinks = [
  {
    name: "Twitter",
    link: "",
    icon: "/",
    iconType: "stroke",
    color: "#000000"
  }

];

const footerLinks = [
  {
    title: "about",
    links: [
      {
        title: "",
        link: "/",
        isExternal: true
      }
    ]
  },
 ];

const Footer = () => {
  return (
    <Box as={"footer"} bg={"primary_gradient"}>
      <Container
        maxW={"1440px"}
        px={{ base: "30px", md: "80px" }}
        py={{ base: "30px", md: "40px" }}
      >
        <Flex
          display={{ base: "block", xl: "flex" }}
          justify={"space-between"}
          align={"flex-start"}
          color={"#ffffff"}
        >
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            mb={{ base: "20px", xl: "0" }}
          >
            <Text color={"primary"} fontWeight={700} fontSize={"30px"}>RJ</Text>
          </VStack>
          <SimpleGrid
            columns={2}
            gap={{ base: "30px", xl: "70px", "2xl": "130px" }}
            justifyContent={"end"}
            display={"none"}
          >
            {footerLinks.map((link) => (
              <VStack
                key={link.title}
                align={"flex-start"}
                gap={{ base: 2, xl: 4 }}
              >
                <Heading
                  color={"primary"}
                  fontWeight={{ base: 600, md: 700 }}
                  fontSize={{ base: "12px", md: "16px" }}
                  lineHeight={{ base: "22px", md: "28px" }}
                >
                  {link.title}
                </Heading>
                {link.links.map((item) => (
                  <Link
                    href={item.link}
                    key={item.title}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                    fontSize={{ base: "12px", xl: "14px" }}
                    lineHeight={{ base: "22px", md: "28px" }}
                  >
                    <Button
                        variant={"outline"}
                      key={item.title}
                      color={"primary_600"}
                      padding={0}
                      justifyContent={"start"}
                      fontSize={{ base: "12px", xl: "16px" }}
                      fontWeight={400}
                      opacity={0.69}
                      _hover={{
                        color: "primary.red"
                      }}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
          <HStack gap={4} mt={4} display={{ base: "none", xl: "flex" }}>
            {footerSocialLinks.map((link) => (
              <Link
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noopenner noreferrer"
                aria-label={link.name}
              >
                <Image src={link.icon} width={24} height={24} alt={"Logo"} />
              </Link>
            ))}
          </HStack>
        </Flex>
        <HStack
          gap={4}
          mt={6}
          display={{ base: "flex", md: "none" }}
          justify={"center"}
        >
          {footerSocialLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noopenner noreferrer"
              aria-label={link.name}
            >
              <Image src={link.icon} width={24} height={24} alt={"Logo"} />
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
