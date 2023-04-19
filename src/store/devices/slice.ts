import { createSlice } from '@reduxjs/toolkit';
import { devicesAdapter } from '@store/devices/adapter';
import { IDevice } from '@store/devices/types';

const initialState = devicesAdapter.getInitialState();

const devicesSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        addDevices: (state, { payload }: { payload: IDevice[] }) => {
            if (payload.length) {
                devicesAdapter.addMany(state, payload);
            }
        },
    },
});

export const { addDevices } = devicesSlice.actions;

export default devicesSlice.reducer;
