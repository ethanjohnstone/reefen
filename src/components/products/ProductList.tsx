import { Box, Container, Grid, GridItem, Text, Stack } from "@chakra-ui/react";
import { Product } from "./Product";

const productData = [{
    imageURL:
    'https://i.imgur.com/zBVogPv.jpg',
    name: 'Golden eye, Green Chalice',
    price: 150,
    id: 1
},
{
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic 2',
    price: 4.5,
    id: 2
},
{
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic 3',
    price: 4.5,
    id: 3
},
{
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic 4',
    price: 4.5,
    id: 4
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