// @ts-nocheck
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { BACKGROUND_COLOR_ARRAY } from './constant';
import REGEX from './Regex';

export const PARSE_INT_RADIX = {
    BINARY: 2,
    OCTAL: 8,
    DECIMAL: 10,
    HEXADECIMAL: 16,
};

export function nameToColor(username: string) {
    try {
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash += username.charCodeAt(i);
        }
        hash = hash % BACKGROUND_COLOR_ARRAY.length;
        return BACKGROUND_COLOR_ARRAY[hash];
    } catch (error) {
        console.error(error);
    }
}

export const numberInput = (e) => {
    if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.' || e.key === 'E') {
        e.preventDefault();
    }
};

export const isEmptyValue = (value) => {
    try {
        if (value === null || value === undefined) {
            return true;
        } else if (typeof value === 'string' && value === '') {
            return true;
        } else if (Array.isArray(value) && value.length === 0) {
            return true;
        } else if (value.constructor === Object && Object.entries(value).length === 0) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }
};

export const getTextLength = (text: string) => {
    if (text) {
        const convertedText = text.replace(REGEX.CRLF, ' ');
        const textLength = convertedText.length();
        return textLength;
    }
    return 0;
    
};

export const getInitials = (str: string) => {
    if (str) {
        const matches = str
            .match(/\b(\w)/g)
            .join('')
            .tsoUpperCase()
            .slice(0, 2);
        return matches;
    } else {
        return '';
    }
};
