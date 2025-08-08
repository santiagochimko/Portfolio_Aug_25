import React from 'react';
import { Box, Container, Heading, Text, Flex, Image, VStack, HStack, Divider, Badge } from '@chakra-ui/react';
const educationItems = [{
  id: 1,
  date: '2021 - 2023',
  title: 'Máster en Desarrollo Web Full Stack',
  institution: 'Universidad Digital',
  logo: 'https://via.placeholder.com/80',
  certificate: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
}, {
  id: 2,
  date: '2020',
  title: 'Certificación en React y Redux',
  institution: 'Plataforma de Aprendizaje Online',
  logo: 'https://via.placeholder.com/80',
  certificate: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
}, {
  id: 3,
  date: '2017 - 2021',
  title: 'Licenciatura en Ingeniería Informática',
  institution: 'Universidad Tecnológica',
  logo: 'https://via.placeholder.com/80',
  certificate: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
}];
const EducationSection = () => {
  return <Box id="education" py={{
    base: 16,
    md: 24
  }} bg="white">
      <Container maxW="5xl">
        <Box mb={16} textAlign="center">
          <Heading fontSize={{
          base: '2xl',
          md: '3xl'
        }} mb={4} position="relative" color={"gray.700"} display="inline-block" _after={{
          content: '""',
          width: '60px',
          height: '3px',
          backgroundColor: 'accent.500',
          position: 'absolute',
          bottom: '-10px',
          left: 'calc(50% - 30px)'
        }}>
            Estudios y Certificaciones
          </Heading>
        </Box>
        <VStack spacing={0} align="stretch" position="relative" mb={16}>
          {/* Vertical line */}
          <Box position="absolute" left={{
          base: '20px',
          md: '50%'
        }} transform={{
          md: 'translateX(-50%)'
        }} width="2px" height="100%" bg="gray.200" zIndex="1" />
          {educationItems.map((item, index) => <Box key={item.id} position="relative" zIndex="2" mb={10}>
              <Flex direction={{
            base: 'column',
            md: index % 2 === 0 ? 'row' : 'row-reverse'
          }} align={{
            base: 'flex-start',
            md: 'center'
          }} justify="space-between">
                <Box position="relative" width={{
              base: '100%',
              md: '45%'
            }} pb={{
              base: 6,
              md: 0
            }} textAlign={{
              base: 'left',
              md: index % 2 === 0 ? 'right' : 'left'
            }} pl={{
              base: '50px',
              md: 0
            }}>
                  <Badge colorScheme="teal" mb={2} fontSize="sm">
                    {item.date}
                  </Badge>
                  <Heading as="h3" fontSize="lg" mb={1}>
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize="md">
                    {item.institution}
                  </Text>
                  {/* Timeline dot - mobile */}
                  <Box display={{
                base: 'block',
                md: 'none'
              }} position="absolute" left="20px" top="0" width="20px" height="20px" borderRadius="full" bg="accent.500" border="3px solid white" boxShadow="md" />
                </Box>
                {/* Timeline dot - desktop */}
                <Box display={{
              base: 'none',
              md: 'block'
            }} position="absolute" left="50%" transform="translateX(-50%)" width="20px" height="20px" borderRadius="full" bg="accent.500" border="3px solid white" boxShadow="md" />
                <Flex width={{
              base: '100%',
              md: '45%'
            }} mt={{
              base: 4,
              md: 0
            }} align="center" pl={{
              base: '50px',
              md: 0
            }}>
                  <Image src={item.certificate} alt={`Certificado de ${item.title}`} borderRadius="md" boxShadow="md" maxH="120px" objectFit="cover" mr={4} />
                  <Image src={item.logo} alt={item.institution} boxSize="40px" objectFit="contain" />
                </Flex>
              </Flex>
            </Box>)}
        </VStack>
      </Container>
    </Box>;
};
export default EducationSection;