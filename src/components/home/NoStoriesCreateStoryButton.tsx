import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  setStoryModalOpen: (open: boolean) => void;
};

const NoStoriesCreateStoryButton: React.FC<Props> = ({ setStoryModalOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" component="h2" sx={{ fontSize: 24, color: grey[900], mb: 1 }}>
        You don&apos;t have any stories yet :(
      </Typography>
      <Typography variant="h3" component="h3" sx={{ fontSize: 16, color: grey[800] }}>
        Click the button below to create your first story!
      </Typography>
      <IconButton size="large" onClick={ () => setStoryModalOpen(true) }>
        <AddCircleOutlineIcon
          sx={{
            fontSize: 72,
            color: grey[700],
            '&:hover': { color: (theme) => theme.palette.primary[700] },
            '&:active': { color: (theme) => theme.palette.primary[800] },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default NoStoriesCreateStoryButton;
