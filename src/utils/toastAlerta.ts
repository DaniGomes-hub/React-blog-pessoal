import { toast } from 'react-toastify';

export function toastAlerta (mensagem: string, tipo: string) {
switch (tipo) {
case 'sucesso':
    toast.success(mensagem, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: undefined,
    });
    break;

case 'info':
    toast.info(mensagem, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition:undefined,
    });
    break;

case 'erro':
    toast.error(mensagem, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'colored',
    progress: undefined,
    });
    break;

default:
    toast.info(mensagem, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'colored',
    progress: undefined,
    });
    break;
}
}