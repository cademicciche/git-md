import {
  Text,
  Button,
  Flex,
  chakra,
  Divider,
  IconButton,
  Box,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { FaGit, FaUndo } from 'react-icons/fa';
import { Fragment } from 'react';

const Container = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    wrap: 'wrap',
    width: '100%',
    height: 25,
    // bgColor: 'gray.800',
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: resetModalOpen,
    onOpen: onResetOpen,
    onClose: onResetClose,
  } = useDisclosure();

  return (
    <Fragment>
      <Container as="nav">
        <Text fontSize={20} fontWeight="bold">
          Logo
        </Text>
        <Panel>
          <Tooltip label="Configure Git">
            <IconButton
              variant="ghost"
              color="blue.400"
              onClick={onOpen}
              icon={<FaGit />}
              aria-label="Configure Git"
              mr={2}
            />
          </Tooltip>
          <Tooltip label="Reset">
            <IconButton
              variant="ghost"
              color="blue.400"
              onClick={onResetOpen}
              icon={<FaUndo />}
              aria-label="Reset"
            />
          </Tooltip>
        </Panel>
      </Container>
      <Divider />
    </Fragment>
  );
}
