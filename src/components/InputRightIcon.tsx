import React from 'react';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { ChangeHandler } from '../interfaces/types';

type Props = {
  handleChange: ChangeHandler;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  icon: React.ReactNode;
};

const InputRightIcon: React.FC<Props> = (props) => {
  const { handleChange, id, name, placeholder, label, icon } = props;

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor={ id }>{ label }</InputLabel>
      <OutlinedInput
        id={ id }
        name={ name }
        placeholder={ placeholder }
        onChange={ handleChange }
        label={ label }
        endAdornment={ (
          <InputAdornment position="start">
            { icon }
          </InputAdornment>
        ) }
      />
    </FormControl>
  );
};

export default InputRightIcon;
