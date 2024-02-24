import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { BsGitlab } from 'react-icons/bs';
import { FaBitbucket, FaGitAlt, FaGithub } from 'react-icons/fa';

export function RemoteSetupTab(): JSX.Element {
  const [remoteURL, setRemoteURL] = useState<string>('');

  const RemoteTypeIcon = useMemo(() => {
    if (remoteURL.includes('github')) return <FaGithub />;
    else if (remoteURL.includes('gitlab')) return <BsGitlab color="orange" />;
    else if (remoteURL.includes('bitbucket'))
      return <FaBitbucket color="blue" />;
    else return <FaGitAlt />;
  }, [remoteURL]);

  return (
    <TabPanel
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text fontWeight="bold">Repository URL</Text>
      <InputGroup mt={2}>
        <InputLeftAddon>{RemoteTypeIcon}</InputLeftAddon>
        <Input
          variant="outlined"
          value={remoteURL}
          onChange={(e) => {
            setRemoteURL(e.target.value);
          }}
          placeholder="https://github.com/example/example.git"
        />
      </InputGroup>
      <Button mt={5} colorScheme="blue">
        Create
      </Button>
    </TabPanel>
  );
}
