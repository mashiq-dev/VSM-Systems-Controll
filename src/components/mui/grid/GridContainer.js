import { Grid } from '@mui/material';

const GridContainer = ({ children, spacing }) => {
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
};

export default GridContainer;
