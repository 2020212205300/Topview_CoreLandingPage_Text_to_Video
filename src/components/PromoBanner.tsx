import { Box, Flex, Text, Icon, HStack, Badge } from "@chakra-ui/react";
import { Gift, Sparkles, ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      h="10"
      bgGradient="linear(to-r, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))"
      overflow="hidden"
      backdropFilter="blur(8px)"
    >
      <Flex h="full" alignItems="center" justify="center" px={4}>
        <HStack spacing={{ base: 4, md: 8 }} overflow="hidden">
          <HStack spacing={3}>
            <Icon as={Sparkles} w={4} h={4} color="brand.500" />
            <Text fontSize="sm" fontWeight="bold" color="white" whiteSpace="nowrap">
              NEW: Topview AI Video Agent — Smarter & More Automated
            </Text>
          </HStack>
          
          <Box display={{ base: "none", md: "block" }} w="1px" h="4" bg="whiteAlpha.300" />
          
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <Icon as={Gift} w={4} h={4} color="yellow.400" />
            <Text fontSize="sm" fontWeight="medium" color="white" whiteSpace="nowrap">
              HOLIDAY SALE:
            </Text>
            <Badge colorScheme="yellow" variant="subtle" fontSize="xs" px={2}>
              47% OFF
            </Badge>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PromoBanner;
