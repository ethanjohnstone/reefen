import { Box, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box borderBottomWidth={5} borderColor="blue.400"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'container.lg'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Heading as='h4'>Reefen.</Heading>
                <Text>© 2022 Reefen. All rights reserved</Text>
            </Container>
        </Box>
    )
}