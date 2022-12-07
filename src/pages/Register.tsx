import React, { FormEvent, useEffect, useState } from 'react';
import { IUserRegister } from '../interfaces/IUser';
import { ChangeHandler } from '../interfaces/types';
import { isRegisterFieldsValid } from '../utils/userValidations';
import createNewUser from '../utils/register';

const Register: React.FC = () => {
  const [user, setUser] = useState<IUserRegister>({
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="username"
          onChange={ handleChange }
          placeholder="e.g. johnsmith"
        />
        <input
          type="password"
          name="password"
          onChange={ handleChange }
          placeholder="*******"
        />
        <input
          type="password"
          name="passwordConfirm"
          onChange={ handleChange }
          placeholder="*******"
        />
        <button
          type="submit"
          disabled={ isButtonDisabled }
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
