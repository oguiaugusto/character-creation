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
import { ChangeHandler } from '../interfaces/types';

type Props = {
  handleChange: ChangeHandler;
  handleShow: () => void;
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
    showPassword,
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
        label={ label }
        type={ showPassword ? 'text' : 'password' }
        onChange={ handleChange }
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
    </FormControl>
  );
};

export default InputPassword;
