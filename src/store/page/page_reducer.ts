import { PageActionEnun, TPageAction, TPageSetSearch, TPageState } from "./page_type";

const pageState: TPageState = {
    search: "",
};

export const pageReducer = (state: TPageState = pageState, action: TPageAction): TPageState => {
    switch (action.type) {
        case PageActionEnun.SET_SEARCH:
            return { search: action.payload };
        default:
            return { ...state };
    }
};

export const setSearch = (search: string): TPageSetSearch => ({
    type: PageActionEnun.SET_SEARCH,
    payload: search,
});
