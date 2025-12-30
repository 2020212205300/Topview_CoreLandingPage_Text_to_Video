import { Box, Container, SimpleGrid, Text, VStack, HStack, Link, Icon, Flex } from "@chakra-ui/react";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "API", "Integrations"],
  Resources: ["Blog", "Documentation", "Community", "Support"],
  Company: ["About", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <Box as="footer" py="16" px="6" borderTop="1px solid" borderColor="whiteAlpha.200">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing="8" mb="12">
          {/* Logo & Description */}
          <Box gridColumn={{ base: "span 2", md: "span 1" }}>
            <HStack spacing="2" mb="4">
              <HStack spacing="0.5">
                <Box w="1" h="5" bg="pink.500" borderRadius="full" />
                <Box w="1" h="5" bg="purple.500" borderRadius="full" />
                <Box w="1" h="5" bg="cyan.400" borderRadius="full" />
              </HStack>
              <Text fontSize="lg" fontWeight="bold" color="white">
                TOPVIEW
              </Text>
            </HStack>
            <Text color="gray.400" fontSize="sm" mb="4">
              Turn your products into viral videos with AI
            </Text>
            <HStack spacing="3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  w="9"
                  h="9"
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.400"
                  _hover={{ color: "white", bg: "whiteAlpha.300" }}
                >
                  <Icon as={social.icon} w={4} h={4} />
                </Link>
              ))}
            </HStack>
          </Box>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Box key={category}>
              <Text fontWeight="semibold" color="white" mb="4">
                {category}
              </Text>
              <VStack align="start" spacing="2">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    color="gray.400"
                    fontSize="sm"
                    _hover={{ color: "white" }}
                  >
                    {link}
                  </Link>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Flex
          pt="8"
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap="4"
        >
          <Text color="gray.400" fontSize="sm">
            © {new Date().getFullYear()} Topview. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
