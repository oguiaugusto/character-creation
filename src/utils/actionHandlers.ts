import { Dispatch, SetStateAction } from 'react';
import { ChangeHandler } from '../interfaces/types';

type SetState<T> = Dispatch<SetStateAction<T>>;

const createHandleChange = <T>(state: T, setState: SetState<T>): ChangeHandler => (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};

export { createHandleChange };
