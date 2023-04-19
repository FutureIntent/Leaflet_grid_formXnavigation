import { CenterAlign } from '@components/atoms/CenterAlign';
import Typography from '@components/atoms/Typography';

const Privacy = () => (
    <CenterAlign width="100%" height="3.75rem" backgroundColor="#091036" py="1.2rem">
        <Typography variant="paragraph2" color="var(--blue-brand)" mr="2.5rem">
            Privacy Policy
        </Typography>
        <Typography variant="paragraph2" color="var(--blue-brand)">
            Terms of Use
        </Typography>
    </CenterAlign>
);

export default Privacy;
