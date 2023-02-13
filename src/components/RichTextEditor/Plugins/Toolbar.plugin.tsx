import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icons from '../../../Icons';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { SELECTION_CHANGE_COMMAND, FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
    $isListNode,
    ListNode,
} from '@lexical/list';
import { $isHeadingNode } from '@lexical/rich-text';
import { LowPriority } from '../RTEHelper';
import ToolbarIconButton from '../ToolbarIconButton';

export default function ToolbarPlugin(): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const toolbarRef = useRef(null);
    const [blockType, setBlockType] = useState('paragraph');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            const element = anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
            const elementKey = element.getKey();
            const elementDOM = editor.getElementByKey(elementKey);
            if (elementDOM !== null) {
                if ($isListNode(element)) {
                    const parentList = $getNearestNodeOfType(anchorNode, ListNode);
                    const type = parentList ? parentList.getTag() : element.getTag();
                    setBlockType(type);
                } else {
                    const type = $isHeadingNode(element) ? element.getTag() : element.getType();
                    setBlockType(type);
                }
            }
            // Update text format
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
        }
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                () => {
                    updateToolbar();
                    return false;
                },
                LowPriority,
            ),
        );
    }, [editor, updateToolbar]);

    return (
        <div className="toolbar" ref={toolbarRef}>
            <ToolbarIconButton
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                }}
                isActive={isBold}
            >
                <Icons.Bold />
            </ToolbarIconButton>
            <ToolbarIconButton
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                }}
                isActive={isItalic}
            >
                <Icons.Italic />
            </ToolbarIconButton>
            <ToolbarIconButton
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                }}
                isActive={isUnderline}
            >
                <Icons.Underlined />
            </ToolbarIconButton>
            <ToolbarIconButton
                onClick={() => {
                    if (blockType === 'ol') {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
                    }
                }}
                isActive={blockType === 'ol'}
            >
                <Icons.OrderedList />
            </ToolbarIconButton>
            <ToolbarIconButton
                onClick={() => {
                    if (blockType === 'ul') {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
                    }
                }}
                isActive={blockType === 'ul'}
            >
                <Icons.UnorderedList />
            </ToolbarIconButton>
        </div>
    );
}
