import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Link, Button } from "@chakra-ui/react";
import viralMarketingImg from "../../public/Viral Marketing.png";
import ugcImg from "../../public/UGC.png";
import productDemosImg from "../../public/Product Demos.png";
import socialGrowthImg from "../../public/Social Growth.png";
import brandImg from "../../public/Brand.png";
import viralShotsImg from "../../public/Viral Shots.png";

const templateImages = [
  { 
    label: "Viral Marketing",
    image: viralMarketingImg,
    link: "https://agent.topview.ai/agent-share?sessionId=25324874e6f643b6a74ec23890d000a4"
  },
  { 
    label: "UGC Creators",
    image: ugcImg,
    link: "https://agent.topview.ai/agent-share?sessionId=3908ce6f91774719a2cd88a3409957f3"
  },
  { 
    label: "Product Demos",
    image: productDemosImg,
    link: "https://agent.topview.ai/agent-share?sessionId=3d3519a778f94b148c58274462e1d022"
  },
  { 
    label: "Social Growth",
    image: socialGrowthImg,
    link: "https://agent.topview.ai/agent-share?sessionId=3314a103f7684cf39f0c6457d128d8c0"
  },
  { 
    label: "Brand Stories",
    image: brandImg,
    link: "https://agent.topview.ai/agent-share?sessionId=247554b461524bbba7c538fb35e2039c"
  },
  { 
    label: "Viral Shorts",
    image: viralShotsImg,
    link: "https://agent.topview.ai/agent-share?sessionId=32ff37b16f9e48f386fd19f7d45ed1d1"
  }
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" textAlign="center">
          <Box maxW="4xl">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
              Viral <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Text to Video</Text> Templates
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" mb={6} fontWeight="bold">
              Pre-Built Templates Based on Proven Video Formats
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="3xl" mx="auto">
              Topview includes ready-to-use text to video templates based on real high-performing content.
            </Text>
          </Box>

          {/* Images Grid */}
          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} w="full" pt={8}>
            {templateImages.map((img, index) => (
              <VStack key={index} spacing={4}>
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  aspectRatio="9/16"
                  bg="whiteAlpha.50"
                  w="full"
                >
                  <Image 
                    src={img.image}
                    alt={img.label}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  
                  {/* Overlay for better text readability */}
                  <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-t, blackAlpha.900, transparent, transparent)"
                    zIndex="1"
                  />

                  <VStack
                    position="absolute"
                    bottom="5"
                    left="0"
                    right="0"
                    spacing={1}
                    zIndex="2"
                    px={2}
                  >
                    <Text
                      color="white"
                      fontSize="xs"
                      fontWeight="black"
                      textTransform="uppercase"
                      letterSpacing="tighter"
                      opacity="0.7"
                    >
                      Template
                    </Text>
                    <Heading
                      as="h3"
                      color="white"
                      fontSize="sm"
                      fontWeight="bold"
                      lineHeight="shorter"
                    >
                      {img.label}
                    </Heading>
                  </VStack>
                </Box>
                <Button
                  as={Link}
                  href={img.link}
                  isExternal
                  size="sm"
                  colorScheme="whiteAlpha"
                  variant="outline"
                  rounded="full"
                  fontSize="xs"
                  fontWeight="bold"
                  _hover={{
                    bg: "white",
                    color: "black",
                    textDecoration: "none"
                  }}
                  w="full"
                >
                  Watch Process
                </Button>
              </VStack>
            ))}
          </SimpleGrid>

          <VStack spacing={6} pt={8}>
            <Text color="gray.400" fontSize="lg" fontWeight="medium">
              Simply enter your text. The template handles the structure.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default MethodsSection;

