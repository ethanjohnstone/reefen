import { Box, Container, useColorModeValue } from "@chakra-ui/react"
import { Navigation } from "../Navigation"

export const Header = () => {
    return (<>
        <Box bg={useColorModeValue('white.900', 'grey.900')} px={4} zIndex={1} borderTopWidth={5} borderColor="orange.400">
        <Container maxW='container.lg'>
            <Navigation></Navigation>
        </Container>
        </Box>
    </>)
}