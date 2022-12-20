import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import { redirectIfNotLoggedIn } from '../utils/redirect';
import CreateStoryModal from '../components/CreateStoryModal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  useEffect(() => {
    redirectIfNotLoggedIn(navigate);
  }, []);

  return (
    <div>
      <Button onClick={ () => setStoryModalOpen(true) }>Create a new story</Button>
      <CreateStoryModal
        storyModalOpen={ storyModalOpen }
        setStoryModalOpen={ setStoryModalOpen }
      />
      <ToastContainer />
    </div>
  );
};

export default Home;
