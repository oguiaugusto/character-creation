import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { LoginForm } from '../components';
import { IUserDTO, IUserLoginValidation } from '../interfaces/IUser';
import { BlurHandler } from '../interfaces/types';
import { isLoginFieldsValid } from '../utils/userValidations';
import { redirectIfLoggedIn } from '../utils/redirect';
import { createHandleChange } from '../utils/actionHandlers';
import postUser from '../utils/postUser';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUserDTO>({
    username: '',
    password: '',
  });

  const [userValidations, setUserValidations] = useState<IUserLoginValidation>({
    username: true,
    password: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = createHandleChange(user, setUser);

  const handleBlur: BlurHandler = ({ target: { name } }) => {
    const validations = isLoginFieldsValid(user)[1];
    const isValid = validations[name as keyof IUserLoginValidation];

    setUserValidations({ ...userValidations, [name]: isValid });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, password } = user;
    const data = await postUser({ username, password }, '/users/login');

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
    const [areFieldsValid] = isLoginFieldsValid(user);

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
          width: 450,
          gap: 4,
          mb: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{ alignSelf: 'flex-start', fontSize: 30, marginLeft: 2 }}
        >
          Log in to continue
        </Typography>
        <LoginForm
          handleSubmit={ handleSubmit }
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          userValidations={ userValidations }
          handleShowPassword={ () => setShowPassword(!showPassword) }
          showPassword={ showPassword }
          isButtonDisabled={ isButtonDisabled }
        />
      </Box>
    </Box>
  );
};

export default Login;
