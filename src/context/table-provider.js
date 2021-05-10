import React, { useCallback, useEffect, useReducer } from 'react';
import TableService from '../services';
import tableReducer from './table-reducer';
import { ToastContainer } from 'react-toastify';
import tableStore from './table-store';
import common from '../common';

export const ServiceContext = React.createContext();

const initialState = { data: [], loader: null, sorting: 'default', filter: '', error: null };
const service = new TableService();
const { 
    customFilter,
    customSorting,
    toastify 
} = common;
const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tableReducer, initialState);
    const store = {
        ...tableStore(dispatch, service), 
        customFilter,
        customSorting, 
        toastify
    };
    const { toggleLoader, handleInit } = store;
    useEffect(() => {
        toggleLoader();
        handleInit();
    }, []);

    return (
        <ServiceContext.Provider value={{
            state,
            store
        }} >
            {children}
            <ToastContainer />
        </ServiceContext.Provider>
    );
};

export default TableProvider;
