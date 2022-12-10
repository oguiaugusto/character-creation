import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IUserRegister, IUserRegisterValidation } from '../interfaces/IUser';
import { isRegisterFieldsValid } from '../utils/userValidations';
import { RegisterForm } from '../components';
import { redirectIfLoggedIn } from '../utils/redirect';
import { createHandleChange, createHandleErrorOnBlur } from '../utils/actionHandlers';
import postUser from '../utils/postUser';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUserRegister>({
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const [userValidations, setUserValidations] = useState<IUserRegisterValidation>({
    username: true,
    password: true,
    passwordConfirm: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = createHandleChange(user, setUser);
  const handleBlur = createHandleErrorOnBlur<IUserRegister, IUserRegisterValidation>(
    userValidations,
    setUserValidations,
    user,
    isRegisterFieldsValid,
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, password } = user;
    const data = await postUser({ username, password }, '/users');

    if (Object.hasOwn(data, 'user') && Object.hasOwn(data, 'token')) {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
    } else {
      console.log('aí a gente vê oq faz...'); // eslint-disable-line
    }
  };

  useEffect(() => {
    redirectIfLoggedIn(navigate);
  }, []);

  useEffect(() => {
    const [areFieldsValid] = isRegisterFieldsValid(user);

    setIsButtonDisabled(!areFieldsValid);
  }, [user]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: grey[50],
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: 500,
          gap: 4,
          mb: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{ alignSelf: 'flex-start', fontSize: 30, marginLeft: 2 }}
        >
          Create a new account
        </Typography>
        <RegisterForm
          handleSubmit={ handleSubmit }
          handleBlur={ handleBlur }
          handleShowPassword={ () => setShowPassword(!showPassword) }
          handleShowPasswordConfirm={ () => setShowPasswordConfirm(!showPasswordConfirm) }
          handleChange={ handleChange }
          showPassword={ showPassword }
          showPasswordConfirm={ showPasswordConfirm }
          userValidations={ userValidations }
          isButtonDisabled={ isButtonDisabled }
        />
      </Box>
    </Box>
  );
};

export default Register;
