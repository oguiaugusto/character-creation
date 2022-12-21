import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Avatar, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IStoryDTO } from '../../interfaces/IStory';
import { BlurHandler, ChangeHandler } from '../../interfaces/types';
import HoverInfoPopover from '../HoverInfoPopover';
import Input from './Input';

type Props = {
  handleChange: ChangeHandler;
  handleBlur: BlurHandler;
  story: IStoryDTO;
  isValid: boolean;
};

const PictureInput: React.FC<Props> = (props) => {
  const { story, handleChange, handleBlur, isValid } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 2,
        mb: 1,
      }}
    >
      <Avatar
        alt="new story picture"
        sx={{ bgcolor: (theme) => theme.palette.primary[700], width: 72, height: 72 }}
        src={ story.picture }
      >
        <MenuBookIcon sx={{ fontSize: 48 }} />
      </Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Input
          id="picture"
          name="picture"
          label="Picture (optional)"
          placeholder="https://example.com/image.png"
          handleChange={ handleChange }
          handleBlur={ handleBlur }
          isValid={ isValid }
          helperText="Picture must be a valid URL."
        />
        <Typography
          variant="body2"
          sx={{
            fontSize: 12,
            color: grey[600],
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mb: -0.7,
            mt: -0.3,

            '& a': {
              color: grey[900],
              textDecoration: 'none',
              '&:hover': { fontWeight: 'bold' },
            },
          }}
        >
          { 'We recommend uploading using this website: ' }
          <a href="https://imgtr.ee/" target="_blank" rel="noreferrer">imgtr.ee</a>
          <HoverInfoPopover
            text="After uploading, copy the &quot;Image URL&quot; field link and paste it here."
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default PictureInput;
