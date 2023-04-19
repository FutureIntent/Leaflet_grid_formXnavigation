import { useSetAvatar } from '@services/user/hooks';
import { useLayoutEffect, useRef, useState } from 'react';
import ReactCrop, { centerCrop, Crop, defaultCrop, makeAspectCrop } from 'react-image-crop';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';

const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) =>
    centerCrop(
        makeAspectCrop(
            {
                unit: 'px',
                width: 400,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    );

const getCroppedImage = (sourceImage: HTMLImageElement, cropConfig: Crop) => {
    // creating the cropped image from the source image
    const canvas = document.createElement('canvas');
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = cropConfig.width;
    canvas.height = cropConfig.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) return null;

    const pixelRatio = window.devicePixelRatio;
    canvas.width = cropConfig.width * pixelRatio;
    canvas.height = cropConfig.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
        sourceImage,
        cropConfig.x * scaleX,
        cropConfig.y * scaleY,
        cropConfig.width * scaleX,
        cropConfig.height * scaleY,
        0,
        0,
        cropConfig.width,
        cropConfig.height,
    );

    const dataUrl = canvas.toDataURL('image/jpeg');
    const bytes =
        dataUrl.split(',')[0].indexOf('base64') >= 0
            ? atob(dataUrl.split(',')[1])
            : window.unescape(dataUrl.split(',')[1]);
    const mime = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);
    for (let i = 0; i < max; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new File([ia], 'avatar.jpg', { type: mime });
};

interface ICropEditor {
    onClose: () => void;
    img: string;
}

const CropEditor = ({ onClose, img }: ICropEditor) => {
    const { mutate } = useSetAvatar();
    const [imageSrc, setImgSrc] = useState<string>(img);
    const [crop, setCrop] = useState<Crop>({ ...defaultCrop, height: 400, width: 400 });
    const imgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        setImgSrc(img);
    }, [img]);

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const cropWidth = width < 400 ? width : 400;
        const cropHeight = height < 400 ? height : 400;

        setCrop(centerAspectCrop(cropWidth, cropHeight, 1));
    };

    const handleSubmit = async (): Promise<void> => {
        if (!imgRef.current || !crop) return;

        const imgBlob = await getCroppedImage(imgRef.current, crop);

        if (!imgBlob) return;

        const formData = new FormData();
        formData.append('file', imgBlob);

        mutate(formData, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <Box height="100%">
            <ReactCrop
                crop={crop}
                aspect={1}
                maxWidth={400}
                maxHeight={400}
                minWidth={200}
                minHeight={200}
                onChange={setCrop}
            >
                <img ref={imgRef} alt="Crop preview" src={imageSrc} onLoad={onImageLoad} />
            </ReactCrop>

            <Box display="flex" justifyContent="flex-end" gridGap="1rem" mt="2rem">
                <Button onClick={handleSubmit} size={SizePropsType.xs} variant="primary">
                    Upload
                </Button>
                <Button onClick={onClose} size={SizePropsType.xs} variant="secondary">
                    Cancel
                </Button>
            </Box>
        </Box>
    );
};

export default CropEditor;
