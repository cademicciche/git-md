import { JSX } from 'react';
import { chakra, Box } from '@chakra-ui/react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import NavBar from '../NavBar/NavBar';
import Toolbar from './Toolbar/Toolbar';
import Editor from './Editor';

const Container = chakra(Box, {
  baseStyle: {
    height: '100%',
    width: '100%',
  },
});

export default function ProjectScreen(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <PanelGroup autoSaveId="project-tools" direction="horizontal">
        <Panel defaultSize={25}>
          <Toolbar />
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <Editor />
        </Panel>
      </PanelGroup>
    </Container>
  );
}
