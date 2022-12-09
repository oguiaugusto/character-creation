export interface IUserDTO {
  username: string;
  password: string;
}

export interface IUserRegister extends IUserDTO {
  passwordConfirm: string;
}

export interface IUserPublic {
  id: string;
  username: string;
}

export interface IUserLogged {
  user: IUserPublic;
  token: string;
}

export interface IUserLoginValidation {
  username: boolean;
  password: boolean;
}

export interface IUserRegisterValidation extends IUserLoginValidation {
  passwordConfirm: boolean;
}
