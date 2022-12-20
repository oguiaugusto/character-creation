import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { BlurHandler, ChangeHandler } from '../interfaces/types';
import { IUserLoginValidation } from '../interfaces/IUser';
import InputRightIcon from './inputs/InputRightIcon';
import InputPassword from './inputs/InputPassword';

type Props = {
  handleSubmit: (e: React.FormEvent) => void;
  handleShowPassword: () => void;
  handleChange: ChangeHandler;
  handleBlur: BlurHandler;
  showPassword: boolean;
  userValidations: IUserLoginValidation;
  isButtonDisabled: boolean;
};

const LoginForm: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleShowPassword,
    handleChange,
    handleBlur,
    showPassword,
    userValidations,
    isButtonDisabled,
  } = props;

  return (
    <Box
      component="form"
      onSubmit={ handleSubmit }
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        px: 2,
        gap: 2,
      }}
    >
      <InputRightIcon
        handleChange={ handleChange }
        handleBlur={ handleBlur }
        isValid={ userValidations.username }
        helperText="Username must be between 3 and 20 characters long"
        id="username"
        name="username"
        placeholder="johnsmith"
        label="Username"
        icon={ <PersonIcon /> }
      />
      <InputPassword
        handleChange={ handleChange }
        handleShow={ handleShowPassword }
        handleBlur={ handleBlur }
        showPassword={ showPassword }
        isValid={ userValidations.password }
        helperText="Password must be at least 6 characters long"
        id="password"
        name="password"
        placeholder="*******"
        label="Password"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: 2, py: 1 }}
        disabled={ isButtonDisabled }
      >
        Login
      </Button>
      <Typography
        variant="body2"
        sx={{
          alignSelf: 'center',
          '& a': {
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 600,
            '&:hover': { filter: 'brightness(0.8)' },
            '&:active': { filter: 'brightness(0.6)' },
          },
        }}
      >
        { 'Don\'t have an account? ' }
        <Link to="/register">Register</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
