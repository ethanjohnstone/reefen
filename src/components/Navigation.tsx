
import {
  useColorMode,
  Button,
  HStack,
  Link,
  Heading
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <HStack as='nav' justifyContent='space-between' alignItems='center' py={3}>
      <Link href='/' passHref>
        <Heading>Reefen.</Heading>
      </Link>

      <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </HStack>
  );
}