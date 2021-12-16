export type TPageState = {
    search: string;
};

export enum PageActionEnun {
    SET_SEARCH = "SET_SEARCH",
}

export type TPageSetSearch = {
    type: PageActionEnun.SET_SEARCH;
    payload: string;
};

export type TPageAction = TPageSetSearch;
