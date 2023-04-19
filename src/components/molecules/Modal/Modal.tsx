import { Modal as MuiModal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { useModalContext } from '@providers/ModalProvider';

import Fade from '@components/atoms/Animation';

interface ModalProps {
    ariaTitle?: string;
    ariaDescription?: string;
    children: ReactNode;
    name: string;
    onClose: () => void;
}

const StyledModal = styled.div`
    background-color: var(--white);
    border-radius: ${({ theme }) => theme.space['2xs']};
    box-shadow: ${({ theme }) => theme.shadows.card};
    left: 50%;
    max-width: 900px;
    min-width: 400px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`;

const Modal = ({
    children,
    name,
    ariaTitle,
    ariaDescription,
    onClose,
}: ModalProps): ReactElement | null => {
    const { modalNode, type } = useModalContext();

    if (modalNode && name === type) {
        return (
            <MuiModal
                aria-labelledby={ariaTitle}
                aria-describedby={ariaDescription}
                open={name === type}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    sx: { backgroundColor: 'var(--black-brand)' },
                }}
            >
                <Fade show={name === type}>
                    <StyledModal>{children}</StyledModal>
                </Fade>
            </MuiModal>
        );
    }

    return null;
};

export default Modal;
