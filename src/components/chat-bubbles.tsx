import { HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChatBubbleLoader = () => {
  return (
    <HStack
      justifyContent="flex-end" // ✅ Ensures loader stays on the right
      width="100%" // ✅ Makes sure it aligns properly
    >
      <HStack borderRadius="xl" spacing={1.5} alignItems="center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{
              display: "block",
              width: "6px",
              height: "6px",
              borderRadius: "50%"
            }}
            animate={{
              backgroundColor: ["#555", "#888", "#fff", "#888", "#555"], // Smooth fading in & out
              scale: [1, 1.3, 1.3, 1] // Expands when color changes, shrinks back
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0,
              delay: i * 0.3 // Staggering effect
            }}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export default ChatBubbleLoader;
