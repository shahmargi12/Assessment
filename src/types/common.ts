export type IconType = ColorType & {
    width: number;
    height: number;
    opacity?: number | string;
    props?: any;
};

export type ColorType = {
    fill?: string;
    fill1?: string;
    fill2?: string;
    ribbon?: string;
};
