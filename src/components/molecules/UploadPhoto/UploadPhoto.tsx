import { useAppSelector } from '@hooks';
import { useRemoveAvatar } from '@services/user/hooks';
import { selectUser } from '@store/user/selectors';
import { hexToRgb } from '@utils/helpers';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'react-image-crop/dist/ReactCrop.css';
import styled from 'styled-components';

import colors from '@theme/configs/colors';

import { useModal } from '@hooks/useModal';

import TrashCan from '@components/molecules/Icons/TrashCan';
import PhotoCropModal from '@components/molecules/UploadPhoto/PhotoCropModal';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Typography from '@components/atoms/Typography';

const DropZoneWrapper = styled.div<{ isDragActive: boolean }>`
    height: 100%;
    position: relative;
    width: 100%;

    .dropzone {
        align-items: center;
        display: flex;
        flex: 1;
        height: 100%;
        justify-content: center;
        width: 100%;
    }

    &:hover:after {
        background-color: rgba(${hexToRgb(colors.blueBrand)}, 0.2);
        content: '';
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    form {
        height: 100%;
        width: 100%;
    }
`;

const ActionWrapper = styled.div`
    background-color: rgba(${hexToRgb(colors.blackBrand)}, 0.5);
    bottom: 0;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: 6px 10px;
    pointer-events: visible;
    position: absolute;
    width: 100%;
    z-index: 2;
`;

const UploadPhoto = () => {
    const ref = useRef<HTMLFormElement>(null);
    const { mutate: deleteAvatar } = useRemoveAvatar();
    const user = useAppSelector(selectUser);
    const [img, setImg] = useState(user?.profile?.avatar);
    const { openModal } = useModal<{ img: string; fileName?: string }>('avatar-crop');

    const onDrop = useCallback((acceptedFiles: any[]) => {
        const image = acceptedFiles[0];

        if (image) {
            openModal({ img: URL.createObjectURL(image), fileName: image?.fileName || null });
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        preventDropOnDocument: true,
    });

    useEffect(() => {
        setImg(user?.profile?.avatar);
    }, [user]);

    const handleDelete = () => {
        deleteAvatar();
    };

    return (
        <Box width="100%" height="100%" position="relative">
            <DropZoneWrapper isDragActive={isDragActive}>
                <div
                    {...getRootProps({
                        className: 'dropzone',
                    })}
                >
                    <form id="avatar-upload" ref={ref}>
                        <input {...getInputProps()} />
                        {!img ? (
                            <Box
                                backgroundColor={colors.greyCyan}
                                width="100%"
                                height="100%"
                                display="flex"
                                alignItems="center"
                                p={10}
                                textAlign="center"
                                justifyContent="center"
                                borderRadius={4}
                                border={`1px dashed ${colors.blueBrand}`}
                            >
                                <Typography variant="caption" color="blueBrand">
                                    Drag or tap to upload
                                </Typography>
                            </Box>
                        ) : (
                            <Image src={img} layout="fill" />
                        )}
                    </form>
                </div>
                <PhotoCropModal />
            </DropZoneWrapper>
            <ActionWrapper>
                <Button variant="link" size={SizePropsType.auto} onClick={open}>
                    <Typography variant="caption" color="white">
                        Select
                    </Typography>
                </Button>
                {img && (
                    <Button variant="link" size={SizePropsType.auto} onClick={handleDelete}>
                        <TrashCan color="white" />
                    </Button>
                )}
            </ActionWrapper>
        </Box>
    );
};

export default UploadPhoto;
