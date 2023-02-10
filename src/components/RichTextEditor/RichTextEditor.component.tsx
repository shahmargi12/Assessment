import React from 'react';
import { $getRoot, EditorState, LexicalEditor } from 'lexical';
import { $generateHtmlFromNodes } from '@lexical/html';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';

import MaxLengthPlugin from './Plugins/MaxLength.plugin';
import CharacterLimitPlugin from './Plugins/CharacterLimit.plugin';
import ToolbarPlugin from './Plugins/Toolbar.plugin';
import { StyledRichTextPlugin, StyledRTEContainer, StyledPlaceholder, StyledRelative } from './RichTextEditor.styled';
import RTETheme from './RTETheme/Theme';
import NODES from './Node';
import { getInitialState } from './RTEHelper';

function Placeholder({ placeholder }: { placeholder: string }) {
    return (
        <StyledRelative>
            <StyledPlaceholder>{placeholder}</StyledPlaceholder>
        </StyledRelative>
    );
}

const editorConfig = {
    // The editor theme
    theme: RTETheme,
    // Handling of errors during update
    onError(error) {
        throw error;
    },
    // Any custom nodes go here
    nodes: NODES,
};

export type EditorProps = {
    placeholder: string;
    maxLength: number;
    initialValueInHtml: string;
    onChange: (changedValueInHtml: string, simpleText: string) => void;
    disabled: boolean;
};

const Editor = ({ initialValueInHtml, onChange, placeholder, maxLength }: EditorProps): React.ReactNode => {
    const onLocalChange = (editorState: EditorState, editor: LexicalEditor) => {
        editorState.read(() => {
            /*
            !IMPORTANT: Commented below code as we don't need other data like entities in parent component because we are just storing html in db.
            const root = $getRoot();
            const children = root.__children.map((key) => $getNodeByKey(key));
            console.log(JSON.stringify(root));
            */
            const root = $getRoot();
            const simpleText = root.getTextContent();
            const html = $generateHtmlFromNodes(editor, null);
            if (html === '<p dir="ltr"><br></p>' || html === '<p><br></p>') {
                onChange(null, simpleText);
                return;
            }
            onChange(html, simpleText);
            // console.log(html);
        });
    };
    return (
        <LexicalComposer
            initialConfig={{
                ...editorConfig,
                namespace: 'rte',
                editorState: initialValueInHtml
                    ? (editor: LexicalEditor) => getInitialState(editor, initialValueInHtml)
                    : undefined,
            }}
        >
            <StyledRTEContainer>
                <ToolbarPlugin />
                <div className="editor-inner">
                    <StyledRichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<Placeholder placeholder={placeholder} />}
                    />
                    <OnChangePlugin onChange={onLocalChange} />
                    <ListPlugin />
                    <LinkPlugin />
                    <CharacterLimitPlugin charset="UTF-8" limit={maxLength} />
                    <MaxLengthPlugin maxLength={maxLength + 30} />
                </div>
            </StyledRTEContainer>
        </LexicalComposer>
    );
};
Editor.defaultProps = {
    placeholder: 'Type something...',
    onChange: (html, value) => console.log(html, value),
    maxLength: 10000,
};

export default Editor;
