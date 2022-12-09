import { ChangeEvent, FocusEvent } from 'react';

export type ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;
export type BlurHandler = (e: FocusEvent<HTMLInputElement>) => void;
