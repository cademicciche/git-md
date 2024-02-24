import { Text, Flex, chakra, Divider, Select } from '@chakra-ui/react';
import { JSX } from 'react';

const Container = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    wrap: 'wrap',
    width: '100%',
    height: 25,
    bgColor: 'gray.100',
    color: 'blue.400',
    p: 5,
    pt: 8,
    pb: 8,
  },
});

const Panel = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function NavBar(): JSX.Element {
  return (
    <>
      <Container as="nav">
        <Text fontSize={20} fontWeight="bold">
          Logo
        </Text>
        <Panel>
          <Select placeholder="Project" />
        </Panel>
      </Container>
      <Divider />
    </>
  );
}
