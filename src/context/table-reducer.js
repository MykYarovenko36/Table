const SORT = 'sort';
const INIT_TABLE_DATA = 'init-state-data';
const TOGGLE_LOADER = 'toggle-loader'
const TOGGLE_ERROR = 'toggle-error';
const FILTER = 'filter';

const tableReducer = (state, reducer) => {
    console.log('state', state);
    console.log('reducer', reducer);
    switch (reducer.action) {
        case INIT_TABLE_DATA:
            return { ...state, data: reducer.data };
        case SORT:
            return { ...state, sorting: reducer.type };
        case FILTER:
            return { ...state, filter: reducer.filterText };
        case TOGGLE_LOADER:
            return { ...state, loader: !state.loader };
        case TOGGLE_ERROR:
            return { ...state, error: reducer.action.type };
        default:
            return state;
    }
}

export default tableReducer;