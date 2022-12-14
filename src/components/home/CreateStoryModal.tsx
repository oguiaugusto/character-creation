import React, { FormEvent, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { grey } from '@mui/material/colors';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import { createHandleChange, createHandleErrorOnBlur } from '../../utils/actionHandlers';
import { IStoryDTO, IStoryPOST, IStoryValidation } from '../../interfaces/IStory';
import { IUserLogged } from '../../interfaces/IUser';
import { validateStoryFields } from '../../utils/storyValidations';
import { CreateStoryForm } from '../forms';
import postStory from '../../utils/postStory';

type Props = {
  storyModalOpen: boolean;
  setStoryModalOpen: (open: boolean) => void;
};

const DEFAULT_STORY: IStoryDTO = { title: '', description: '', picture: '' };
const DEFAULT_STORY_VALIDATIONS: IStoryValidation = {
  title: true,
  description: true,
  picture: true,
};

const CreateStoryModal: React.FC<Props> = (props) => {
  const { storyModalOpen, setStoryModalOpen } = props;

  const [story, setStory] = useState<IStoryDTO>(DEFAULT_STORY);
  const [storyValidations, setStoryValidations] = useState<IStoryValidation>(
    DEFAULT_STORY_VALIDATIONS,
  );

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleChange = createHandleChange(story, setStory);
  const handleBlur = createHandleErrorOnBlur<IStoryDTO, IStoryValidation>(
    storyValidations,
    setStoryValidations,
    story,
    validateStoryFields,
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const storyData: IStoryPOST = { title: story.title };
    if (story.description !== '') storyData.description = story.description;
    if (story.picture !== '') storyData.picture = story.picture;

    const user = JSON.parse(localStorage.getItem('user') || '{}') as IUserLogged;
    const data = await postStory(storyData, user.token);

    if ('title' in data) {
      setIsButtonDisabled(true);
      toast.success('Story created successfully!', { pauseOnHover: false });

      setTimeout(() => {
        setStoryModalOpen(false);
      }, 1000);
    } else if ('message' in data) {
      toast.error(data.message, { pauseOnHover: false });
    }
  };

  useEffect(() => {
    const [areFieldsValid] = validateStoryFields(story);

    setIsButtonDisabled(!areFieldsValid);
  }, [story]);

  useEffect(() => {
    if (!storyModalOpen) {
      setStory(DEFAULT_STORY);
      setStoryValidations(DEFAULT_STORY_VALIDATIONS);
    }
  }, [storyModalOpen]);

  return (
    <Modal open={ storyModalOpen } onClose={ () => setStoryModalOpen(false) }>
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: grey[50],
          border: 1,
          borderColor: grey[400],
          boxShadow: 16,
          width: 580,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
          px: 4,
        }}
      >
        <IconButton
          sx={{ position: 'absolute', top: 1, right: 2 }}
          onClick={ () => setStoryModalOpen(false) }
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontSize: 24, mb: 0.2 }}>Create a new story</Typography>
        <Divider variant="middle" sx={{ bgcolor: grey[300], width: '30%' }} />
        <CreateStoryForm
          story={ story }
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          handleSubmit={ handleSubmit }
          storyValidations={ storyValidations }
          isButtonDisabled={ isButtonDisabled }
        />
      </Box>
    </Modal>
  );
};

export default CreateStoryModal;
