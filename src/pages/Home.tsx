import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { redirectIfNotLoggedIn } from '../utils/redirect';
import { CreateStoryModal, NoStoriesCreateStoryButton } from '../components/home';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  useEffect(() => {
    redirectIfNotLoggedIn(navigate);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CreateStoryModal
        storyModalOpen={ storyModalOpen }
        setStoryModalOpen={ setStoryModalOpen }
      />
      <NoStoriesCreateStoryButton setStoryModalOpen={ setStoryModalOpen } />
      <ToastContainer />
    </Box>
  );
};

export default Home;
