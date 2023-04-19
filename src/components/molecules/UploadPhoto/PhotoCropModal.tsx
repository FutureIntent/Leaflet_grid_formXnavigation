import 'react-image-crop/dist/ReactCrop.css';

import { useModal } from '@hooks/useModal';

import Modal from '@components/molecules/Modal/Modal';
import CropEditor from '@components/molecules/UploadPhoto/CropEditor';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const PhotoCropModal = () => {
    const { closeModal, data } = useModal<{ img: string; fileName: string }>('avatar-crop');

    if (!data?.img) return null;

    return (
        <Modal name="avatar-crop" onClose={closeModal}>
            <Box p="2rem 2.5rem">
                <Typography variant="h3">Edit avatar</Typography>
                <CropEditor img={data.img} onClose={closeModal} />
            </Box>
        </Modal>
    );
};

export default PhotoCropModal;
