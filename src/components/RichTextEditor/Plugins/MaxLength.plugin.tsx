import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { trimTextContentFromAnchor } from '@lexical/selection';
import { $restoreEditorState } from '@lexical/utils';
import { $getSelection, $isRangeSelection, EditorState, RootNode } from 'lexical';

function MaxLengthPlugin({ maxLength }: { maxLength: number }): null {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        let lastRestoredEditorState: EditorState | null = null;

        return editor.registerNodeTransform(RootNode, (rootNode: RootNode) => {
            const selection = $getSelection();
            if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
                return;
            }
            const prevEditorState = editor.getEditorState();
            const prevTextContent = prevEditorState.read(() => rootNode.getTextContent());
            const textContent = rootNode.getTextContent();
            if (prevTextContent !== textContent) {
                const textLength = textContent.length;
                const delCount = textLength - maxLength;
                const anchor = selection.anchor;

                if (delCount > 0) {
                    // Restore the old editor state instead if the last
                    // text content was already at the limit.
                    if (prevTextContent.length === maxLength && lastRestoredEditorState !== prevEditorState) {
                        lastRestoredEditorState = prevEditorState;
                        $restoreEditorState(editor, prevEditorState);
                    } else {
                        trimTextContentFromAnchor(editor, anchor, delCount);
                    }
                }
            }
        });
    }, [editor, maxLength]);

    return null;
}

export default MaxLengthPlugin;
