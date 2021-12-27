import { Box, Container, Grid, GridItem, Text, Stack } from "@chakra-ui/react";
import { Product } from "./Product";

const productData = [{
    imageURL:
    'https://i.imgur.com/vwKXD8K.jpg',
    name: 'Golden eye, Green Chalice',
    price: 150,
    id: 1
}];

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