import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Heading, Text, Image, Badge, Button, SimpleGrid, Flex, HStack, VStack, Divider, Icon } from '@chakra-ui/react';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../utils/projectsData';
const ProjectDetail = () => {
  const {
    id
  } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Find the project in our data
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject);
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Text>Cargando proyecto...</Text>
      </Box>;
  }
  if (!project) {
    return <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
        <Text fontSize="xl">Proyecto no encontrado</Text>
        <Button as={Link} to="/" leftIcon={<ArrowLeft size={16} />} colorScheme="teal">
          Volver al inicio
        </Button>
      </Box>;
  }
  return <>
      <Navbar />
      <Box as="main" bg="white">
        {/* Hero Section */}
        <Box bg="gray.50" py={{
        base: 10,
        md: 16
      }} px={4}>
          <Container maxW="5xl">
            <Button as={Link} to="/#projects" leftIcon={<ArrowLeft size={16} />} variant="ghost" mb={6}>
              Volver a proyectos
            </Button>
            <SimpleGrid columns={{
            base: 1,
            md: 2
          }} spacing={10} alignItems="center">
              <Box>
                <Badge colorScheme="teal" mb={3}>
                  {project.category}
                </Badge>
                <Heading as="h1" size="xl" mb={4}>
                  {project.title}
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  {project.description}
                </Text>
                <HStack spacing={4}>
                  <Button leftIcon={<ExternalLink size={18} />} colorScheme="teal" as="a" href={project.demoLink}>
                    Ver demo
                  </Button>
                  <Button leftIcon={<Github size={18} />} variant="outline" as="a" href={project.codeLink}>
                    Ver código
                  </Button>
                </HStack>
              </Box>
              <Box borderRadius="lg" overflow="hidden" boxShadow="lg">
                <Image src={project.image} alt={project.title} w="100%" h="auto" />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        {/* Project Details */}
        <Container maxW="5xl" py={{
        base: 10,
        md: 16
      }}>
          <SimpleGrid columns={{
          base: 1,
          md: 3
        }} spacing={10}>
            {/* Left Column - Project Info */}
            <Box gridColumn={{
            md: 'span 2'
          }}>
              <Heading as="h2" size="lg" mb={6}>
                Descripción del proyecto
              </Heading>
              <Text fontSize="md" color="gray.700" mb={8} lineHeight="tall">
                {project.longDescription}
              </Text>
              <Heading as="h3" size="md" mb={4}>
                Características principales
              </Heading>
              <VStack align="stretch" spacing={2} mb={8}>
                {project.features.map((feature, index) => <Flex key={index} align="center">
                    <Box w={2} h={2} borderRadius="full" bg="accent.500" mr={3} />
                    <Text>{feature}</Text>
                  </Flex>)}
              </VStack>
            </Box>
            {/* Right Column - Project Meta */}
            <Box>
              <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="sm">
                <VStack spacing={4} align="stretch">
                  <Flex align="center">
                    <Icon as={Calendar} color="accent.500" mr={3} />
                    <Box>
                      <Text fontWeight="bold" fontSize="sm">
                        Fecha
                      </Text>
                      <Text>{project.date}</Text>
                    </Box>
                  </Flex>
                  <Divider />
                  <Flex align="center">
                    <Icon as={User} color="accent.500" mr={3} />
                    <Box>
                      <Text fontWeight="bold" fontSize="sm">
                        Cliente
                      </Text>
                      <Text>{project.client}</Text>
                    </Box>
                  </Flex>
                  <Divider />
                  <Flex align="center">
                    <Icon as={Tag} color="accent.500" mr={3} />
                    <Box>
                      <Text fontWeight="bold" fontSize="sm">
                        Categoría
                      </Text>
                      <Text>{project.category}</Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
              <Box mt={8}>
                <Heading as="h3" size="md" mb={4}>
                  Tecnologías
                </Heading>
                <Flex flexWrap="wrap" gap={2}>
                  {project.technologies.map((tech, index) => <Badge key={index} colorScheme="teal" variant="subtle" px={3} py={1}>
                      {tech}
                    </Badge>)}
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>;
};
export default ProjectDetail;