import { Box, Container, Heading, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";

const steps = [
  {
    number: "STEP 1",
    title: "Step 1: Input Your Text or URL",
    description: "Paste your script, enter a prompt, or upload a document.",
  },
  {
    number: "STEP 2",
    title: "Step 2: AI Visualization & Model Selection",
    description: "The Agent generates a storyboard, selects AI avatars, and matches stock or AI footage to your words.",
  },
  {
    number: "STEP 3",
    title: "Step 3: Edit & Export",
    description: "Tweak the script to update visuals instantly, then export in 9:16 or 16:9 format.",
  },
];

const StepsSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} px="6" bg="black" position="relative">
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              Text to Video
            </Text>{" "}
            in 3 Steps
          </Heading>
          <Text fontSize="lg" color="gray.500" maxW="2xl">
            Go from blank page to published video in under 5 minutes.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {steps.map((step, index) => (
            <Box
              key={index}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={10}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              _hover={{
                borderColor: "#805AD5",
                bg: "rgba(128, 90, 213, 0.02)"
              }}
            >
              <VStack align="start" spacing={4}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  letterSpacing="widest"
                >
                  {step.number}
                </Text>
                <Heading as="h3" fontSize="xl" color="white" fontWeight="bold">
                  {step.title}
                </Heading>
                <Text color="gray.500" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StepsSection;
