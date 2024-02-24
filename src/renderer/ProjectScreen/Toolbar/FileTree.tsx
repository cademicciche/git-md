import { JSX } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { NodeRendererProps, Tree } from 'react-arborist';
import { FaFolder, FaFolderOpen, FaMarkdown } from 'react-icons/fa';

const initialData = [
  {
    id: '1',
    name: 'folder',
    children: [
      {
        name: 'file1',
        id: 'c1',
      },
      {
        name: 'file2',
        id: 'c2',
      },
    ],
  },
  {
    id: '2',
    name: 'file3',
  },
];

function FolderIcon({ isOpen }: { isOpen: boolean }): JSX.Element {
  if (isOpen) return <FaFolderOpen />;

  return <FaFolder />;
}

function NodeItem({
  node,
  style,
  dragHandle,
}: NodeRendererProps<any>): JSX.Element {
  /* This node instance can do many things. See the API reference. */
  return (
    <Stack
      style={style}
      ref={dragHandle}
      alignItems="center"
      direction="row"
      onClick={() => node.toggle()}
    >
      {!node.isLeaf ? <FolderIcon isOpen={node.isOpen} /> : <FaMarkdown />}
      <Text>{node.data.name}</Text>
    </Stack>
  );
}

export default function FileTree(): JSX.Element {
  return (
    <Tree data={initialData} openByDefault={false} width="100%" indent={25}>
      {NodeItem}
    </Tree>
  );
}
