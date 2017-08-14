export function itemsHasErrored(state = false, action) {
    switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
        return action.hasErrored;

    default:
        return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
    case 'ITEMS_IS_LOADING':
        return action.isLoading;

    default:
        return state;
    }
}

export function items(state = {}, action) {
    switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
        return action.items;

    default:
        return state;
    }
}

export function evolDataHasErrored(state = false, action) {
    switch (action.type) {
    case 'EVOL_DATA_HAS_ERRORED':
        return action.evolData_hasErrored;

    default:
        return state;
    }
}

export function evolDataIsLoading(state = false, action) {
    switch (action.type) {
    case 'EVOL_DATA_IS_LOADING':
        return action.evolData_isLoading;

    default:
        return state;
    }
}

export function evolData(state = {}, action) {
    switch (action.type) {
    case 'EVOL_DATA_FETCH_DATA_SUCCESS':
        return action.evolData;

    default:
        return state;
    }
}