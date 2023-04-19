import { AppStore } from '@store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = (): AppStore['dispatch'] => useDispatch();
