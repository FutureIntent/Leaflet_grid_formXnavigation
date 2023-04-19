import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@utils/helpers';
import Image from 'next/image';



import Box from '@components/atoms/Box';


const ImageRender = ({ node }: { node: SanityImageSource }) => (
    <Box position="relative" aspectRatio={1.5}>
        {node && (
            <Image
                layout="fill"
                objectFit="cover"
                src={urlFor(node).url()}
                alt="poster"
                quality={100}
            />
        )}
    </Box>
);

export default ImageRender;