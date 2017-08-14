import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, evolData, evolDataHasErrored, evolDataIsLoading } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    evolData,
    evolDataHasErrored,
    evolDataIsLoading
});