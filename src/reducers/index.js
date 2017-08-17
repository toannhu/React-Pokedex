/*import { combineReducers } from 'redux';*/
import { items, itemsHasErrored, itemsIsLoading, evolData, evolDataHasErrored, evolDataIsLoading } from './items';

/*export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    evolData,
    evolDataHasErrored,
    evolDataIsLoading
});*/

const reducers ={
    items,
    itemsHasErrored,
    itemsIsLoading,
    evolData,
    evolDataHasErrored,
    evolDataIsLoading
};

export default reducers;