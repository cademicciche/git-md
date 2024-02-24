import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainScreen from './MainScreen/MainScreen';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
