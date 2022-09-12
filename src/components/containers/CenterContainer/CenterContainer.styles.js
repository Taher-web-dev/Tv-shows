import { Box, styled } from '@mui/material';

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'height',
})(({ height }) => ({
  width: '100%',
  height: height || '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default Container;
