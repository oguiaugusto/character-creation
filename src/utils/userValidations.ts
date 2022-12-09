import { IUserDTO, IUserRegister, IUserRegisterValidation } from '../interfaces/IUser';

const isRegisterFieldsValid = (user: IUserRegister): [boolean, IUserRegisterValidation] => {
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

const isLoginFieldsValid = (user: IUserDTO) => {
  const { username, password } = user;
  const isPasswordValid = password.length >= 6;

  const isUsernameValid = (
    username.length >= 3
    && username.length <= 20
    && username === username.toLowerCase()
  );

  return isPasswordValid && isUsernameValid;
};

export { isRegisterFieldsValid, isLoginFieldsValid };
