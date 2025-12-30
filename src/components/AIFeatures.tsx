import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack, HStack } from "@chakra-ui/react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const videoTypes = [
  { 
    title: "Viral Videos",
    description: "Reproduce high-impact formats that are currently trending.",
    displayPrompt: "Cinematic 4K chase: A ginger cat in a yellow vest fleeing a police officer through city streets.",
    fullPrompt: "A cinematic, ultra-realistic video of a ginger cat running upright like a human down a city sidewalk, wearing a small yellow vest. A police officer is chasing the cat from behind. Shot at street level with a low-angle tracking camera, dynamic motion blur, dramatic depth of field. Urban environment with brick buildings, daytime natural lighting. The cat looks anxious yet adorable. Fast-paced, humorous, high-energy chase scene. 4K quality, realistic textures, cinematic color grading, viral short-video style.",
    videoSrc: "/video1.mp4",
    borderColor: "purple.500" 
  },
  { 
    title: "UGC Videos",
    description: "Authentic, relatable content that builds trust and engagement.",
    displayPrompt: "Handheld shot: A person unboxing a luxury watch in a sunlit living room, natural style.",
    fullPrompt: "A realistic UGC-style handheld video. Close-up of hands carefully unboxing a sleek silver luxury watch from a matte black box. Soft, natural sunlight streaming through a window onto a wooden coffee table. The person's hands are visible as they lift the watch, showing off the polished finish. Casual, authentic atmosphere, slight camera shake for realism, 4k quality, natural color palette.",
    videoSrc: "/video2.mp4",
    borderColor: "blue.500" 
  },
  { 
    title: "Shoppable Product Videos",
    description: "Direct response templates optimized for ecommerce sales.",
    displayPrompt: "High-energy review: A girl unboxing and testing sparkling lavender headphones in a trendy space.",
    fullPrompt: "A high-energy UGC-style product review. A teenage girl in a purple hoodie excitedly unzips a black case to reveal sparkling lavender glitter headphones. Close-up shots highlight the sequin texture and buttons. She puts them on, smiles, and types on a laptop in a cozy study space adorned with fairy lights and posters. Fast-paced cuts, vibrant colors, trendy atmosphere, photorealistic 4k quality.",
    videoSrc: "/video3.mp4",
    borderColor: "green.500" 
  },
  { 
    title: "Ads & Performance Creatives",
    description: "Native look and high conversion rates for performance marketing.",
    displayPrompt: "App commercial: A woman presenting the 'My Lists' organization app with split-screen UI.",
    fullPrompt: "A professional UGC-style app commercial. A confident brunette woman wearing a beige blazer speaks enthusiastically to the camera in a modern, blurred home office setting. Split-screen edits zoom in on a smartphone interface showing a minimalist organization app named \"My Lists.\" A hand taps through categories like bags and accessories. The woman smiles, points to the phone, and gives a thumbs-up. The video concludes with a \"Download Now\" graphic and App Store badges. Bright, clean commercial lighting, 4k quality.",
    videoSrc: "/video4.mp4",
    borderColor: "pink.500" 
  },
];

const AIFeatures = () => {
  const [mutedStates, setMutedStates] = useState(new Array(videoTypes.length).fill(true));

  const toggleMute = (index: number) => {
    const newStates = [...mutedStates];
    newStates[index] = !newStates[index];
    setMutedStates(newStates);
  };

  return (
    <Box as="section" py={{ base: 12, md: 20 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="4" color="white">
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
              Text to Video
            </Text>{" "}
            AI Examples
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="8" maxW="container.xl" mx="auto">
          {videoTypes.map((type, index) => (
            <Box
              key={type.title}
              borderRadius="3xl"
              overflow="hidden"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: type.borderColor, 
                bg: "whiteAlpha.100",
              }}
              role="group"
              display="flex"
              flexDirection="column"
              position="relative"
            >
              <Box p="4">
                <Box 
                  aspectRatio="9/16" 
                  position="relative" 
                  borderRadius="2xl" 
                  bg="black" 
                  mb="4" 
                  isolation="isolate"
                  overflow="hidden"
                  transform="translateZ(0)"
                >
                  <Box 
                    as="video"
                    src={type.videoSrc}
                    autoPlay
                    loop
                    muted={mutedStates[index]}
                    playsInline
                    w="full"
                    h="full"
                    objectFit="cover"
                    borderRadius="2xl"
                  />
                  
                  {/* Hover Prompt Overlay */}
                  <Box
                    position="absolute"
                    inset="0"
                    borderRadius="2xl"
                    bg="blackAlpha.800"
                    backdropFilter="blur(8px)"
                    p="6"
                    opacity="0"
                    _groupHover={{ opacity: 1 }}
                    transition="none"
                    zIndex="4"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <VStack align="stretch" spacing={3}>
                      <Text color="whiteAlpha.600" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                        AI Prompt
                      </Text>
                      <Text color="white" fontSize="sm" lineHeight="tall" fontWeight="medium" noOfLines={4}>
                        {type.displayPrompt}
                      </Text>
                    </VStack>
                  </Box>
                  
                  {/* Sound Toggle */}
                  <Flex 
                    position="absolute"
                    bottom="4"
                    left="4"
                    bg="blackAlpha.700"
                    backdropFilter="blur(8px)"
                    px="3"
                    py="1.5"
                    borderRadius="full"
                    align="center"
                    cursor="pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                    _hover={{ bg: "blackAlpha.800" }}
                    zIndex="3"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Icon 
                      as={mutedStates[index] ? VolumeX : Volume2} 
                      color="white" 
                      w={3.5} 
                      h={3.5} 
                      mr={2} 
                    />
                    <Text color="white" fontSize="xs" fontWeight="bold" letterSpacing="tight">
                      {mutedStates[index] ? "Muted" : "Sound On"}
                    </Text>
                  </Flex>
                </Box>
                
                <VStack align="stretch" spacing="4" p="6" pt="2" flex="1">
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {type.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" lineHeight="tall">
                    {type.description}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AIFeatures;
