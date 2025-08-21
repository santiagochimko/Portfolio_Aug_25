import React, { useState } from 'react';
import { Box, Container, Heading, Text, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button, VStack, HStack, FormErrorMessage, useToast, Link, Icon } from '@chakra-ui/react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
const ContactSection = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  type Errors = { name?: string; email?: string; message?: string };
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validate = () => {
  const newErrors: Errors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        toast({
          title: 'Mensaje enviado',
          description: '¡Gracias por contactarme! Te responderé pronto.',
          status: 'success',
          duration: 5000,
          isClosable: true
        });
      }, 1500);
    }
  };
  return <Box id="contact" py={{
    base: 16,
    md: 24
  }} bg="gray.50">
      <Container maxW="5xl">
        <Box mb={16} textAlign="center">
          <Heading fontSize={{
          base: '2xl',
          md: '3xl'
        }} mb={4} position="relative" color="gray.700" display="inline-block" _after={{
          content: '""',
          width: '60px',
          height: '3px',
          backgroundColor: 'accent.500',
          position: 'absolute',
          bottom: '-10px',
          left: 'calc(50% - 30px)'
        }}>
            Contacto
          </Heading>
          <Text fontSize={{
          base: 'md',
          md: 'lg'
        }} mt={10} maxW="3xl" mx="auto" color="gray.600">
            ¿Interesado en trabajar juntos? Completa el formulario o contáctame
            directamente a través de los enlaces a continuación.
          </Text>
        </Box>
        <SimpleGrid columns={{
        base: 1,
        md: 2
      }} spacing={10}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch" bg="white" p={8} borderRadius="lg" boxShadow="sm">
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name" color={'gray.600'}>Nombre</FormLabel>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} borderColor={'gray.300'} placeholder="Tu nombre" focusBorderColor="accent.500" _hover={{ borderColor: 'gray.500' }} _placeholder={{ color: 'gray.500' }} />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email" color={'gray.600'}>Email</FormLabel>
              <Input id="email" name="email" type="email" value={formData.email} borderColor={'gray.300'} onChange={handleChange} placeholder="tu.email@ejemplo.com" focusBorderColor="accent.500" _hover={{ borderColor: 'gray.500' }} _placeholder={{ color: 'gray.500' }} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormLabel htmlFor="message" color={'gray.600'}>Mensaje</FormLabel>
              <Textarea id="message" name="message" borderColor={'gray.300'} value={formData.message} onChange={handleChange} placeholder="¿En qué puedo ayudarte?" focusBorderColor="accent.500" rows={5} _hover={{ borderColor: 'gray.500' }} _placeholder={{ color: 'gray.500' }} />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>
              <Button type="submit" colorScheme="teal" isLoading={isSubmitting} loadingText="Enviando..." size="lg" width="100%">
                Enviar mensaje
              </Button>
            </VStack>
          </form>
          <VStack spacing={8} align="flex-start" justify="center">
            <VStack spacing={6} align="flex-start" width="100%">
              <Heading as="h3" size="md" color={"gray.600"}>
                Contáctame directamente
              </Heading>
              <HStack spacing={4}>
                <Box bg="accent.500" color="white" p={2} borderRadius="full">
                  <Mail size={20} />
                </Box>
                <Link href="mailto:tucorreo@ejemplo.com" color="gray.700" fontWeight="medium">
                  santiagochimko.dev@gmail.com
                </Link>
              </HStack>
              <HStack spacing={4}>
                <Box bg="accent.500" color="white" p={2} borderRadius="full">
                  <Linkedin size={20} />
                </Box>
                <Link href="https://linkedin.com/in/tunombre" isExternal color="gray.700" fontWeight="medium">
                  linkedin.com/in/scn93
                </Link>
              </HStack>
              <HStack spacing={4}>
                <Box bg="accent.500" color="white" p={2} borderRadius="full">
                  <Github size={20} />
                </Box>
                <Link href="https://github.com/tunombre" isExternal color="gray.700" fontWeight="medium">
                  github.com/santiagochimko
                </Link>
              </HStack>
            </VStack>
            <Box pt={6}>
              <Button as="a" href="/cv.pdf" download leftIcon={<FileText size={18} />} colorScheme="gray" variant="outline" size="lg">
                Descargar CV
              </Button>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>;
};
export default ContactSection;