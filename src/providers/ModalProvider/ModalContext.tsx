import { createContext, useContext } from 'react';

interface ModalContextProps<T = any> {
    modalNode: HTMLElement | null;
    type: string | null;
    setType: (type: string | null) => void;
    data?: T;
    setData: (data?: T) => void;
}

const ModalContext = createContext<ModalContextProps>({
    modalNode: null,
    type: null,
    setType: () => {},
    setData: () => {},
});

export const useModalContext = <T,>(): ModalContextProps<T> => useContext(ModalContext);

export default ModalContext;
