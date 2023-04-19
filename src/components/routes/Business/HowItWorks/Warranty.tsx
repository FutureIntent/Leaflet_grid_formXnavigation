import Block from '@components/routes/Business/HowItWorks/shared/Block';
import IconCard from '@components/routes/Business/HowItWorks/shared/IconCard';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Typography from '@components/atoms/Typography';

import Manual from '@components/molecules/Icons/Manual';
import Service from '@components/molecules/Icons/Service';
import Support from '@components/molecules/Icons/Support';
import Tutorial from '@components/molecules/Icons/Tutorial';

const Warranty = () => (
    <Block id="warranty">
        <Typography variant="h2" color="var(--black-brand)" mb={24} transformText="uppercase">
            Warranty
        </Typography>
        <Box mb={43}>
            <Card>
                <Box p="40px 30px 70px" width="100%">
                    <Typography
                        variant="accent"
                        as="p"
                        color="var(--blue-brand)"
                        transformText="uppercase"
                        mb={23}
                    >
                        We Guarantee
                    </Typography>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(auto-fit, minMax(200px, 1fr))"
                        gridGap={20}
                    >
                        <IconCard
                            icon={<Manual size="large2" color="var(--blue-brand)" />}
                            label="Manual & Documentations"
                        />
                        <IconCard
                            icon={<Tutorial size="large2" color="var(--blue-brand)" />}
                            label="Tutorial and instructions"
                        />
                        <IconCard
                            icon={<Service size="large2" color="var(--blue-brand)" />}
                            label="Service works and repairs"
                        />
                        <IconCard
                            icon={<Support size="large2" color="var(--blue-brand)" />}
                            label="24/7 online support"
                        />
                    </Box>
                </Box>
            </Card>
        </Box>
        <Typography variant="h3" color="var(--black-brand)" mb={9}>
            Cryo support
        </Typography>
        <Typography variant="paragraph" color="var(--black-brand)">
            Going to the next world doesn’t fear career anymore than emerging creates eternal
            purpose. When the explosion of the milk of booda-hood visualizes the densities of the
            lord, the fear will know lover. The blessing of your minerals will disappear
            extraordinarilly when you need that milk is the master. The conclusion of studying
            things is occult.
        </Typography>
    </Block>
);

export default Warranty;
