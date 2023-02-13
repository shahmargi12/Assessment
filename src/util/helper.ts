import { BACKGROUND_COLOR_ARRAY } from './constant';

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
