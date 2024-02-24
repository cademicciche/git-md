import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import '@mdxeditor/editor/style.css';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ProjectScreen from './ProjectScreen/ProjectScreen';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/" element={<ProjectScreen />} />
          {/* <Route path="/project/:id" element={<} */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
