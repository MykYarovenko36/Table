import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../context/table-provider';
import TableList from '../table-list';
import ModalForm from '../modal';
import Select from '../select';

const Table = () => {
    const { state, store } = useContext(ServiceContext);
    const { customSorting, customFilter, filterText } = store;
    const { data, filter, sorting } = state;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalItem, setModalItem] = useState({});
    const toggleModalForm = (el) => {
        return isOpenModal === true? setIsOpenModal(!isOpenModal) : (setModalItem(el), setIsOpenModal(!isOpenModal));
    };

    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        setItemList(customSorting(sorting, data).filter(customFilter(filter)));
    }, [state, customFilter, customSorting, data, filter, sorting]);

    return (
        <div>
            <input type="text" onChange={(event) => filterText(event.target.value)} />
            <button onClick={() => toggleModalForm()}>Create element</button>
            <Select select={{value: state.sorting}} 
                options={[
                    {value:'default', text: 'default list'},
                    {value: 'alphabet', text: 'A-Z'}, 
                    {value: 'alphabet-reverse', text: 'Z-A'}
                ]}
                handleSelect={store.toggleSorting} />
           { state.loader? <p>Loading...</p> : 
                <TableList 
                   tableList={itemList} 
                   deleteElement={store.deleteElement}
                   toggleModalForm={toggleModalForm}
                /> }
                {isOpenModal && <ModalForm isOpen={isOpenModal} toggleModalForm={toggleModalForm} item={modalItem}/>}
        </div>
    );
};

export default Table;
