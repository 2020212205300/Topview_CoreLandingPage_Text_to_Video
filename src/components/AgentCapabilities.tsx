import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { 
  Pencil, Megaphone, Store, Gem, Briefcase, Ruler, Rocket, Target, CheckCircle2
} from "lucide-react";

const professionalGroups = [
  { 
    name: "Marketers, Agencies & Growth Teams", 
    icon: Megaphone, 
    color: "orange.400",
    details: [
      "Scale video content for all channels",
      "Turn blog posts into video ads",
      "Test multiple video versions quickly",
      "Deliver high-volume video content"
    ]
  },
  { 
    name: "Ecommerce Sellers & DTC Brands", 
    icon: Store, 
    color: "purple.400",
    details: [
      "Create product explainer videos from text",
      "Generate promotional content for listings",
      "Boost sales with text-driven video ads",
      "Maintain consistent brand voice"
    ]
  },
  { 
    name: "Dropshippers & Social Media Managers", 
    icon: Rocket, 
    color: "yellow.400",
    details: [
      "Create high-converting ads from product copy",
      "Launch products with viral video content",
      "Keep feeds active with fresh videos",
      "Maximize engagement with AI content"
    ]
  },
  { 
    name: "Video Editors & Designers", 
    icon: Pencil, 
    color: "brand.500",
    details: [
      "Generate base footage from scripts",
      "Speed up rough cut creation",
      "Visualize concepts through text-to-video",
      "AI-assisted scene generation"
    ]
  },
];

const AgentCapabilities = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" color="white" mb={6}>
            Built for Professionals{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
              Who Need Results
            </Text>
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
            Topview is trusted by teams and creators who need speed, scale, and performance.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {professionalGroups.map((group, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: group.color,
                bg: "whiteAlpha.100",
              }}
              position="relative"
              height="full"
            >
              <VStack align="stretch" spacing={6}>
                <HStack spacing={4}>
                  <Flex 
                    w="12" 
                    h="12" 
                    bg={`${group.color}15`} 
                    borderRadius="xl" 
                    align="center" 
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={group.icon} w={6} h={6} color={group.color} />
                  </Flex>
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {group.name}
                  </Heading>
                </HStack>

                <VStack align="start" spacing={3} pt={4} borderTop="1px solid" borderColor="whiteAlpha.100">
                  {group.details.map((detail, idx) => (
                    <Flex key={idx} align="start" gap={3}>
                      <Icon as={CheckCircle2} color={group.color} w={4} h={4} mt={1} />
                      <Text color="gray.400" fontSize="sm" fontWeight="medium">
                        {detail}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentCapabilities;
