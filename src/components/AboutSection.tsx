import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { Code, Server, Database, Globe, Layers } from 'lucide-react';
const skills = [{
  name: 'JavaScript',
  icon: Code,
  description: 'ES6+, TypeScript'
}, {
  name: 'React',
  icon: Globe,
  description: 'Redux, Hooks, Context'
}, {
  name: 'Node.js',
  icon: Server,
  description: 'Express, API REST'
}, {
  name: 'C#',
  icon: Layers,
  description: '.NET, ASP.NET Core'
}, {
  name: 'PostgreSQL',
  icon: Database,
  description: 'SQL, Modelado de datos'
}];
const AboutSection = () => {
  return <Box id="about" py={{
    base: 16,
    md: 24
  }} bg="white">
      <Container maxW="5xl">
        <Box mb={16} textAlign="center">
          <Heading fontSize={{
          base: '2xl',
          md: '3xl'
        }} mb={4} position="relative" 
        color="gray.700" display="inline-block" _after={{
          content: '""',
          width: '60px',
          height: '3px',
          backgroundColor: 'accent.500',
          position: 'absolute',
          bottom: '-10px',
          left: 'calc(50% - 30px)'
        }}>
            Sobre Mí
          </Heading>
          <Text fontSize={{
          base: 'md',
          md: 'lg'
        }} mt={10} maxW="3xl" mx="auto" color="gray.600" lineHeight="tall">
            Soy un desarrollador web full stack apasionado por crear
            experiencias digitales atractivas y funcionales. Con experiencia en
            el desarrollo frontend y backend, me especializo en construir
            aplicaciones web modernas utilizando las últimas tecnologías. Mi
            enfoque combina diseño estético con funcionalidad robusta para
            entregar productos que destacan en el mercado digital actual.
          </Text>
        </Box>
        <Heading as="h3" fontSize={{
        base: 'xl',
        md: '2xl'
      }} mb={10} textAlign="center" color="gray.700">
          Mis habilidades
        </Heading>
        <SimpleGrid columns={{
        base: 1,
        sm: 2,
        md: 3
      }} spacing={8}>
          {skills.map(skill => <Flex key={skill.name} direction="column" align="center" p={6} 
          color="gray.600" borderRadius="lg" bg="gray.50" boxShadow="sm" className="skill-icon" transition="transform 0.3s ease">
              <Box bg="accent.500" color="white" p={3} borderRadius="full" mb={4}>
                <Icon as={skill.icon} boxSize={6} />
              </Box>
              <Heading as="h4" fontSize="lg" mb={2}>
                {skill.name}
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                {skill.description}
              </Text>
            </Flex>)}
        </SimpleGrid>
      </Container>
    </Box>;
};
export default AboutSection;