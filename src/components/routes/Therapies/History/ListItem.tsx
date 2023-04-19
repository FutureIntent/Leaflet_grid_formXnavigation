import Image from 'next/image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import LabeledField from '@components/atoms/LabeledField';
import Tag from '@components/atoms/Tag';
import Typography from '@components/atoms/Typography';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const ItemWrapper = styled.div`
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 8px;
    grid-template-areas: 'poster info .' 'date price .' 'tags tags .';
    grid-template-columns: minmax(45px, 1fr) 4fr 20px;

    ${mediaQueries.tablet} {
        grid-template-areas: 'poster info date price .' 'tags tags tags tags .';
        grid-template-columns: minmax(85px, 1fr) 3fr 2fr 1fr 20px;
    }

    ${mediaQueries.desktop} {
        grid-template-areas: 'poster info date tags price';
        grid-template-columns: minmax(45px, 1fr) 2fr 1fr 2fr auto;
    }
`;

const StyledImage = styled.div`
    aspect-ratio: 1;
    border-radius: ${({ theme }) => theme.space['2xs']};
    grid-area: poster;
    overflow: hidden;
    position: relative;

    ${mediaQueries.tablet} {
        aspect-ratio: 16 / 9;
    }
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: info;
    justify-content: center;
`;

const StyledDate = styled.div`
    align-items: center;
    display: flex;
    grid-area: date;
    grid-row: 2;

    ${mediaQueries.tablet} {
        grid-row: 1;
    }
`;

const StyledTags = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    grid-area: tags;
    grid-row: 3;
    row-gap: 8px;

    ${mediaQueries.tablet} {
        grid-row: 2;
    }

    ${mediaQueries.desktop} {
        grid-row: 1;
    }
`;

const StyledPrice = styled.div`
    align-items: center;
    display: flex;
    grid-area: price;
    grid-row: 2;

    ${mediaQueries.tablet} {
        grid-row: 1;
    }
`;

const ListItem = ({ img, heading, tags, place, address, price, dateTime }: TherapyCardProps) => (
    <ItemWrapper>
        <StyledImage>
            <Image src={img} layout="fill" objectFit="cover" />
        </StyledImage>
        <StyledInfo>
            <Box display="flex" alignItems="center">
                <Typography variant="accent" color="var(--black-brand)" mr={10}>
                    {heading}
                </Typography>
                <Tag backgroundColor="var(--grey-lt)" variant="caption" color="var(--black-brand)">
                    {place}
                </Tag>
            </Box>
            <Typography variant="caption" color="var(--black-brand)">
                {address}
            </Typography>
        </StyledInfo>
        <StyledDate>
            {dateTime && (
                <Box ml="10px">
                    <LabeledField
                        label={dateTime.toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                        value={dateTime.toLocaleDateString('en-GB', {
                            weekday: 'long',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    />
                </Box>
            )}
        </StyledDate>
        {Boolean(tags?.length) && (
            <StyledTags>
                {tags?.map((tag) => (
                    <Tag key={tag} variant="caption" color="var(--blue-brand)">
                        {tag}
                    </Tag>
                ))}
            </StyledTags>
        )}
        <StyledPrice>
            <Typography variant="accent" color="var(--blue-brand)">
                {price}
            </Typography>
        </StyledPrice>
    </ItemWrapper>
);

export default ListItem;
