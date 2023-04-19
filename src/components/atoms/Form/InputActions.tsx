import colors from '@theme/configs/colors';

import Checkmark from '@components/molecules/Icons/Checkmark';
import CloseBtn from '@components/molecules/Icons/CloseBtn';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';

const InputActions = ({ onCancel, disabled }: { onCancel: () => void; disabled: boolean }) => (
    <Box position="absolute" top={0} right={0} height="100%">
        <Box display="flex" width={{ _: 80, tablet: 90 }} height="100%">
            <Button
                size={SizePropsType.auto}
                type="submit"
                disabled={disabled}
                p={7}
                flex={1}
                borderRadius={0}
            >
                <Checkmark size="small2" />
            </Button>
            <Button
                borderRadius={0}
                border={0}
                size={SizePropsType.auto}
                variant="night"
                onClick={onCancel}
                p={7}
                flex={1}
            >
                <CloseBtn color={colors.greyDark} size="small2" />
            </Button>
        </Box>
    </Box>
);

export default InputActions;
