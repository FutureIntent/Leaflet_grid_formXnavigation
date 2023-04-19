import type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch,
};

export interface Category extends SanityDocument {
    _type: 'category';
    title: string;
    description?: string;
}

export interface Post extends SanityDocument {
    _type: 'post';
    title: string;
    postPreview?: string;
    slug?: { _type: 'slug'; current: string };
    mainImage?: {
        _type: 'image';
        asset: SanityImageAsset;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
    };
    category?: Category;
    publishedAt?: string;
    body?: BlockContent;
}

export type BlockContent = Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
          _type: 'image';
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
      }>
>;

export type Documents = Post | Category;
