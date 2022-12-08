import React, { FormEvent, useEffect, useState } from 'react';
import { IUserRegister } from '../interfaces/IUser';
import { ChangeHandler } from '../interfaces/types';
import { isRegisterFieldsValid } from '../utils/userValidations';
import { RegisterForm } from '../components';
import createNewUser from '../utils/register';

const Register: React.FC = () => {
  const [user, setUser] = useState<IUserRegister>({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange: ChangeHandler = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, password } = user;
    const data = await createNewUser({ username, password });

    console.log(data); // eslint-disable-line
  };

  useEffect(() => {
    setIsButtonDisabled(!isRegisterFieldsValid(user));
  }, [user]);

  return (
    <div>
      <h1>Character Creation</h1>
      <h2>Register</h2>
      <RegisterForm
        handleSubmit={ handleSubmit }
        handleShowPassword={ () => setShowPassword(!showPassword) }
        handleShowPasswordConfirm={ () => setShowPasswordConfirm(!showPasswordConfirm) }
        handleChange={ handleChange }
        showPassword={ showPassword }
        showPasswordConfirm={ showPasswordConfirm }
        isButtonDisabled={ isButtonDisabled }
      />
    </div>
  );
};

export default Register;
