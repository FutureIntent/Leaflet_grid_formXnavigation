import { createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '@store';

export const cartAdapter = createEntityAdapter<any>({
    selectId: (cartItem) => cartItem.id,
});

export const cartSelectors = cartAdapter.getSelectors<RootState>((state) => state.cart);
