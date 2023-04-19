import GridChild from '@components/templates/GridChild';

import Address from '@components/molecules/Icons/Address';
import Mail from '@components/molecules/Icons/Mail';
import Phone from '@components/molecules/Icons/Phone';

import { CenterAlign } from '@components/atoms/CenterAlign';
import Typography from '@components/atoms/Typography';

const Contacts = () => (
    <>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            <CenterAlign axis="y" mb="1.25rem">
                <Address size="large" color="var(--blue-brand)" />
                <a
                    href="https://maps.google.com/?q=Lybecksgatan 37, S-252 69. Råå, Sweden"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Typography color="var(--white)" variant="paragraph2" ml="1.25rem">
                        Lybecksgatan 37, S-252 69. Råå, Sweden
                    </Typography>
                </a>
            </CenterAlign>
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            <CenterAlign axis="y" mb="1.25rem">
                <Mail size="large" color="var(--blue-brand)" />
                <a href="mailto:info@cryocenter.se">
                    <Typography color="var(--white)" variant="paragraph2" ml="1.25rem">
                        info@cryocenter.se
                    </Typography>
                </a>
            </CenterAlign>
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            <CenterAlign axis="y">
                <Phone size="large" color="var(--blue-brand)" />
                <a href="tel:+46(0)703-163730">
                    <Typography color="var(--white)" variant="paragraph2" ml="1.25rem">
                        +46(0)703-163730
                    </Typography>
                </a>
            </CenterAlign>
        </GridChild>
    </>
);

export default Contacts;
