import { IUserDTO, IUserRegister } from '../interfaces/IUser';

const isRegisterFieldsValid = (user: IUserRegister) => {
  const { username, password, passwordConfirm } = user;
  const isPasswordValid = password.length >= 6;
  const isPasswordConfirmValid = password === passwordConfirm;

  const isUsernameValid = (
    username.length >= 3
    && username.length <= 20
    && username === username.toLowerCase()
  );

  return isPasswordValid && isPasswordConfirmValid && isUsernameValid;
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
