import { JSX } from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';

export default function MainScreen(): JSX.Element {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <NavBar />
      <WelcomeScreen />
    </Box>
  );
}
