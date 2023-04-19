import { createEntityAdapter, Draft } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { IDevice } from '@store/devices/types';

export const devicesAdapter = createEntityAdapter<Draft<IDevice>>({
    selectId: (device) => device.uuid,
});

export const deviceSelectors = devicesAdapter.getSelectors<RootState>((state) => state.devices);
