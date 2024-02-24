import { JSX } from 'react';
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

export default function LocalSetupTab(): JSX.Element {
  return (
    <TabPanel
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text fontWeight="bold">Local Path</Text>
      <InputGroup mt={2}>
        <Input
          contentEditable={false}
          placeholder="Select git repository"
          variant="outlined"
        />
        <InputRightAddon>
          <IconButton aria-label="Select repo" icon={<FaUpload />} />
        </InputRightAddon>
      </InputGroup>
      <Button mt={5} colorScheme="blue">
        Create
      </Button>
    </TabPanel>
  );
}
