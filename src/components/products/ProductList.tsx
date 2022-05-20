import { Box, Container, Grid, GridItem, Text, Stack } from "@chakra-ui/react";
import { Product } from "./Product";

const productData = [];

export const ProductList = () => (
    <Box p={50}>
        <Container maxW='container.lg'>
            <Stack spacing={6}>
            <Text fontSize='3xl' align='center'>Things for sale.</Text>
            <Grid templateColumns='repeat(3, 1fr)' gap='6'>
                {productData.map((product) => (
                    <GridItem w='100%'> 
                        <Product key={product.id} {...product}></Product>
                    </GridItem>
                ))}
            </Grid>
            </Stack>
        </Container>
    </Box>
)
