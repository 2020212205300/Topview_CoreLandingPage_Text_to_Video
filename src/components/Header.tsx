import { Box, Container, Flex, Button, Text, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Use cases", hasDropdown: true },
  { label: "AI tools", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Ad library", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
];

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      bg="blackAlpha.800"
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      mt="10"
    >
      <Container maxW="container.xl" px="6" h="16">
        <Flex h="full" alignItems="center" justify="space-between">
          {/* Logo */}
          <HStack spacing="3">
            <HStack spacing="2">
              <HStack spacing="0.5">
                <Box w="1" h="6" bg="pink.500" borderRadius="full" />
                <Box w="1" h="6" bg="purple.500" borderRadius="full" />
                <Box w="1" h="6" bg="cyan.400" borderRadius="full" />
              </HStack>
              <Text fontSize="xl" fontWeight="bold" color="white">
                TOPVIEW
              </Text>
            </HStack>
            <Text
              display={{ base: "none", sm: "inline-flex" }}
              px="2"
              py="0.5"
              borderRadius="full"
              bg="whiteAlpha.100"
              color="brand.300"
              fontSize="xs"
              fontWeight="medium"
              border="1px solid"
              borderColor="brand.500"
            >
              AI Video
            </Text>
          </HStack>

          <HStack as="nav" spacing="1" display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                color="gray.400"
                _hover={{ color: "white", bg: "transparent" }}
                fontSize="sm"
                fontWeight="normal"
                rightIcon={item.hasDropdown ? <Icon as={ChevronDown} w={4} h={4} /> : undefined}
              >
                {item.label}
              </Button>
            ))}
          </HStack>

          {/* Actions */}
          <HStack spacing="3">
            <Button variant="ghost" color="gray.400" _hover={{ color: "white" }}>
              Sign in
            </Button>
            <Button
              bg="whiteAlpha.200"
              _hover={{ bg: "whiteAlpha.300" }}
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              Dashboard
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
