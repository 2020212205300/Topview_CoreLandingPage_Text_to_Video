import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Layout, TrendingUp } from "lucide-react";

const MotionBox = motion(Box);

const features = [
  {
    icon: Zap,
    text: "Instant script-to-screen conversion",
  },
  {
    icon: Sparkles,
    text: "Hyper-realistic AI visual generation",
  },
  {
    icon: Layout,
    text: "Automated scene & character consistency",
  },
  {
    icon: TrendingUp,
    text: "Seamless scalability for video marketing",
  },
];

const WhatIsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black">
      <Container maxW="container.lg">
        <VStack spacing={12} align="center" textAlign="center">
          {/* Content */}
          <VStack spacing={8} maxW="4xl">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading
                as="h2"
                size={{ base: "2xl", md: "4xl" }}
                color="white"
                fontWeight="black"
                lineHeight="1.1"
                mb={8}
              >
                What is{" "}
                <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
                  Text to Video
                </Text>
                ?
              </Heading>
              
              <VStack spacing={6} color="gray.400" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                <Text lineHeight="tall">
                  Text to Video is a generative AI technology that turns written prompts into professional video content instantly. It interprets scripts, blog posts, or descriptions to generate realistic scenes, characters, and motion without the need for cameras, actors, or editing crews.
                </Text>
                <Text lineHeight="tall">
                  By automating the production process, it allows marketers and creators to transform static ideas into dynamic visual stories in minutes—slashing production costs while scaling output. Topview’s advanced AI ensures these videos are not just realistic, but optimized for engagement and conversion.
                </Text>
              </VStack>
            </MotionBox>

            {/* Features Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" pt={4}>
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  gap={4}
                  bg="whiteAlpha.50"
                  p={5}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  h="full"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={10}
                    h={10}
                    borderRadius="lg"
                    bg="brand.500"
                    flexShrink={0}
                  >
                    <Icon as={feature.icon} w={5} h={5} color="black" />
                  </Flex>
                  <Text color="white" fontWeight="bold" fontSize="md" textAlign="left">
                    {feature.text}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhatIsSection;
