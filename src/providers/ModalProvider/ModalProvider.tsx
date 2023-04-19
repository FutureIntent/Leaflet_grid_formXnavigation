import { ReactNode, ReactElement, useState, useEffect, useRef } from 'react';

import ModalContext from './ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps): ReactElement => {
    const modalNode = useRef(null);
    const [stateModalNode, setStateModalNode] = useState<HTMLElement | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [data, setData] = useState<any>();

    useEffect(() => {
        setStateModalNode(modalNode.current);
    }, [modalNode]);

    return (
        <ModalContext.Provider
            value={{
                modalNode: stateModalNode,
                type,
                setType,
                data,
                setData,
            }}
        >
            {children}
            <div ref={modalNode} />
        </ModalContext.Provider>
    );
};
export default ModalProvider;
