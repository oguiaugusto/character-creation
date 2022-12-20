import {
  IUserDTO,
  IUserLoginValidation,
  IUserRegister,
  IUserRegisterValidation,
} from '../interfaces/IUser';
import { FieldsValidation } from '../interfaces/types';

type RegisterFieldsValidation = FieldsValidation<IUserRegister, IUserRegisterValidation>;
type LoginFieldsValidation = FieldsValidation<IUserDTO, IUserLoginValidation>;

const isRegisterFieldsValid: RegisterFieldsValidation = (user) => {
  const { username, password, passwordConfirm } = user;
  const isPasswordValid = password.length >= 6;
  const isPasswordConfirmValid = password === passwordConfirm;

  const isUsernameValid = (
    username.length >= 3
    && username.length <= 20
    && username === username.toLowerCase()
  );

  const validations = {
    username: isUsernameValid,
    password: isPasswordValid,
    passwordConfirm: isPasswordConfirmValid,
  };

  return [Object.values(validations).every(Boolean), validations];
};

const isLoginFieldsValid: LoginFieldsValidation = (user) => {
  const { username, password } = user;
  const isPasswordValid = password.length >= 6;

  const isUsernameValid = (
    username.length >= 3
    && username.length <= 20
    && username === username.toLowerCase()
  );

  const validations = {
    username: isUsernameValid,
    password: isPasswordValid,
  };

  return [Object.values(validations).every(Boolean), validations];
};

export { isRegisterFieldsValid, isLoginFieldsValid };
