import { JSX } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  chakra,
} from '@chakra-ui/react';
import { BsGit } from 'react-icons/bs';
import LocalSetupTab from './LocalSetupTab';
import { RemoteSetupTab } from './RemoteSetupTab';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    p: 10,
  },
});

const ConfigureCard = chakra(Card, {
  baseStyle: {
    mt: 10,
    width: '50%',
    bgColor: 'gray.100',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function WelcomeScreen(): JSX.Element {
  return (
    <Container>
      <BsGit size="10em" />
      <Heading size="lg" mt={5}>
        Welcome to GitMD
      </Heading>
      <Heading size="md" mt={5}>
        The tool for editing markdown content in a Git repository.
      </Heading>
      <ConfigureCard variant="ghost">
        <CardHeader
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={-5}
        >
          <Heading size="sm">Your first project! 🎉</Heading>
          <Text>Let&apos;s get you set up with your first Git repository</Text>
        </CardHeader>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>Local</Tab>
              <Tab>Remote</Tab>
            </TabList>
            <TabPanels>
              <LocalSetupTab />
              <RemoteSetupTab />
            </TabPanels>
          </Tabs>
        </CardBody>
      </ConfigureCard>
    </Container>
  );
}
