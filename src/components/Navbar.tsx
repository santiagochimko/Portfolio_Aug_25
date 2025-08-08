import React, { useEffect, useState } from 'react';
import { Box, Flex, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
const navLinks = [{
  name: 'Inicio',
  href: '#hero'
}, {
  name: 'Sobre Mí',
  href: '#about'
}, {
  name: 'Proyectos',
  href: '#projects'
}, {
  name: 'Educación',
  href: '#education'
}, {
  name: 'Contacto',
  href: '#contact'
}];
const Navbar = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <Box as="nav" position="sticky" top="0" zIndex="999" bg={'white'} boxShadow={scrolled ? 'sm' : 'none'} transition="all 0.3s ease" className="backdrop-blur-sm">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto" px={4} py={3}>
        <Box fontWeight="bold" fontSize="xl" color="accent.500">
          Portfolio
        </Box>
        {/* Desktop Navigation */}
        <Flex display={{
        base: 'none',
        md: 'flex'
      }} gap={8}>
          {navLinks.map(link => <Button key={link.name} variant="ghost" fontSize="sm" color="gray.700" _hover={{
          color: 'accent.500'
        }} as="a" href={link.href}>
              {link.name}
            </Button>)}
        </Flex>
        {/* Mobile Navigation Toggle */}
        <IconButton aria-label="Open Menu" icon={<Menu size={24} />} onClick={onOpen} display={{
        base: 'flex',
        md: 'none'
      }} variant="ghost" />
      </Flex>
      {/* Mobile Navigation Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="space-between" alignItems="center">
            <Box fontWeight="bold" fontSize="xl" color="accent.500">
              Portfolio
            </Box>
            <IconButton aria-label="Close Menu" icon={<X size={24} />} onClick={onClose} variant="ghost" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={8}>
              {navLinks.map(link => <Button key={link.name} variant="ghost" w="full" justifyContent="flex-start" fontSize="lg" onClick={onClose} as="a" href={link.href}>
                  {link.name}
                </Button>)}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>;
};
export default Navbar;