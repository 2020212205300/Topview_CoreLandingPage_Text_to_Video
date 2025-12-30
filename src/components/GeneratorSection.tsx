import { Box, Container, Heading, Text, VStack, HStack, Icon, SimpleGrid, Badge, Flex, Image, Button } from "@chakra-ui/react";
import { Info, Sparkles, ChevronRight } from "lucide-react";
import soraIcon from "../../public/Sora.svg";
import geminiIcon from "../../public/gemini-sparkle.svg";
import seedanceIcon from "../../public/seedance.svg";
import klingIcon from "../../public/kling.svg";
import wanIcon from "../../public/wan.svg";
import viduIcon from "../../public/vidu.svg";

const aiModels = [
  { name: "Sora", icon: soraIcon },
  { name: "Veo", icon: geminiIcon },
  { name: "Seedance", icon: seedanceIcon },
  { name: "Kling", icon: klingIcon },
  { name: "Wan", icon: wanIcon },
  { name: "Vidu", icon: viduIcon },
];

const GeneratorSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={16} textAlign="center">
          {/* Header */}
          <VStack spacing={6} maxW="4xl" mx="auto">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "4xl" }}
              color="white"
              fontWeight="black"
              lineHeight="1.1"
            >
              One-Stop <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Text to Video</Text> Platform
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" fontWeight="bold">
              The Most Advanced AI Video Models, Working Together
            </Text>
            <Text 
              color="gray.400" 
              fontSize={{ base: "lg", md: "xl" }} 
              lineHeight="tall"
              fontWeight="medium"
            >
              Topview brings the latest and most powerful AI video models into one unified text-to-video workflow. 
              Instead of testing tools one by one, you get the best model for video generation — automatically.
            </Text>
          </VStack>

          {/* Model Display Card */}
          <Box
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="4xl"
            p={{ base: 8, md: 16 }}
            w="full"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "-20%",
              left: "10%",
              right: "10%",
              bottom: "20%",
              bgGradient: "radial(circle, brand.500, transparent)",
              opacity: 0.05,
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          >
            <Text color="brand.400" fontWeight="bold" mb={10} fontSize="lg" textTransform="uppercase" letterSpacing="widest">
              Integrated AI Video Models:
            </Text>

            <SimpleGrid columns={{ base: 2, sm: 3, md: 3, lg: 3 }} spacing={{ base: 6, md: 10 }}>
              {aiModels.map((model, index) => (
                <Box
                  key={model.name}
                  bg="black"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="2xl"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={4}
                  _hover={{ borderColor: "brand.500", bg: "whiteAlpha.50" }}
                >
                  <Box w="10" h="10" display="flex" alignItems="center" justifyContent="center">
                    <Image src={model.icon} alt={model.name} w="full" h="full" />
                  </Box>
                  <Text color="white" fontWeight="bold" fontSize="md">{model.name}</Text>
                </Box>
              ))}
            </SimpleGrid>

            <VStack spacing={6} mt={16}>
              <VStack spacing={2}>
                <Text color="white" fontSize="xl" fontWeight="black">
                  One platform. Multiple AI models.
                </Text>
                <Text color="gray.500" fontSize="md" fontWeight="medium">
                  The best results for marketing and ecommerce videos from a single text input.
                </Text>
              </VStack>
              
              <Box
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                position="relative"
                borderRadius="full"
                display="inline-block"
                role="group"
                cursor="pointer"
                bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)"
                p="2px"
              >
                <Button
                  size="lg"
                  height="60px"
                  px={10}
                  fontSize="lg"
                  fontWeight="black"
                  bg="black"
                  _hover={{ bg: "blackAlpha.800" }}
                  _active={{ bg: "black" }}
                  color="white"
                  borderRadius="full"
                  position="relative"
                  zIndex="1"
                  rightIcon={<Icon as={ChevronRight} size={20} color="#A29BFE" />}
                >
                  Create Video with AI Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
