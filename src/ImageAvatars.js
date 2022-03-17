import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarImage from './images/pic.jpg';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="AD"
        src={AvatarImage}
        sx={{ paddingTop:"0.5%", width: 56, height: 56 }}
      />
    </Stack>
  );
}