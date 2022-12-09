import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { ChangeHandler } from '../interfaces/types';
import InputRightIcon from './InputRightIcon';
import InputPassword from './InputPassword';

type Props = {
  handleSubmit: (e: React.FormEvent) => void;
  handleShowPassword: () => void;
  handleShowPasswordConfirm: () => void;
  handleChange: ChangeHandler;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  isButtonDisabled: boolean;
};

const RegisterForm: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleShowPassword,
    handleShowPasswordConfirm,
    handleChange,
    showPassword,
    showPasswordConfirm,
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
        id="username"
        name="username"
        placeholder="johnsmith"
        label="Username"
        icon={ <PersonIcon /> }
      />
      <InputPassword
        handleChange={ handleChange }
        handleShow={ handleShowPassword }
        showPassword={ showPassword }
        id="password"
        name="password"
        placeholder="*******"
        label="Password"
      />
      <InputPassword
        handleChange={ handleChange }
        handleShow={ handleShowPasswordConfirm }
        showPassword={ showPasswordConfirm }
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
