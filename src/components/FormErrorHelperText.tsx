import React from 'react';
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { FormHelperText } from '@mui/material';

type Props = {
  helperText: string;
};

const FormErrorHelperText: React.FC<Props> = ({ helperText }) => {
  return (
    <FormHelperText
      error
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        '& svg': { fontSize: '15px', marginBottom: 0.2 },
      }}
    >
      <ErrorIcon fontSize="inherit" />
      { helperText }
    </FormHelperText>
  );
};

export default FormErrorHelperText;
