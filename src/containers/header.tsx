'use client'
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  Button,
  useDisclosure,
  useMediaQuery,
  IconButton,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["about"];
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(activeSection, "activeSection");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.getElementById("is-sticky")?.classList.add("blurred");
      } else {
        document.getElementById("is-sticky")?.classList.remove("blurred");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isLandscape] = useMediaQuery("(max-width: 992px)");

  return (
      <Box
          as="header"
          px={{ base: "30px", lg: "60px" }}
          py={"30px"}
          id={"is-sticky"}
          background={isLandscape ? "bg.primary" : "transparent"}
          backdropFilter={"blur(10px)"}
      >
        <Box maxWidth={"1320px"} mx={"auto"}>
              <Flex justify="space-between" align="center">
                <HStack>
                  <Box pr={"100px"}>
                    <Link href="/">
                      <Text color={"primary"} fontWeight={700} fontSize={"30px"}>RJ</Text>
                    </Link>
                  </Box>
                 <Box  background={"primary_gradient"}
                       borderRadius={"10px"}
                       p={"10px"}>
                   <ChakraLink
                       href="#primary"
                       py={"2px"}
                       px={"6px"}
                       fontSize={"14px"}
                       lineHeight={"28px"}
                       fontWeight={700}
                       borderRadius={"10px"}
                       // background={
                       //   activeSection === "projects"
                       //       ? "primary_gradient"
                       //       : "transparent"
                       // }
                       color={
                         activeSection === "projects"
                             ? "brand.400"
                             : "brand.400"
                       }
                       _hover={{
                         color:"brand.200"
                       }}
                   >
                     Projects
                   </ChakraLink>
                   <ChakraLink
                       href="#experience"
                       py={"2px"}
                       px={"6px"}
                       fontSize={"14px"}
                       lineHeight={"28px"}
                       fontWeight={700}
                       borderRadius={"10px"}
                       background={
                         activeSection === "experience"
                             ? "primary_gradient"
                             : "transparent"
                       }
                       color={
                         activeSection === "projects"
                             ? "brand.400"
                             : "brand.400"
                       }
                       _hover={{
                         color:"brand.200"
                       }}
                   >
                     Experience
                   </ChakraLink>
                 </Box>

                </HStack>

                  <Button
                      className={"nav-item"}
                      variant={"primary"}
                      width={"180px"}
                      py={"11px"}
                      fontSize={"14px"}
                      height={"50px"}
                  >
                    Socials
                  </Button>
              </Flex>
          {isOpen ? (
              <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                  transition={{ duration: 0.3 }}
              >
                <VStack
                    align="center"
                    gap={"30px"}
                    pt={"40px"}
                    h={"100vh"}
                    className={"nav-item"}
                >
                  <ChakraLink
                      href="/"
                      px={4}
                      background={
                        activeSection === "how-it-works"
                            ? "primary_gradient"
                            : "transparent"
                      }
                      color={
                        activeSection === "how-it-works"
                            ? "primary"
                            : "primary_opacity50"
                      }
                      onClick={onClose}
                      fontSize={"14px"}
                      lineHeight={"28px"}
                      fontWeight={700}
                  >
                   About
                  </ChakraLink>
                </VStack>
              </motion.div>
          ) : null}
        </Box>
      </Box>
  );
}
