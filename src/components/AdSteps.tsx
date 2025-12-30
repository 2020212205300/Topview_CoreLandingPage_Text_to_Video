import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Center, Image } from "@chakra-ui/react";
import { Image as ImageIcon } from "lucide-react";
import simplePromptImg from "../../public/Simple Prompt to Video.png";
import fullScriptImg from "../../public/Full Script to Video Production.png";
import blogArticleImg from "../../public/Blog & Article to Video.png";
import productDescImg from "../../public/Product Description to Video.png";

const scenarios = [
  {
    title: "From Simple Prompt to Video",
    description: "Convert a rough idea or a simple sentence into high-fidelity visuals.",
    image: simplePromptImg,
    accent: "#4ECDC4"
  },
  {
    title: "Full Script to Video Production",
    description: "Turn your polished narrative into a complete video with AI actors.",
    image: fullScriptImg,
    accent: "#A78BFA"
  },
  {
    title: "Blog & Article to Video",
    description: "Repurpose your written content for social media engagement.",
    image: blogArticleImg,
    accent: "#60A5FA"
  },
  {
    title: "Product Description to Video",
    description: "Instantly create product showcase videos for your ecommerce store.",
    image: productDescImg,
    accent: "#FB923C"
  }
];

const AdSteps = () => {
  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="600px"
        h="600px"
        bg="brand.500"
        filter="blur(180px)"
        opacity="0.08"
        borderRadius="full"
        pointerEvents="none"
      />
      
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Header Section */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
              Turn Any Text Input into <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                Engaging Video Content
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.300" mb={8} lineHeight="relaxed">
              Whether you have a rough idea, a polished script, or an existing article, Topview adapts to your content source.
            </Text>
          </Box>

          {/* Scenarios Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
            {scenarios.map((item) => (
              <Box
                key={item.title}
                borderRadius="3xl"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                overflow="hidden"
                p={8}
                _hover={{ borderColor: item.accent, bg: "whiteAlpha.100" }}
              >
                <VStack align="stretch" spacing={6}>
                  <VStack align="start" spacing={2}>
                    <Heading as="h3" size="md" color="white" fontWeight="bold">
                      {item.title}
                    </Heading>
                    <Text color="gray.400" fontSize="md">
                      {item.description}
                    </Text>
                  </VStack>

                  {/* Image Display */}
                  <Box 
                    w="full" 
                    aspectRatio="16/9"
                    bg="blackAlpha.400" 
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    position="relative"
                    overflow="hidden"
                  >
                    <Image 
                      src={item.image}
                      alt={item.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                      fallback={
                        <Center w="full" h="full">
                          <Icon as={ImageIcon} w={10} h={10} color="whiteAlpha.200" />
                        </Center>
                      }
                    />
                    <Box 
                      position="absolute" 
                      bottom="0" 
                      left="0" 
                      right="0" 
                      h="1px" 
                      bgGradient={`linear(to-r, transparent, ${item.accent}, transparent)`} 
                    />
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdSteps;
