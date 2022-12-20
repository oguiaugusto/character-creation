import React from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { BlurHandler, ChangeHandler } from '../../interfaces/types';
import FormErrorHelperText from '../FormErrorHelperText';

type Props = {
  handleChange: ChangeHandler;
  handleBlur?: BlurHandler;
  isValid?: boolean;
  helperText?: string;
  textarea?: boolean;
  id: string;
  name: string;
  placeholder: string;
  label: string;
};

const Input: React.FC<Props> = (props) => {
  const {
    handleChange,
    handleBlur = (() => {}) as BlurHandler,
    isValid = true,
    helperText = '',
    textarea = false,
    id,
    name,
    placeholder,
    label,
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
        multiline={ textarea }
        maxRows={ textarea ? 4 : 1 }
      />
      {
        !isValid && <FormErrorHelperText helperText={ helperText } />
      }
    </FormControl>
  );
};

Input.defaultProps = {
  handleBlur: () => {},
  isValid: true,
  helperText: '',
  textarea: false,
};

export default Input;
