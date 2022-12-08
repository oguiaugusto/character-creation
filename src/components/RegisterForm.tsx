import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button } from '@mui/material';
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
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
