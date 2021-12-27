import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { TProduct } from "../../types/product";


export const Product = ({id, imageURL, name, price}: TProduct) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">

            <Image
                src={imageURL}
                alt={`Picture of ${name}`}
                roundedTop="lg"
            />

            <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {name}
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="lg">
                            $
                        </Box>
                        {price.toFixed(2)}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}