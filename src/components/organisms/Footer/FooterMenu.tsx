import { useTranslation } from 'next-i18next';

const FooterMenu = () => {
    const { t } = useTranslation();
    const menuItems = [
        { name: t('Become a partner'), link: '' },
        { name: t('Cryo˚Coin'), link: '' },
        { name: t('Blogs'), link: '' },
        { name: t('Cryo˚Devices'), link: '' },
        { name: t('for Business'), link: '' },
    ];

    return (
        <div>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterMenu;
