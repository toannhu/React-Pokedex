export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function evolDataHasErrored(bool) {
    return {
        type: 'EVOL_DATA_HAS_ERRORED',
        evolData_hasErrored: bool
    };
}

export function evolDataIsLoading(bool) {
    return {
        type: 'EVOL_DATA_IS_LOADING',
        evolData_isLoading: bool
    };
}

export function evolDataFetchDataSuccess(evolData) {
    return {
        type: 'EVOL_DATA_FETCH_DATA_SUCCESS',
        evolData
    };
}

export function evolDataFetchData(url) {
    return (dispatch) => {
        dispatch(evolDataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(evolDataIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((evolData) => dispatch(evolDataFetchDataSuccess(evolData)))
            .catch(() => dispatch(evolDataHasErrored(true)));
    };
}