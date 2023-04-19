import { wrapper } from '@store';
import InitializeAuth from '@utils/InitializeAuth';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { Context as ResponsiveContext } from 'react-responsive';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import ModalProvider from '@providers/ModalProvider';
import QueryProvider from '@providers/QueryProvider';

import theme from '@theme/configs';

import Layout from '../src/components/templates/Layout';
import GlobalStyle from '../theme/GlobalStyles';

const CryoApp = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const defScreenSize = useMemo(() => ({ width: 1200 }), []);

    return (
        <QueryProvider>
            <Provider store={store}>
                <PersistGate
                    persistor={
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line no-underscore-dangle
                        store._persistor
                    }
                >
                    <ResponsiveContext.Provider value={defScreenSize}>
                        <ThemeProvider theme={theme}>
                            <ModalProvider>
                                <InitializeAuth />
                                <GlobalStyle />
                                <Layout>
                                    <Component {...props.pageProps} />
                                </Layout>
                            </ModalProvider>
                        </ThemeProvider>
                    </ResponsiveContext.Provider>
                </PersistGate>
            </Provider>
        </QueryProvider>
    );
};

export default appWithTranslation(CryoApp);
