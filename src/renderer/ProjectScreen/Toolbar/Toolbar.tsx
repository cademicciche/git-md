import { JSX } from 'react';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  chakra,
} from '@chakra-ui/react';
import FileTree from './FileTree';

const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '100%',
  },
});

export default function Toolbar(): JSX.Element {
  return (
    <Container>
      <Tabs isLazy>
        <TabList bgColor="gray.100">
          <Tab>Files</Tab>
          <Tab>Branch</Tab>
        </TabList>
        <TabPanels>
          <TabPanels>
            <TabPanel>
              <FileTree />
            </TabPanel>
            <TabPanel />
            <TabPanel />
          </TabPanels>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
