import common from '../common';

const tableStore = (dispatch, service) => {
    const { toastify } = common;
    const toggleLoader = () => dispatch({ action: 'toggle-loader' });
    const toggleSorting = (type) => dispatch({ action: 'sort', type: type });
    const toggleError = (isError) => dispatch({ action: 'error', type: isError });
    const filterText = (text) => dispatch({ action: 'filter', filterText: text });
    const handleInit = () =>
        service.getAll()
            .then((res) => {
                dispatch({ action: 'init-state-data', data: res.data });
            })
            .catch((err) => {
                toggleError('list-loading');
                console.error(err);
                toastify('error', 'list loading was error')
            })
            .finally(() => toggleLoader());

    const deleteElement = (id) => {
        toggleLoader();
        service.deleteItem(id).then((res) => {
            if (res.status === 200) {
                toastify('success', 'item deleted success');
                handleInit();
            }
        }).catch((err) => {
            toastify('error', 'item deleted error');
            toggleError('item deleted error')
            console.error(err);
        })
    };

    return {
        toggleLoader,
        toggleSorting,
        toggleError,
        filterText,
        deleteElement,
        handleInit
    }
};

export default tableStore;
