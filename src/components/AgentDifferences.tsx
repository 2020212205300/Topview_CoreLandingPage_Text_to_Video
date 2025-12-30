import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Image } from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";
import tiktokIcon from "../../public/tiktok.svg";
import instagramIcon from "../../public/Instagram.png";
import youtubeIcon from "../../public/youtube.svg";

const platforms = [
  {
    name: "TikTok Videos",
    description: "Vertical, fast-paced, trend-driven videos",
    icon: tiktokIcon,
    color: "#00f2ea",
    bg: "rgba(0, 242, 234, 0.05)"
  },
  {
    name: "Instagram Reels",
    description: "Clean, branded short-form videos",
    icon: instagramIcon,
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.05)"
  },
  {
    name: "YouTube Shorts",
    description: "Shorts and long-form marketing videos",
    icon: youtubeIcon,
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.05)"
  }
];

const PlatformOptimization = () => {
  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl" position="relative" zIndex="1">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="4" color="white">
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
                Text to Video
              </Text>{" "}
              for Every Platform
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={8}>
              Topview automatically adapts your text to video output to match platform requirements and content styles.
            </Text>
            
            <Badge 
              colorScheme="brand" 
              variant="subtle" 
              px={4} 
              py={2} 
              borderRadius="full" 
              fontSize="sm"
              bg="whiteAlpha.100"
              color="brand.400"
              border="1px solid"
              borderColor="brand.500"
            >
              Supported platforms
            </Badge>
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="6xl" mx="auto" mb={16}>
          {platforms.map((platform) => (
            <Box
              key={platform.name}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={8}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: platform.bg,
                opacity: 0.5,
                pointerEvents: "none"
              }}
              _hover={{
                borderColor: platform.color,
              }}
            >
              <VStack align="center" spacing={6} position="relative" zIndex="1" h="full" textAlign="center">
                {/* Icon Box */}
                <Box 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Image 
                    src={platform.icon} 
                    alt={platform.name} 
                    w={16} 
                    h={16} 
                    objectFit="contain"
                    filter={`drop-shadow(0 0 10px ${platform.color}44)`}
                  />
                </Box>

                <VStack align="center" spacing={3} flex="1">
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {platform.name}
                  </Heading>
                  <Text color="gray.500" fontSize="md" lineHeight="tall">
                    {platform.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <HStack 
          justify="center" 
          spacing={3} 
          bg="whiteAlpha.50" 
          p={6} 
          borderRadius="2xl" 
          maxW="2xl" 
          mx="auto"
          border="1px dashed"
          borderColor="whiteAlpha.200"
        >
          <CheckCircle2 size={20} color="var(--chakra-colors-brand-500)" />
          <Text color="gray.400" fontSize="md" fontWeight="medium" textAlign="center">
            Aspect ratio, pacing, and visual rhythm are optimized for each platform.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default PlatformOptimization;
