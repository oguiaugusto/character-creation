import React from 'react';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { BlurHandler, ChangeHandler } from '../interfaces/types';
import FormErrorHelperText from './FormErrorHelperText';

type Props = {
  handleChange: ChangeHandler;
  handleBlur: BlurHandler;
  isValid: boolean;
  helperText: string;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  icon: React.ReactNode;
};

const InputRightIcon: React.FC<Props> = (props) => {
  const {
    handleChange,
    handleBlur,
    id,
    name,
    placeholder,
    label,
    icon,
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
        onChange={ handleChange }
        onBlur={ handleBlur }
        label={ label }
        error={ !isValid }
        endAdornment={ (
          <InputAdornment position="start">
            { icon }
          </InputAdornment>
        ) }
      />
      {
        !isValid && <FormErrorHelperText helperText={ helperText } />
      }
    </FormControl>
  );
};

export default InputRightIcon;
