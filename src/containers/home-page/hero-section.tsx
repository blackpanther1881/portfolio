import { Box, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconBrandGithubFilled,
  IconPhoneFilled,
  IconMailFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raju-vemula-1b0a6b1b2/",
    icon: <IconBrandLinkedinFilled size={"20px"} />,
  },
  {
    name: "GitHub",
    url: "/",
    icon: <IconBrandGithubFilled size={"20px"} />,
  },
  {
    name: "Mail",
    url: "/",
    icon: <IconMailFilled size={"20px"} />,
  },
  {
    name: "Phone",
    url: "/",
    icon: <IconPhoneFilled size={"20px"} />,
  },
];

const words = ["Frontend Dev", "Web3 Enthusiast", "Can design too"];

const HeroSection = () => {
  const [isLaptop] = useMediaQuery("(min-width: 992px)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const [text, { isDone }] = useTypewriter({
    words: ["I'm Raju Vemula"],
    loop: 1,
    typeSpeed: 60,
  });

  // const [text1, { isDone }] = useTypewriter({
  //   words: [
  //     "Frontend Developer with over 5+ years of experience and strong expertise in Web3 and DeFi applications. Demonstrated expertise in designing and implementing scalable, high-performance decentralised applications (dApps) using React.js, Next.js, and TypeScript. Skilled in integrating REST APIs and GraphQL. Excellent at collaborating with design teams to deliver seamless, user-friendly experiences.",
  //   ],
  //   loop: 1,
  //   typeSpeed: 60,
  // });

  return (
    <Box
      pos={"relative"}
      // bgColor={"#ff9165"}
      // bgImage={"/images/hero-bg-dark.svg"}
      // bgRepeat={"no-repeat"}
      // bgPos={"bottom"}
      // bgSize={"contain"}
      // flex: 1 0 0px;
    >
      <Box
        // height={{
        //   base: "auto", // 0-48em
        //   md: "auto", // 48em-80em,
        //   lg: "auto", // 48em-80em,
        //   xl: "100vh", // 80em+
        //   "2xl": "100vh",
        // }}
        // pt={{
        //   base: "100px",
        //   md: "100px",
        //   lg: "100px",
        //   xl: "200px",
        //   "2xl": "200px",
        // }}
        pt={"40px"}
        px={{ base: "10px", lg: "70px" }}
        pos={"relative"}
        display={"flex"}
        zIndex={10}
        maxW={"1240px"}
        mx={"auto"}
      >
        <Box
          // pb={{ base: "80px", md: "0px" }}
          display="flex"
          gap={{ base: "30px", lg: "80px" }}
          alignItems={{ base: "center", lg: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
          width={{ base: "100%", lg: "100%" }}
          justifyContent={"space-between"}
        >
          <Box pb={"50px"}>
            <Box
              flex={1}
              bg="text.200"
              borderRadius="10px"
              borderTopLeftRadius={"0px"}
            >
              <Text
                mb={0}
                color="white.700"
                lineHeight={"150%"}
                fontWeight={500}
                fontSize={{ base: "32px", md: "34px", lg: "44px" }}
              >
                {text}
              </Text>
            </Box>

            <Box position="relative" display="inline-block" mb={"20px"}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: isLaptop ? "500px" : "300px",
                    textAlign: "left",
                  }}
                >
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"primary_opacity50"}
                    fontSize={{ base: "32px", md: "34px", lg: "40px" }}
                  >
                    {words[index]}
                  </Text>
                </motion.div>
              </AnimatePresence>
            </Box>
            <Text
              fontSize={{ base: "16px", md: "20px", lg: "24px" }}
              //   lineHeight={{ base: "22px", md: "28px", lg: "31px" }}
              fontWeight={400}
              color={"brand.100"}
              mb="30px"
            >
              Frontend Developer with over 5+ years of experience and strong
              expertise in Web2/Web3 and DeFi applications. Demonstrated
              expertise in designing and implementing scalable, high-performance
              decentralised applications (dApps) using React.js, Next.js, and
              TypeScript. Skilled in integrating REST APIs and GraphQL.
              Excellent at collaborating with design teams to deliver seamless,
              user-friendly experiences.
              {/* <Typewriter
                words={[
                  "Frontend Developer with over 5+ years of experience and strong expertise in Web2/Web3 and DeFi applications. Demonstrated expertise in designing and implementing scalable, high-performance decentralised applications (dApps) using React.js, Next.js, and TypeScript. Skilled in integrating REST APIs and GraphQL. Excellent at collaborating with design teams to deliver seamless, user-friendly experiences.",
                ]}
                loop={1}
                cursor
                typeSpeed={40}
                deleteSpeed={0}
              /> */}
            </Text>
            <HStack gap={"30px"} mt={"40px"}>
              {socialLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.name}
                  color="primary"
                  width={"40px"}
                  bg={"brand.600"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  height={"40px"}
                  _hover={{ color: "primary", bg: "brand.700" }}
                >
                  {link.icon}
                </Link>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
