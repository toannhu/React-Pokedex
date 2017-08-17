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
        if (typeof Storage !== 'undefined') {
            let expiry = 30 * 60; // 30 min default
            let cacheKey = url;
            let cached = localStorage.getItem(cacheKey);
            let whenCached = localStorage.getItem(cacheKey + ':ts');
            if (cached !== null && whenCached !== null) {
                let age = (Date.now() - whenCached) / 1000;
                if (age < expiry) {                       
                    dispatch(itemsFetchDataSuccess(JSON.parse(cached)));
                    dispatch(itemsIsLoading(false));
                    return;
                }
                else {
                    localStorage.removeItem(cacheKey);
                    localStorage.removeItem(cacheKey + ':ts');
                }
            }


            return fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(itemsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => { 
                    dispatch(itemsFetchDataSuccess(items));
                    localStorage.setItem(cacheKey, JSON.stringify(items));
                    localStorage.setItem(cacheKey+':ts', Date.now());
                })     
                .catch(() => dispatch(itemsHasErrored(true)));
        }
        else {
            return fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(itemsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => {
                    dispatch(itemsFetchDataSuccess(items));
                })     
                .catch(() => dispatch(itemsHasErrored(true)));
        }
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
        if (typeof Storage !== 'undefined') {
            let expiry = 30 * 60; // 30 min default
            let evolDataCacheKey = url;
            let evolDataCached = localStorage.getItem(evolDataCacheKey);
            let evolDataWhenCached = localStorage.getItem(evolDataCacheKey + ':ts');
            if (evolDataCached !== null && evolDataWhenCached !== null) {
                let age = (Date.now() - evolDataWhenCached) / 1000;
                if (age < expiry) {      
                    dispatch(evolDataFetchDataSuccess(JSON.parse(evolDataCached)));
                    dispatch(evolDataIsLoading(false));
                    return;
                }
                else {
                    localStorage.removeItem(evolDataCacheKey);
                    localStorage.removeItem(evolDataCacheKey + ':ts');
                }
            }


            return fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(evolDataIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => { 
                    dispatch(evolDataFetchDataSuccess(items));
                    localStorage.setItem(evolDataCacheKey, JSON.stringify(items));
                    localStorage.setItem(evolDataCacheKey+':ts', Date.now());
                })     
                .catch(() => dispatch(evolDataHasErrored(true)));
        }
        else {

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
        }
    };
}