import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { BlurHandler, ChangeHandler } from '../interfaces/types';
import { IUserRegisterValidation } from '../interfaces/IUser';
import InputRightIcon from './InputRightIcon';
import InputPassword from './InputPassword';

type Props = {
  handleSubmit: (e: React.FormEvent) => void;
  handleShowPassword: () => void;
  handleShowPasswordConfirm: () => void;
  handleChange: ChangeHandler;
  handleBlur: BlurHandler;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  userValidations: IUserRegisterValidation;
  isButtonDisabled: boolean;
};

const RegisterForm: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleShowPassword,
    handleShowPasswordConfirm,
    handleChange,
    handleBlur,
    showPassword,
    showPasswordConfirm,
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
      <InputPassword
        handleChange={ handleChange }
        handleShow={ handleShowPasswordConfirm }
        handleBlur={ handleBlur }
        showPassword={ showPasswordConfirm }
        isValid={ userValidations.passwordConfirm }
        helperText="Passwords must match"
        id="password-confirm"
        name="passwordConfirm"
        placeholder="*******"
        label="Confirm Password"
      />
      <Button
        variant="contained"
        type="submit"
        disabled={ isButtonDisabled }
        sx={{ marginTop: 1, py: 1 }}
      >
        Register
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
        { 'Already registered? ' }
        <Link to="/login">Login</Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
