import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { Popover, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  text: React.ReactNode;
};

const HoverInfoPopover: React.FC<Props> = ({ text }) => {
  const [anchorPopOver, setAnchorPopOver] = useState<HTMLElement | null>(null);
  const openInfoPopover = Boolean(anchorPopOver);

  const handlePopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorPopOver(e.currentTarget);
  };
  const handlePopoverClose = () => { setAnchorPopOver(null); };

  return (
    <>
      <Typography
        component="span"
        onMouseEnter={ handlePopoverOpen }
        onMouseLeave={ handlePopoverClose }
      >
        <HelpIcon sx={{ fontSize: 12, color: grey[500] }} />
      </Typography>
      <Popover
        sx={{ pointerEvents: 'none' }}
        open={ openInfoPopover }
        anchorEl={ anchorPopOver }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={ handlePopoverClose }
        disableRestoreFocus
      >
        <Typography
          sx={{
            p: 1,
            width: 230,
            fontSize: 12,
            bgcolor: grey[100],
          }}
        >
          { text }
        </Typography>
      </Popover>
    </>
  );
};

export default HoverInfoPopover;
