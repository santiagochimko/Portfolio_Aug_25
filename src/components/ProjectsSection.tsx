import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, SimpleGrid, Button, Image, Flex, Badge, ButtonGroup, HStack } from '@chakra-ui/react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../utils/projectsData';
const categories = ['Todos', 'Frontend', 'Backend', 'Full Stack'];
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredProjects = activeCategory === 'Todos' ? projects : projects.filter(project => project.category === activeCategory);
  return <Box id="projects" py={{
    base: 16,
    md: 24
  }} bg="white">
      <Container maxW="5xl">
        <Box mb={16} textAlign="center">
          <Heading fontSize={{
          base: '2xl',
          md: '3xl'
        }} mb={4} position="relative" display="inline-block" color="gray.700" _after={{
          content: '""',
          width: '60px',
          height: '3px',          
          backgroundColor: 'accent.500',
          position: 'absolute',
          bottom: '-10px',
          left: 'calc(50% - 30px)'
        }}>
            Mis Proyectos
          </Heading>
          <Text fontSize={{
          base: 'md',
          md: 'lg'
        }} mt={10} maxW="3xl" mx="auto" color="gray.600">
            Una selección de mis proyectos más destacados en desarrollo web y
            aplicaciones.
          </Text>
        </Box>
        <HStack justify="center" mb={10} spacing={4} flexWrap="wrap">
          {categories.map(category => <Button key={category} size="sm" color={activeCategory === category ? 'white' : 'gray.600'} bg={activeCategory === category ? 'teal.500' : 'white'} variant="outline" borderColor={activeCategory === category ? 'teal.500' : 'gray.200'} borderWidth={activeCategory === category ? '0px' : '1px'} _hover={activeCategory === category ? {
          bg: 'teal.600'
        } : {
          bg: 'gray.50'
        }} onClick={() => setActiveCategory(category)} mb={{
          base: 2,
          md: 0
        }} boxShadow={activeCategory === category ? 'md' : 'none'}>
              {category}
            </Button>)}
        </HStack>
        <SimpleGrid columns={{
        base: 1,
        md: 2
      }} spacing={8}>
          {filteredProjects.map(project => <Box key={project.id} borderRadius="lg" overflow="hidden" bg="white" boxShadow="md" className="project-card" display="flex" flexDirection="column" height="100%">
              <Box height="200px" overflow="hidden">
                <Image src={project.image} alt={project.title} objectFit="cover" w="100%" h="100%" transition="transform 0.5s ease" _hover={{
              transform: 'scale(1.05)'
            }} />
              </Box>
              <Box p={6} display="flex" flexDirection="column" flex="1">
                <Flex justify="space-between" align="center" mb={2}>
                  <Heading as="h3" fontSize="xl" color={"gray.800"}>
                    {project.title}
                  </Heading>
                  <Badge colorScheme="teal" variant="subtle" color={'gray.600'}
                  bg={'teal.200'}>
                    {project.category}
                  </Badge>
                </Flex>
                <Text color="gray.600" mb={4} fontSize="sm">
                  {project.description}
                </Text>
                <Box mt="auto">
                  <ButtonGroup spacing={4} width="100%">
                    <Button 
                      leftIcon={<ExternalLink size={16} />} 
                      variant="solid" 
                      bg="teal.500" 
                      color="white" 
                      _hover={{ bg: 'teal.600' }}
                      size="sm" 
                      as={RouterLink} 
                      to={`/project/${project.id}`} 
                      flex="1"
                    >
                      Ver proyecto
                    </Button>
                    <Button 
                      leftIcon={<Github size={16} />} 
                      variant="outline"
                      borderColor="gray.200"
                      bg="white"
                      color="gray.600"
                      _hover={{ bg: 'gray.200' }}
                      size="sm" 
                      as="a" 
                      href={project.codeLink} 
                      target="_blank" 
                      flex="1"
                    >
                      Ver código
                    </Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </Box>)}
        </SimpleGrid>
      </Container>
    </Box>;
};
export default ProjectsSection;