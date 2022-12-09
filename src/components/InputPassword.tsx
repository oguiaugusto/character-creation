import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@mui/material';
import { BlurHandler, ChangeHandler } from '../interfaces/types';
import FormErrorHelperText from './FormErrorHelperText';

type Props = {
  handleChange: ChangeHandler;
  handleShow: () => void;
  handleBlur: BlurHandler;
  isValid: boolean;
  helperText: string;
  showPassword: boolean;
  id: string;
  name: string;
  placeholder: string;
  label: string;
};

const InputPassword: React.FC<Props> = (props) => {
  const {
    handleChange,
    handleShow,
    handleBlur,
    showPassword,
    id,
    name,
    placeholder,
    label,
    isValid,
    helperText,
  } = props;

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor={ id }>{ label }</InputLabel>
      <OutlinedInput
        id={ id }
        name={ name }
        placeholder={ placeholder }
        label={ label }
        type={ showPassword ? 'text' : 'password' }
        onChange={ handleChange }
        onBlur={ handleBlur }
        error={ !isValid }
        endAdornment={ (
          <InputAdornment position="end">
            <IconButton onClick={ handleShow }>
              {
                showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
            </IconButton>
          </InputAdornment>
        ) }
      />
      {
        !isValid && <FormErrorHelperText helperText={ helperText } />
      }
    </FormControl>
  );
};

export default InputPassword;
