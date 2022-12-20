import { Dispatch, SetStateAction } from 'react';
import { ChangeHandler, FieldsValidation } from '../interfaces/types';

type SetState<T> = Dispatch<SetStateAction<T>>;

const createHandleChange = <T>(state: T, setState: SetState<T>): ChangeHandler => (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};

// F stands for fields, V stands for validations
const createHandleErrorOnBlur = <F, V>(
  validationState: V,
  validationSetState: SetState<V>,
  fieldsToValidate: F,
  validateFields: FieldsValidation<F, V>,
): ChangeHandler => (e) => {
    const validations = validateFields(fieldsToValidate);
    const isValid = validations[1][e.target.name as keyof V];

    validationSetState({ ...validationState, [e.target.name]: isValid });
  };

export { createHandleChange, createHandleErrorOnBlur };
