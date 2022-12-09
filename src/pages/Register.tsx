import React, { FormEvent, useEffect, useState } from 'react';
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IUserRegister } from '../interfaces/IUser';
import { ChangeHandler } from '../interfaces/types';
import { isRegisterFieldsValid } from '../utils/userValidations';
import { RegisterForm } from '../components';
import createNewUser from '../utils/register';
import '@fontsource/rubik';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a152',
    },
    secondary: {
      main: '#2c387e',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

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
    <ThemeProvider theme={ theme }>
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
            handleShowPassword={ () => setShowPassword(!showPassword) }
            handleShowPasswordConfirm={ () => setShowPasswordConfirm(!showPasswordConfirm) }
            handleChange={ handleChange }
            showPassword={ showPassword }
            showPasswordConfirm={ showPasswordConfirm }
            isButtonDisabled={ isButtonDisabled }
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Register;
