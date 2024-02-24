import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  DiffSourceToggleWrapper,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  codeBlockPlugin,
  diffSourcePlugin,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  toolbarPlugin,
} from '@mdxeditor/editor';
import './Editor.css';
import { JSX } from 'react';

export function ToolbarContents(): JSX.Element {
  return (
    <DiffSourceToggleWrapper>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <BlockTypeSelect />
      <Separator />
      <ListsToggle />
      <Separator />
      <InsertImage />
      <InsertCodeBlock />
      <InsertFrontmatter />
    </DiffSourceToggleWrapper>
  );
}

export default function Editor(): JSX.Element {
  return (
    <MDXEditor
      className="gitmd-editor"
      markdown="Hello world"
      plugins={[
        headingsPlugin(),
        toolbarPlugin({
          toolbarContents: ToolbarContents,
        }),
        markdownShortcutPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        diffSourcePlugin({ diffMarkdown: '' }),
        codeBlockPlugin(),
      ]}
    />
  );
}
