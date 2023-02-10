export type NonNullable<T> = T extends null | undefined ? never : T;

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
export type Item = {
  label: string;
  value: string;
};
export type ItemRoute = Item & {
  route?: string;
};

export type HeaderItem = ItemRoute & {
  subItem?: ItemRoute[];
};
