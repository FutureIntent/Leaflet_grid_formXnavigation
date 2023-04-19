import { ReactNode, ReactElement, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

type QueryProviderProps = {
    children: ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps): ReactElement => {
    const queryClientRef = useRef<QueryClient>();

    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                },
            },
        });
    }

    return (
        <QueryClientProvider client={queryClientRef.current}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default QueryProvider;
