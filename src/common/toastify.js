import { toast } from 'react-toastify';

const toastify = (type, message) => {
    const options = {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    };
    switch (type) {
        case 'info':
            toast.info(message, options);
            break;
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        case 'warning':
            toast.warning(message, options);
            break;
        default:
            break;
    }
};

export default toastify
