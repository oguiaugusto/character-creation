import React from 'react';
import { Box, Button } from '@mui/material';
import { Input, PictureInput } from '../inputs';
import { BlurHandler, ChangeHandler } from '../../interfaces/types';
import { IStoryDTO, IStoryValidation } from '../../interfaces/IStory';

type Props = {
  handleChange: ChangeHandler;
  handleBlur: BlurHandler;
  story: IStoryDTO;
  storyValidations: IStoryValidation;
  isButtonDisabled: boolean;
};

const CreateStoryForm: React.FC<Props> = (props) => {
  const {
    handleChange,
    handleBlur,
    story,
    storyValidations,
    isButtonDisabled,
  } = props;

  return (
    <Box
      component="form"
      onSubmit={ (e) => { e.preventDefault(); } }
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: storyValidations.picture ? 0.8 : 2.2 }}
    >
      <PictureInput
        handleChange={ handleChange }
        handleBlur={ handleBlur }
        story={ story }
        isValid={ storyValidations.picture }
      />
      <Input
        id="title"
        name="title"
        label="Title"
        placeholder="Brave New World"
        helperText="Title must be between 3 and 100 characters long."
        handleChange={ handleChange }
        handleBlur={ handleBlur }
        isValid={ storyValidations.title }
      />
      <Input
        id="description"
        name="description"
        label="Description (optional)"
        placeholder="A dystopian novel by Aldous Huxley"
        helperText="Description must be between 3 and 510 characters long."
        handleChange={ handleChange }
        handleBlur={ handleBlur }
        isValid={ storyValidations.description }
        textarea
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ my: 1 }}
        disabled={ isButtonDisabled }
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateStoryForm;
