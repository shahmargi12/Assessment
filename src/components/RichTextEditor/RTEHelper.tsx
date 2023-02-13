import { $isAtNodeEnd } from '@lexical/selection';
import {
    $getRoot,
    $isElementNode,
    $isDecoratorNode,
    RangeSelection,
    ElementNode,
    TextNode,
    LexicalEditor,
} from 'lexical';
import { $generateNodesFromDOM } from '@lexical/html';

export const LowPriority = 1;

export function getSelectedNode(selection: RangeSelection): ElementNode | TextNode {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = selection.anchor.getNode();
    const focusNode = selection.focus.getNode();
    if (anchorNode === focusNode) {
        return anchorNode;
    }
    const isBackward = selection.isBackward();
    if (isBackward) {
        return $isAtNodeEnd(focus) ? anchorNode : focusNode;
    } else {
        return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
    }
}

export function positionEditorElement(editor: HTMLElement, rect: DOMRect): void {
    if (rect === null) {
        editor.style.opacity = '0';
        editor.style.top = '-1000px';
        editor.style.left = '-1000px';
    } else {
        editor.style.opacity = '1';
        editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
        editor.style.left = `${rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2}px`;
    }
}

export const getInitialState = (editor: LexicalEditor, initialValue: string): void => {
    editor.update(() => {
        // In the browser you can use the native DOMParser API to parse the HTML string.
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialValue, 'text/html');

        // Once you have the DOM instance it's easy to generate LexicalNodes.
        const nodes = $generateNodesFromDOM(editor, dom);

        const root = $getRoot();
        nodes.map((node) => {
            if ($isDecoratorNode(node) || $isElementNode(node)) {
                root.append(node);
            }
        });
    });
};
