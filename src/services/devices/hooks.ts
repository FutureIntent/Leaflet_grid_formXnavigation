import { useAppDispatch } from '@hooks';
import { getAllDevices } from '@services/devices/requests';
import { addDevices } from '@store/devices/slice';
import { IDevice } from '@store/devices/types';
import { useQuery, UseQueryResult } from 'react-query';

export const useAllGetDevices = (): UseQueryResult<IDevice[], string[]> => {
    const dispatch = useAppDispatch();

    return useQuery('devices/getAll', async () => {
        const devices = await getAllDevices();

        dispatch(addDevices(devices));
    });
};
