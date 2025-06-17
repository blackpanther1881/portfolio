'use client'
import { Container, Flex,  Text} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" minH="100vh" py={8}>
      <Flex direction="column" align="center" justify="center" minH="100vh" gap={16}>
        <Flex as="footer" gap={6} wrap="wrap" justify="center">
         <Text>
           RJ
         </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
