import { useModalContext } from 'src/providers/ModalProvider';

interface UseModalReturn<T> {
    openModal: (data?: T) => void;
    closeModal: () => void;
    data?: T | null;
}

export const useModal = <T>(name: string): UseModalReturn<T> => {
    const { setType, setData, data } = useModalContext<T>();

    const openModal = (modalData?: T) => {
        setType(name);
        setData(modalData);
    };

    const closeModal = () => {
        setType(null);
        setData();
    };

    return { openModal, closeModal, data };
};
