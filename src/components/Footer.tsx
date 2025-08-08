import React from 'react';
import { Box, Container, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { Github, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <Box bg="gray.800" color="white" py={8}>
      <Container maxW="5xl">
        <Box textAlign="center">
          <HStack justify="center" spacing={6} mb={4}>
            <Link href="https://github.com/tunombre" isExternal aria-label="GitHub" _hover={{
            color: 'accent.500'
          }}>
              <Icon as={Github} boxSize={5} />
            </Link>
            <Link href="https://linkedin.com/in/tunombre" isExternal aria-label="LinkedIn" _hover={{
            color: 'accent.500'
          }}>
              <Icon as={Linkedin} boxSize={5} />
            </Link>
            <Link href="https://twitter.com/tunombre" isExternal aria-label="Twitter" _hover={{
            color: 'accent.500'
          }}>
              <Icon as={Twitter} boxSize={5} />
            </Link>
          </HStack>
          <Text fontSize="sm" color="gray.400">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </Text>
        </Box>
      </Container>
    </Box>;
};
export default Footer;