import DeleteAccount from '@components/routes/Profile/Account/DeleteAccount';
import Email from '@components/routes/Profile/Account/Email';
// import GoogleAccount from '@components/routes/Profile/Account/GoogleAccount';
import Location from '@components/routes/Profile/Account/Location';
import Password from '@components/routes/Profile/Account/Password';
import PersonalInfo from '@components/routes/Profile/Account/PersonalInfo';
import PhoneNumber from '@components/routes/Profile/Account/PhoneNumber';
import styled from 'styled-components';

const Wrapper = styled.div`
    --dd-bg: var(--grey-lt);
`;

const Account = () => (
    <Wrapper>
        <PersonalInfo />
        <PhoneNumber />
        <Email />
        <Password />
        {/* <GoogleAccount /> */}
        <Location />
        <DeleteAccount />
    </Wrapper>
);

export default Account;
