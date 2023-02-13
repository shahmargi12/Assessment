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

export type NonNullable<T> = T extends null | undefined ? never : T;

export type Item = {
    label: string;
    value: string;
};
export type NumberItem = {
    label: string | number;
    value: string | number;
};

export type PagerType = {
    filteredRecords?: number;
    pageNumber?: number;
    recordsPerPage: number;
    sortBy: string;
    sortOrder: string;
    totalRecords: number;
};

export type ApiResponse<T> = {
    message: string;
    payload: T;
    show: boolean;
    status: number;
    pager?: PagerType;
};

export type ItemRoute = Item & {
    route?: string;
};

export type HeaderItem = ItemRoute & {
    subItem?: ItemRoute[];
};

export type MenuItemType = {
    label: string;
    type: string;
    canAccess: boolean;
};

export type SortOrderType = 'asc' | 'desc' | '';

export type ScreenSize =
    | 'desktopBig'
    | 'desktopMid'
    | 'macPad'
    | 'desktopL'
    | 'macbook'
    | 'desktopRegular'
    | 'desktopSmall'
    | 'ipadPro'
    | 'tabLand'
    | 'phone'
    | 'iphone';

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
    width: number | undefined;
    height: number | undefined;
}
export type CatchErrorType = ApiResponse<null>;

export type AsyncReqParam = {
    search: string;
    pageNumber: number;
    recordsPerPage: number;
    sortOrder: SortOrderType;
    sortBy: string;
    showAll: boolean;
    boost?: string;
};

export type ShowAllReqParam = {
    showAll: boolean;
};

export type ItemCreatable = Item & {
    __isNew__?: boolean;
};

export type LocationItem = Item & {
    country: string;
    country_id: string;
    state: string;
    state_id: string;
    city: string;
    city_id: string;
};

export type CountryCodeItem = Item & {
    dialCodeId: string;
    dialCountryId: number;
    prefix: string;
};

export type Programme = {
    value: string;
    label: string;
    createdAt: string;
};

export type ProgrammeCreatable = Programme & {
    __isNew__?: boolean;
};

export type SectionType = Item & {
    _id: string;
};

export type MonthItem = Record<string, string>;

export type YearIntervalItem = Item & {
    name: string;
    checked: boolean;
    from: string;
    to: string;
    operator: string;
};

export type ProgramWithDegreeList = {
    degree_uuid: string;
    education_level_uuid: string;
    programme_uuid: string;
    school_uuid: string;
    stream_degree_programme: string;
    stream_uuid: string;
};

export type DateItem = {
    lte: string;
    gte: string;
};

export type EventParam = {
    eventTypeId: string;
    eventId: string;
};
