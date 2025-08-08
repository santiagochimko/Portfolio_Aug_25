import React from 'react';
import { Box, Container, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { ArrowDown } from 'lucide-react';
import profileImg from '../imgs/profile.png';

const HeroSection = () => {
  return <Box id="hero" className="bg-gradient-hero" pt={{
    base: 20,
    md: 32
  }} pb={{
    base: 20,
    md: 32
  }} px={4}>
      <Container maxW="5xl">
        <Flex direction={{
        base: 'column',
        md: 'row'
      }} align="center" justify="space-between" gap={{
        base: 10,
        md: 6
      }}>
          <Box textAlign={{
          base: 'center',
          md: 'left'
        }} maxW={{
          base: '100%',
          md: '60%'
        }}>
            <Heading as="h1" fontSize={{
            base: '3xl',
            md: '4xl',
            lg: '5xl'
          }} fontWeight="bold" mb={4} className="animate-fade-in">
              <Text as="span" color= "gray.600">Hola, soy </Text>
              <Text as="span" color="accent.500">
                Santiago
              </Text>
            </Heading>
            <Heading as="h2" fontSize={{
            base: 'xl',
            md: '2xl'
          }} fontWeight="medium" mb={6} color="gray.600">
              Desarrollador Web Full Stack
            </Heading>
            <Text fontSize={{
            base: 'md',
            md: 'lg'
          }} mb={8} color="gray.600">
              Transformando ideas en experiencias digitales impactantes.
              Especializado en crear soluciones web modernas, elegantes y
              funcionales.
            </Text>
            <Button as="a" href="#contact" size="lg" bg="accent.500" color="white" _hover={{
            bg: 'accent.600'
          }} px={8} rightIcon={<ArrowDown size={16} />} className="transition-transform hover:-translate-y-1">
              Contactarme
            </Button>
          </Box>
          <Box position="relative" className="animate-fade-in">
            <Box borderRadius="full" overflow="hidden" boxSize={{
            base: '200px',
            md: '280px'
          }} boxShadow="xl" border="4px solid white">
              <Image src={profileImg}alt="Desarrollador Web" objectFit="cover" w="100%" h="100%" />
            </Box>
            <Box position="absolute" bottom="-20px" right="-20px" w="80px" h="80px" borderRadius="full" bg="accent.500" opacity="0.2" />
            <Box position="absolute" top="-10px" left="-20px" w="60px" h="60px" borderRadius="full" bg="accent.500" opacity="0.15" />
          </Box>
        </Flex>
      </Container>
    </Box>;
};
export default HeroSection;